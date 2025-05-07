import api from './axios';

export const getAllRestaurants = async () => {
  const response = await api.get('/restaurants');
  return response.data;
}

export const addRestaurant = async (restaurant) => {
  const response = await api.post('/restaurants', restaurant);
  return response.data;
}
