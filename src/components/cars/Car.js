import React from 'react';
// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
    <>
      <div
        className="car-component"
        role="button"
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
        <img
          src={car.photo}
          alt="bridal-car"
          style={{ width: '450px' }}
        />
        <h1 className="car-name">{car.name}</h1>
        <div className="car-component-info">
          <p>{car.description}</p>
          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedin /></span>
          </div>
        </div>
      </div>
      {showButton
        && (
        <div>
          <button type="button" onClick={() => removeCarFromStore(car.id)}>Delete</button>
        </div>
        )}

    </>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Car;
