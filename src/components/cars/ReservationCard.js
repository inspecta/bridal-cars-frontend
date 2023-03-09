import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({
  car, reservationDate, city, duration,
}) => (
  <div className="car-details-container">
    <div className="car-details">
      <div className="car-details-photo">
        <img
          src={car.photo}
          style={{ width: '100%' }}
          alt="Bridal car"
        />
      </div>
      <div className="car-details-info">
        <h2>{car.name}</h2>
        <div className="car-details-more-info">
          <p style={{ fontWeight: 'bold', textAlign: 'justify' }}>{car.description}</p>
          <table style={{ width: '100%', paddingTop: '1em' }}>
            <tbody>
              <tr>
                <td>Price:</td>
                <td>
                  $
                  {car.price}
                </td>
              </tr>
              <tr>
                <td>Model:</td>
                <td>{car.model}</td>
              </tr>
              <tr>
                <td>Reservation Date:</td>
                <td>{reservationDate}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{city}</td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td>{duration}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

ReservationCard.propTypes = {
  car: PropTypes.objectOf.isRequired,
  city: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  reservationDate: PropTypes.instanceOf(Date).isRequired,
};
export default ReservationCard;
