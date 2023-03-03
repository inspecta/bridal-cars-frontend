import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { fetchAllCars } from '../../redux/features/carSlice';
import Car from './Car';

const Cars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getAllCars = useSelector((state) => state.cars);
  const message = location.state?.message;

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const handleClick = (carObject) => {
    navigate(
      '/car-details',
      {
        state: {
          cars: carObject,
        },
      },
    );
  };

  /*
    Cars Scroll Animation
  */
  const [position, setPosition] = useState(0);
  const scrollRef = useRef(null);

  const handlePrevClick = () => {
    if (position > 0) {
      setPosition(position - 1);
      scrollRef.current.scrollBy({
        left: -380,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (position < getAllCars.cars.length - 1 && scrollRef.current) {
      setPosition(position + 1);
      scrollRef.current.scrollBy({
        left: 380,
        behavior: 'smooth',
      });
    }
  };

  const isAtBeginning = position === 0;
  const isAtEnd = position === getAllCars.cars.length - 1;

  return (
    <div className="cars-container">
      <h1>LATEST BRIDAL CARS</h1>
      <p>Please select a bridal car</p>
      <div>
        {message && <p>{message}</p>}
      </div>
      <div className="car-list-wrapper">
        <button
          onClick={handlePrevClick}
          disabled={isAtBeginning}
          type="button"
          className="btnPrev"
        >
          <FaCaretLeft />
        </button>
        <div className="cars-list" ref={scrollRef}>
          {
            getAllCars.cars.length > 0
              ? getAllCars.cars.map((car) => (
                <Car
                  key={car.id}
                  car={car}
                  onClick={() => handleClick(car)}
                  onKeyDown={() => handleClick()}
                />
              ))
              : <p>No cars available.</p>
          }
        </div>
        <button
          onClick={handleNextClick}
          disabled={isAtEnd}
          type="button"
          className="btnNext"
        >
          <FaCaretRight />
        </button>
      </div>
      <div className="add-car-btn">
        <Link to="/add-car">Add Car</Link>
      </div>
    </div>
  );
};

export default Cars;
