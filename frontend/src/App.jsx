import React, { useEffect, useState } from 'react';
import AddRestaurantButton from './components/AddRestaurantButton';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './styles/App.css';
import { getAllRestaurants } from './api/restaurantApi';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <h1>🍽️ 맛집 리스트</h1>
      <AddRestaurantButton setRestaurants={setRestaurants} />
      {loading ? (
        <p>잠시만 기다려주세요...</p>
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
      <Footer />
    </div>
  );
};

export default App;
