import React, { useEffect, useState } from 'react';
import { getAllRestaurants } from '../api/restaurantApi';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // 맛집 리스트를 가져기
  const fetchRestaurants = async () => {
    try {
      const data = await getAllRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('맛집 불러오기 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 삭제 처리
  const handleDelete = (restaurantId) => {
    alert(restaurantId);
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 예: 2025. 5. 1.
  };

  // 컴포넌트가 마운트될 때 맛집 리스트를 가져옴
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {loading ? (
        <p>잠시만 기다려주세요...</p>
      ) : restaurants.length === 0 ? (
        <div className="empty-message">
          <p>🥺 아직 등록된 맛집이 없어요...</p>
          <p>😭 저 배고파요... 첫 번째 맛집 좀 알려주세요!</p>
        </div>
      ) : (
        restaurants.map((restaurant) => (
          <div key={restaurant.restaurantId} className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{formatDate(restaurant.createdAt)}</p>
            <p>{formatDate(restaurant.updatedAt)}</p>
            <button className='delete-btn' onClick={() => handleDelete(restaurant.restaurantId)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
