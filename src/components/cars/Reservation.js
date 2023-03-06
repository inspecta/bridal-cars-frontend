import React from 'react';
import { useLocation } from 'react-router-dom';

const Reservation = () => {
  const location = useLocation();
  const { car, user } = location.state;

  return (
    <div className="add_car_container">
      <h1>Reserve a car</h1>
      <form>
        <div className="add_car_field">
          <p>User:</p>
          <input
            type="text"
            name="name"
            placeholder="Enter User Name"
            value={user.username}
          />
        </div>
        <div className="add_car_field">
          <p>Car:</p>
          <input
            type="text"
            name="carname"
            placeholder="Enter name"
            value={car.name}
          />
        </div>
        <div className="add_car_field">
          <p>Price per hour:</p>
          <input
            type="text"
            name="price"
            placeholder="Price per hour"
            value={car.price}
          />
        </div>
        <div className="add_car_field">
          <p>Duration:</p>
          <input
            type="text"
            name="duration"
            placeholder="Enter Duration"
          />
        </div>
        <div className="add_car_field">
          <p>City:</p>
          <input
            type="number"
            name="price"
            placeholder="Enter the city"
          />
        </div>
        <div className="add_car_field">
          <p>Date:</p>
          <input
            type="date"
            name="date"
            placeholder="Enter the date"
          />
        </div>
        <div className="add_car_field">
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
