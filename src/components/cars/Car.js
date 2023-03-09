import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteCar } from '../../redux/features/carSlice';

const Car = ({ car, onClick, showButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeCarFromStore = (id) => {
    dispatch(deleteCar(id)).then((resp) => {
      if (resp.payload !== undefined) {
        navigate('/cars');
      }
    });
  };
  return (
    <div
      className="car-component"
      role="button"
      style={{ width: '100%' }}
      tabIndex="0"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onClick();
        }
      }}
      onTouchStart={onClick}
      onTouchEnd={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      <div
        className="car-component-img"
        style={{
          backgroundImage: `url(${car.photo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '90%',
          marginBottom: '1em',
          marginTop: '1em',
        }}
      />
      <div className="car-component-info">
        <h1 className="car-name">{car.name}</h1>
        <div className="dotten-line" />
        <p>{car.description}</p>
        {showButton
          && (
            <div className="delete-button-container">
              <Button variant="danger" className="button delete-button" type="button" onClick={() => removeCarFromStore(car.id)}>Delete</Button>
            </div>
          )}
        {showButton ? (<></>) : (
          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedin /></span>
          </div>
        )}
      </div>
    </div>
  );
};

Car.propTypes = {
  car: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Car;
