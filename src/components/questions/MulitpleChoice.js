import React from 'react';

// utils
import { decodeHTML } from '../../utils/SelectDOM';

const MultipleChoice = (props) => {
  const { choices, captureChoice } = props;

  return (
    <div className='choices-container-multiple'>
      {choices.length !== 0
        ? choices.map((choice) => (
            <label htmlFor={`${choice}`} key={`${decodeHTML(choice)}`}>
              <input
                type='radio'
                name='boolChoice'
                id={`${decodeHTML(choice)}`}
                value={`${decodeHTML(choice)}`}
                style={{ marginRight: '5px' }}
                onChange={(e) => captureChoice(e.target.value)}
              />
              {`${decodeHTML(choice)}`}
            </label>
          ))
        : ''}
    </div>
  );
};

export default MultipleChoice;
