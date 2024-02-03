import { PropTypes } from 'prop-types';
import React from 'react';

const AlertComponent = ({ type, message }) => {
  // type can be 'success', 'info', 'warning', or 'danger'
  const alertClass = `alert alert-${type}`;

  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

export default AlertComponent;

AlertComponent.propTypes = { type: PropTypes.string, message: PropTypes.string }; 