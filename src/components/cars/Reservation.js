import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reserveCar } from '../../redux/features/reservationSlice';
import { updateCar } from '../../redux/features/carSlice';

const Reservation = () => {
  const { state } = useLocation();
  const { car } = state;
  const user = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    user_id: user.id,
    car_id: car.id,
    duration: '',
    city: '',
    reservation_date: '',
  });

  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const createReservation = (reserved) => {
    dispatch(reserveCar(formData)).then((result) => {
      if (
        result.payload !== undefined
          && Object.keys(result.payload).length > 0
      ) {
        dispatch(updateCar({ id: car.id, reserved }));
      }
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="add_car_container">
      <h1>Reserve a car</h1>
      <form onSubmit={handleSubmit}>
        <div className="add_car_field">
          <p>User:</p>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={user.username}
            readOnly
            // onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Car:</p>
          <input
            type="text"
            name="carname"
            placeholder="Enter name"
            value={car.name}
            readOnly
            // onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Price per hour:</p>
          <input
            type="text"
            name="price"
            placeholder="Price per hour"
            value={car.price}
            readOnly
            // onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Duration:</p>
          <input
            type="text"
            name="duration"
            placeholder="Enter Duration"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>City:</p>
          <input
            type="text"
            name="city"
            placeholder="Enter the city"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Date:</p>
          <input
            type="date"
            name="reservation_date"
            placeholder="Enter the date"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <button type="submit" onClick={() => createReservation(car.reserved)}>Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
