import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <Component/> : <Navigate to={redirectTo} />
}

export default PrivateRoute;