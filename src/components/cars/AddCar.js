/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../../redux/features/carSlice';
import { triggerAlert } from '../../redux/features/alert';

const AddCar = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    photo: '',
    price: 0,
    description: '',
  });
  const [isAddingCar, setIsAddingCar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.length > 0 &&
      formData.price.length > 0 &&
      formData.model.length > 0 &&
      formData.photo.length > 0
    ) {
      setIsAddingCar(true);
      dispatch(addCar(formData)).then((result) => {
        if (
          result.payload !== undefined &&
          Object.keys(result.payload).length > 0
        ) {
          navigate('/cars');
        } else {
          dispatch(
            triggerAlert({
              heading: 'Error in server',
              message: 'Please try again later!',
              variant: 'danger',
            }),
          );
        }
      })
        .finally(() => {
          setIsAddingCar(false);
        });
    } else {
      dispatch(
        triggerAlert({
          heading: 'Error Adding Car',
          message: 'Please check your car details inputs!',
          variant: 'danger',
        }),
      );
    }
  };

  return (
    <div className="add_car_container">
      <h1>Add a car</h1>
      {isAddingCar && (
        <div className="loader-overlay">
          <div className="loader-spinner" />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="add_car_field">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Enter Car Name"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Model:</p>
          <input
            type="text"
            name="model"
            placeholder="Enter Car Model"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Photo:</p>
          <input
            type="text"
            name="photo"
            placeholder="Paste Car Url"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Description:</p>
          <input
            type="text"
            name="description"
            placeholder="Enter Car Description"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <p>Price Per Hour:</p>
          <input
            type="number"
            name="price"
            placeholder="Enter Car Price Per Hour"
            onChange={handleInput}
          />
        </div>
        <div className="add_car_field">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
