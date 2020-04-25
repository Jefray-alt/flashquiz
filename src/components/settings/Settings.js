// @TODO create validation and comments

import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { motion } from 'framer-motion';

// Components
import Picker from '../settings/Picker';
import Spinner from '../layout/Spinner';

// Utils
import {
  selectMultipleManipulation,
  getSelectValue,
} from '../../utils/SelectDOM';

// Redux
import { connect } from 'react-redux';
import {
  getCategory,
  setQuestions,
  setStarting,
  clearState,
} from '../../actions/questionActions';
import { setAlert, clearAlert } from '../../actions/alertActions';

const Settings = ({
  question: { questions, loading, categories },
  getCategory,
  setQuestions,
  setStarting,
  setAlert,
  clearState,
  clearAlert,
  props,
}) => {
  useEffect(() => {
    if (questions !== null) {
      clearState();
    }
    if (categories === null) {
      getCategory();
    }
    if (categories !== null) {
      selectMultipleManipulation();
    }
  }, [categories]);

  const Difficulty = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  const nQuestions = [
    { id: 5, name: 5 },
    { id: 6, name: 6 },
    { id: 7, name: 7 },
    { id: 8, name: 8 },
    { id: 9, name: 9 },
    { id: 10, name: 10 },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    // Get category value
    const cat = getSelectValue('Category');
    // Get num of questions
    const num = getSelectValue('Questions');
    // Get difficulty
    const diff = getSelectValue('Difficulty');
    if (cat === null || num === null || diff === null) {
      setAlert('Please complete all the fields', 'bg-alert');
      setTimeout(() => clearAlert(), 5000);
    } else {
      setStarting(num);
      setQuestions(cat, diff, num);
      props.history.push('/questions');
    }
  };

  if (loading === false && categories !== null) {
    return (
      <form
        className='setting-form fadeIn'
        style={{ marginBottom: '1rem' }}
        onSubmit={onSubmit}
      >
        <h1 className='display-3'>Set Up your Challenge!</h1>
        <p style={{ marginBottom: '1rem' }}>
          Choose from the options below your desired criteria
        </p>
        <div className='category-select'>
          <Picker items={categories.trivia_categories} type={'Category'} />
        </div>
        <div className='inline-form'>
          <div className='difficulty-select select-container '>
            <Picker items={Difficulty} type={'Difficulty'} />
          </div>
          <div className='questionaire-select select-container'>
            <Picker items={nQuestions} type={'Questions'} />
          </div>
        </div>
        <input
          className='btn btn-primary btn-block'
          style={{ marginTop: '1rem' }}
          type='submit'
          value='Ready!'
        />
      </form>
    );
  } else {
    return <Spinner />;
  }
};

Settings.propTypes = {
  question: Proptypes.object.isRequired,
  getCategory: Proptypes.func.isRequired,
  setQuestions: Proptypes.func.isRequired,
  clearState: Proptypes.func.isRequired,
  setStarting: Proptypes.func.isRequired,
  setAlert: Proptypes.func.isRequired,
  clearAlert: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, {
  getCategory,
  setQuestions,
  setStarting,
  setAlert,
  clearState,
  clearAlert,
})(Settings);
