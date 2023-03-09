import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const CarDetails = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const selectedCar = state.cars;

  if (!selectedCar) {
    return <div>Car not found.</div>;
  }

  const handleClick = () => {
    navigate('/cars');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="car-details-container">
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
            <p style={{ fontWeight: '400' }}>{selectedCar.description}</p>
            <table style={{ width: '100%', paddingTop: '1em' }}>
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td>
                    $
                    {selectedCar.price}
                  </td>
                </tr>
                <tr>
                  <td>Model:</td>
                  <td>{selectedCar.model}</td>
                </tr>
                <tr>
                  <td>Reserved:</td>
                  {
                    selectedCar.reserved
                      ? <td>Reserved</td>
                      : <td>Available</td>
                  }
                </tr>
                <tr>
                  <td>Date:</td>
                  <td>{formatDate(selectedCar.created_at)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Circle */}
          <div className="circle">
            <div className="inner-circle" />
          </div>

          <div className="reserve-btn">
            {
              selectedCar.reserved
                ? <span>Reserved</span>
                : (
                  <Link to="/reserve-car">
                    <p>Reserve</p>
                    <p className="icon">{'>'}</p>
                  </Link>
                )
            }
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', display: 'flex' }} className="back-btn">
        <button onClick={() => handleClick()} type="button">
          <FaAngleLeft />
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
