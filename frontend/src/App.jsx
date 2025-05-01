import React from 'react';
import AddRestaurantButton from './components/AddRestaurantButton';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>🍽️ 맛집 리스트</h1>
      <AddRestaurantButton />
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default App;
