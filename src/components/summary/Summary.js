import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { clearState, clearStarting } from '../../actions/questionActions';

const Summary = ({
  question: { finalScore, number },
  clearStarting,
  clearState,
  history,
}) => {
  const [ctr, setCtr] = useState(0);
  useEffect(() => {
    clearStarting();
    if (number === 0) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (finalScore !== 0) {
      setTimeout(() => {
        if (ctr < (finalScore / number) * 100) {
          setCtr(ctr + 1);
        }
      }, 10);
    }
    // eslint-disable-next-line
  }, [ctr]);

  const onClick = () => {
    clearState();
    history.push('/start');
  };

  if (number !== 0) {
    return (
      <div className='all-center h-100vh'>
        <div
          className='card bg-white text-center all-center'
          style={{ width: '300px' }}
        >
          <h3>Percentage:</h3>
          <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>{ctr}%</h1>
          <p>
            You scored {finalScore} out of {number}
          </p>
          <button
            type='button'
            className='btn btn-primary'
            style={{ marginTop: '10px' }}
            onClick={onClick}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, { clearState, clearStarting })(Summary);
