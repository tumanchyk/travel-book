import toast from 'react-hot-toast';
import axios from '../api/baseURL';
import { User } from '../types/user';

export const registerUser = async(user: User) => {
    try {
      const response = await axios.post('/register', user);
      return response.data;
    } catch (error) {
      //  if (typeof action.payload === 'string') {
      //   toast.error(action.payload);
      // } else if (action.payload && action.payload.status === 409) {
      //   toast.error('User with this email already exists');
      // } else {
      //   toast.error('An unexpected error occurred');
      // }
      console.log(error)
    }
}

export const loginUser = async (user: User) => {
    try {
      const response = await axios.post('/login', user);
      return response.data;
    } catch (error) {
        console.log(error)
    }
    
}

export const logoutUser = async () => {
     try {
      await axios.post('/logout');
    } catch (error) {
      console.log(error)
    }
}

export const refreshUser = async () => {
   const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No token available");
  }

    try {
      const currentUser = await axios.get('/current');
      return currentUser.data;
    } catch (error) {
      console.log(error)
    } 
}

