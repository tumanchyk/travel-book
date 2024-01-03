import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader"
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import ItemList from '../pages/List';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddItem from "../pages/AddItem";
import EditItem from '../pages/EditItem';
import { refreshUser } from '../store/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]
  )
  
  return (
    isRefreshing ?
      <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <MoonLoader size={80}/>
      </div> :
      <Routes>
        <Route index element={<Navigate to="/list" />} />
        <Route
          path="/list"
          element={
            <PrivateRoute component={ItemList} redirectTo={'/login'} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute component={AddItem} redirectTo={'/login'} />
          }
        />
        <Route
          path="/edit/:id"
          element={<PrivateRoute component={EditItem} redirectTo={'/login'} />}
        />
        <Route
          path="/login"
          element={
            <PublicRoute component={Login} redirectTo={'/list'} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute component={Register} redirectTo={'/list'} />
          }
        />
      </Routes>
  
  )
}
export default App;
