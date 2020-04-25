import React from 'react';

// Components
import Settings from './Settings';
import Alert from '../layout/Alert';

const Start = (props) => {
  return (
    <div className='text-center'>
      <Alert key='alert' />
      <Settings props={props} />
    </div>
  );
};

export default Start;
