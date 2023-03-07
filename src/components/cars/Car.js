import React from 'react';
// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { deleteCar } from '../../redux/features/carSlice';

const Car = ({ car, onClick }) => (
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
        backgroundSize: 'contain',
      }}
    />
    <div className="car-component-info">
      <h1 className="car-name">{car.name}</h1>
      <div className="dotten-line" />
      <p>{car.description}</p>
      <div className="social-icons">
        <span><FaFacebookF /></span>
        <span><FaTwitter /></span>
        <span><FaLinkedin /></span>
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
  car: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Car;
