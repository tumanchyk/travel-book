import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
};

export default PublicRoute;