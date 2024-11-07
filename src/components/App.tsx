import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import ItemList from '../pages/List';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddItem from "../pages/AddItem";
import EditItem from '../pages/EditItem';
import { refreshUser } from '../services/authOperations';
import Loader from './common/Loader';

const App = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  
  const { error, isLoading, isFetching } = useQuery({
    queryKey: ['refreshUser'],
    queryFn: refreshUser,
    staleTime: Infinity,
    retry: 1, 
  });

  useEffect(() => {
    if (error && !redirect) {
      setRedirect(true);
    }
  }, [error, redirect]);

  useEffect(() => {
    if (redirect) {
      navigate('/login', { replace: true });
    }
  }, [redirect, navigate]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/list" />} />
      <Route
        path="/list"
        element={<PrivateRoute component={ItemList} redirectTo="/login" />}
      />
      <Route
        path="/add"
        element={<PrivateRoute component={AddItem} redirectTo="/login" />}
      />
      <Route
        path="/edit/:id"
        element={<PrivateRoute component={EditItem} redirectTo="/login" />}
      />
      <Route
        path="/login"
        element={<PublicRoute component={Login} redirectTo="/list" />}
      />
      <Route
        path="/register"
        element={<PublicRoute component={Register} redirectTo="/list" />}
      />
    </Routes>
  );
};

export default App;
