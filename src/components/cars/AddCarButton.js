import React from 'react';
import { Link } from 'react-router-dom';

const AddCarButton = () => (
  <div className="add-car-btn">
    <Link to="/add-car">Add Car</Link>
  </div>
);

export default AddCarButton;
