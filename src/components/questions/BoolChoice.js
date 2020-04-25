import React from 'react';

const BoolChoice = (props) => {
  const { captureChoice } = props;
  return (
    <div className='choices-container'>
      <label htmlFor='choice1'>
        <input
          type='radio'
          name='boolChoice'
          id='choice1'
          value='true'
          style={{ marginRight: '5px' }}
          onChange={(e) => captureChoice(e.target.value)}
        />
        True
      </label>
      <label htmlFor='choice2'>
        <input
          type='radio'
          name='boolChoice'
          id='choice2'
          value='false'
          style={{ marginRight: '5px' }}
          onChange={(e) => captureChoice(e.target.value)}
        />
        False
      </label>
    </div>
  );
};

export default BoolChoice;
