import React from 'react';
import './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.length === 0 ? (
        <div className="empty-message">
          <p>🥺 아직 등록된 맛집이 없어요...</p>
          <p>😭 저 배고파요... 첫 번째 맛집 좀 알려주세요!</p>
        </div>
      ) : (
        restaurants.map((restaurant) => (
          <div key={restaurant.restaurantId} className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.createdAt}</p>
            <p>{restaurant.updatedAt}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
