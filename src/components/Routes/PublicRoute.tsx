import { Navigate } from 'react-router';

interface PublicRouteProps {
  component: React.ComponentType;
  redirectTo?: string; 
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
};

export default PublicRoute;