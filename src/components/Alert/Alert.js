import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAlert } from '../../redux/features/alert';

const AlertComponent = ({ heading, message, variant }) => {
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => {
          setShow(false);
          dispatch(removeAlert());
        }}
        dismissible
        className="alert_container"
      >
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  return null;
};

AlertComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default AlertComponent;
