import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { loginContext } from '../../login/context';

const PrivateRoute = () => {
  const { pathname } = useLocation();
  const {
    state: { isAuth },
  } = useContext(loginContext);

  return !isAuth ? <Navigate to={'/login'} state={{ pathname }} /> : <Outlet />;
};

export default PrivateRoute;
