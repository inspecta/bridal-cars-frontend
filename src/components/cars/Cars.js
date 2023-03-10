import React from 'react';
import AddCarButton from './AddCarButton';
import CarCard from './CarCard';

const Cars = () => (
  <div className="cars_container">
    <CarCard />
    <AddCarButton />
  </div>
);

export default Cars;
