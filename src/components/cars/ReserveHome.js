import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUser } from '../../redux/features/user';
// import { useLocation } from 'react-router-dom';
import Cars from './Cars';

const ReserveHome = () => {
  // const dispatch = useDispatch();
  // const getAllCars = useSelector((state) => state.cars);
  // const user = useSelector((state) => state.user);
  console.log('user');
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);
  // console.log(getAllCars);

  return (
    <div>
      <div>
        <h2>Reserve a car</h2>
      </div>
      <Cars showHeader={false} />
    </div>
  );
};

export default ReserveHome;
