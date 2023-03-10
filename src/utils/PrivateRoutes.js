import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { triggerAlert } from '../redux/features/alert';

const PrivateRoutes = () => {
  const dispatch = useDispatch();

  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      dispatch(
        triggerAlert({
          heading: 'Cannot access page, unathorized user.',
          message: 'Please sign in before accessing page!',
          variant: 'warning',
        }),
      );
    }
  }, [user, dispatch]);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
