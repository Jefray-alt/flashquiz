import React from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Alert = ({ alert: { isAlertSet, alertContent } }) => {
  if (isAlertSet) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='alert d-block bg-alert'
        style={{ marginBottom: '10px' }}
      >
        <i className='fas fa-info-circle'></i> {alertContent.msg}
      </motion.div>
    );
  } else {
    return null;
  }
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
