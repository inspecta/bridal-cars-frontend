import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Car = ({ car, onClick }) => (
  <div
    className="car-component"
    role="button"
    style={{ width: '33.33%' }}
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
    </div>
  </div>
);

Car.propTypes = {
  car: PropTypes.objectOf.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Car;
