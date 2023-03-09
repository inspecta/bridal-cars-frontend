import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllReservations } from '../../redux/features/reservationSlice';
import ReservationCard from './ReservationCard';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllReservations());
  }, [dispatch]);

  const getAllReservations = useSelector(
    (state) => state.reservations.reservations,
  );

  return (
    <div className="res-card">
      <h1 className="cars-container-header">YOUR RESERVATIONS</h1>
      <div className="reservations-container">
        {getAllReservations.length > 0 ? (
          getAllReservations.map((r) => (
            <ReservationCard
              key={r.id}
              car={r.car}
              reservationDate={r.reservation_date}
              city={r.city}
              duration={r.duration}
            />
          ))
        ) : (
          <p>No cars reserved.</p>
        )}
      </div>
    </div>
  );
};

export default MyReservations;
