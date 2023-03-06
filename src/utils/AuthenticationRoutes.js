import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { triggerAlert } from '../redux/features/alert';

const AuthenticationRoutes = () => {
  const dispatch = useDispatch();

  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      dispatch(
        triggerAlert({
          heading: 'Cannot access page after login',
          message: 'Please signout before accessing page!',
          variant: 'warning',
        }),
      );
    }
  }, [user, dispatch]);

  return !user ? <Outlet /> : <Navigate to="/cars" />;
};

export default AuthenticationRoutes;
