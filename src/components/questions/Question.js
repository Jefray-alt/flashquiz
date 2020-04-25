import React, { useState, useEffect } from 'react';
import BoolChoice from './BoolChoice';
import MultipleChoice from './MulitpleChoice';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';

// utils
import { decodeHTML } from '../../utils/SelectDOM';

// Redux
import { connect } from 'react-redux';
import { setFinalScore } from '../../actions/questionActions';

import { setAlert, clearAlert } from '../../actions/alertActions';

const Question = ({
  question: { questions, loading, isStarting, number },
  setFinalScore,
  history,
  setAlert,
  clearAlert,
}) => {
  const [choice, setChoice] = useState(null);
  const [choices, setChoices] = useState([]);
  const [ctr, setCtr] = useState(0);
  const [score, setScore] = useState(0);

  // Checks if counter reached end
  useEffect(() => {
    if (ctr >= number) {
      setFinalScore(score);
      history.push('/summary');
    } else if (isStarting === false) {
      history.push('/');
    } else if (
      questions !== null &&
      questions.results[ctr].type === 'multiple'
    ) {
      const combinedAnswers = questions.results[ctr].incorrect_answers;
      combinedAnswers.push(questions.results[ctr].correct_answer);

      setChoices(shuffle(combinedAnswers));
    }
    // eslint-disable-next-line
  }, [questions, ctr]);

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const captureChoice = (data) => {
    if (data) {
      setChoice(data);
    } else {
      setChoice(null);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Checks the input of the user
    if (choice === null) {
      console.log('None Selected');
      setAlert('No choice selected!', 'bg-alert');
      setTimeout(() => {
        clearAlert();
      }, 5000);
    } else if (choice === decodeHTML(questions.results[ctr].correct_answer)) {
      console.log('Correct');
      setScore(score + 1);
    } else if (choice !== decodeHTML(questions.results[ctr].correct_answer)) {
      console.log('False');
    }

    // controls the counter questions
    if (ctr <= number && choice !== null) {
      setCtr(ctr + 1);
      setChoice(null);
    }
  };

  if (loading === false && questions !== null && ctr < number) {
    return (
      <div className='all-center h-100vh' onSubmit={onSubmit}>
        <Alert />
        <div className='card bg-white '>
          <form className='question-container'>
            <h2 style={{ marginBottom: '10px' }} className='text-center'>
              Question #{ctr + 1}
            </h2>
            <p>{decodeHTML(questions.results[ctr].question)}</p>
            {questions.results[ctr].type === 'multiple' ? (
              choices.length > 0 && (
                <MultipleChoice
                  choices={choices}
                  captureChoice={captureChoice}
                />
              )
            ) : (
              <BoolChoice captureChoice={captureChoice} />
            )}

            <button type='submit' className='btn btn-primary btn-block'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setFinalScore: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, {
  setFinalScore,
  setAlert,
  clearAlert,
})(Question);
