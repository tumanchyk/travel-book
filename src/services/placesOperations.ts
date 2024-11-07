import toast from 'react-hot-toast';
import axios from '../api/baseURL';

export const getAllPlaces = async () => {
  try {
      const response = await axios.get('/places');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
}

export const getPlaceById = async (id: string) => {
  try {
      const response = await axios.get(`/places/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
}

export const createPlace = async (data: FormData) => {
  try {
      const response = await axios.post('/places', data)
      toast.success('New place added to your list')
      return response.data;

    } catch (error) {
      return console.log(error);
    }
}

export const updatePlaces = async (data: { formData: FormData; _id: string }) => {
  try {
      const response = await axios.put(`/places/${data._id}`, data.formData);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
}

export const deletePlaces = async (id: string) => {
  try {
      const response = await axios.delete(`/places/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
}