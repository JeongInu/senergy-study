import api from './axios';

export const getAllRestaurants = async () => {
  const response = await api.get('/restaurants');
  return response.data;
}