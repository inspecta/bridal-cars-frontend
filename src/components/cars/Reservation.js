/* eslint-disable operator-linebreak */
import React from 'react';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addCar } from '../../redux/features/carSlice';

const Reservation = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     model: '',
//     photo: '',
//     price: 0,
//     description: '',
//   });

  //   const handleInput = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (
  //       formData.name.length > 0
  //           && formData.price.length > 0
  //           && formData.model.length > 0
  //           && formData.photo.length > 0
  //     ) {
  //       dispatch(addCar(formData)).then((result) => {
  //         if (
  //           result.payload !== undefined
  //               && Object.keys(result.payload).length > 0
  //         ) {
  //           navigate('/cars');
  //         }
  //       });
  //     }
  //   };
  <div className="add_car_container">
    <h1>Reserve a car</h1>
    <form>
      <div className="add_car_field">
        <p>User:</p>
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
        />
      </div>
      <div className="add_car_field">
        <p>Car:</p>
        <input
          type="text"
          name="carname"
          placeholder="Enter name"
        />
      </div>
      <div className="add_car_field">
        <p>Price per hour:</p>
        <input
          type="text"
          name="price"
          placeholder="Price per hour"
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
  </div>;
};

export default Reservation;
