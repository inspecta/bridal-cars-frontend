import { Outlet, Navigate } from 'react-router-dom';

const AuthenticationRoutes = () => {
  const user = localStorage.getItem('user');
  return !user ? <Outlet /> : <Navigate to="/cars" />;
};

export default AuthenticationRoutes;
