import { Navigate } from 'react-router';

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  return isLoggedIn ? <Component/> : <Navigate to={redirectTo} />
}

export default PrivateRoute;