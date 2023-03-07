import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const CarDetails = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const selectedCar = state.cars;
  // const user = localStorage.getItem('user');

  if (!selectedCar) {
    return <div>Car not found.</div>;
  }

  const handleClick = () => {
    navigate('/');
  };

  // const handleReserve = () => {
  //   navigate('/reserve-car');
  // };

  return (
    <>
      <div className="car-details">
        <div className="car-details-photo">
          <img
            src={selectedCar.photo}
            style={{ width: '100%' }}
            alt="Bridal car"
          />
        </div>
        <div className="car-details-info">
          <h2>{selectedCar.name}</h2>
          <div className="car-details-more-info">
            <p>{selectedCar.description}</p>
            <p>
              Reservation Price:
              {selectedCar.price}
            </p>
            <p>
              Car Type:
              {selectedCar.model}
            </p>
            <p>
              Created Date:
              {selectedCar.created_at}
            </p>
          </div>
          <div className="add-car-btn">
            <Link
              to="/reservation-form"
              state={{
                car: selectedCar,
              }}
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => handleClick()} type="button">
          <FaAngleLeft />
        </button>
      </div>
    </>
  );
};

export default CarDetails;
