import React, { useEffect, useState } from 'react';
import { getAllRestaurants } from '../api/restaurantApi';
import { deleteRestaurant } from '../api/restaurantApi';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // 맛집 리스트를 가져오기
  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const data = await getAllRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('맛집 불러오기 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 삭제 처리
  const handleDelete = async (restaurantId, name) => {
    try {
      // Optimistically update the UI
      setRestaurants(prevRestaurants =>
        prevRestaurants.filter(restaurant => restaurant.restaurantId !== restaurantId)
      );

      // 백엔드 삭제 API 호출
      await deleteRestaurant(restaurantId);
      // 성공 메시지 또는 추가적인 UI 업데이트
      alert(`맛집 ${name} 삭제 성공`);
      fetchRestaurants(); // 필요하다면 목록을 다시 불러올 수 있습니다.

    } catch (error) {
      console.error('맛집 삭제 실패:', error);
      // 에러 처리 (예: 사용자에게 알림)
      alert('맛집 삭제에 실패했습니다.');
      // 실패 시 UI를 원래 상태로 복원 (선택 사항)
      fetchRestaurants();
    }
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

  // 커스텀 이벤트 리스너 추가
  useEffect(() => {
    // 맛집 추가 이벤트를 감지하는 리스너
    const handleRestaurantAdded = () => {
      fetchRestaurants(); // 맛집 목록 다시 가져오기
    };

    // 이벤트 리스너 등록
    window.addEventListener('restaurantAdded', handleRestaurantAdded);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('restaurantAdded', handleRestaurantAdded);
    };
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
            <button className='delete-btn' onClick={() => handleDelete(restaurant.restaurantId, restaurant.name)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
