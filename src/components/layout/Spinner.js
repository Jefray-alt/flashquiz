import React from 'react';
import { motion } from 'framer-motion';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <motion.img
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      src={spinner}
      alt=''
      style={spinnerStyle}
      className='fadeIn'
    />
  );
};

const spinnerStyle = {
  height: '50px',
  width: '50px',
};

export default Spinner;
