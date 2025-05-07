import React, { useState } from 'react';
import './AddRestaurantButton.css';
import { addRestaurant } from '../api/restaurantApi';

function AddRestaurantButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddRestaurant = async () => {
    if (name && address) {
      try {
        const newRestaurant = { name, address };
        await addRestaurant(newRestaurant);  // API 호출만 하기

        // 성공적으로 추가되면 이벤트 발생
        const event = new CustomEvent('restaurantAdded');
        window.dispatchEvent(event);

        setName('');
        setAddress('');
        setIsOpen(false);
      } catch (err) {
        console.error(err);
        alert('맛집 추가에 실패했어요 😥');
      }
    } else {
      alert('맛집 이름과 주소를 알려주세요😋');
    }
  };

  // 모달 외부 클릭 시 모달 닫기
  const handleBackdropClick = (e) => {
    // 모달 내부 클릭은 제외하고, 외부 클릭만 처리
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button className="add-restaurant-btn" onClick={() => setIsOpen(true)}>
        맛집 추가
      </button>

      {/* 항상 렌더링, 표시 여부만 클래스 변경 */}
      <div 
        className={`modal-backdrop ${isOpen ? 'show' : ''}`} 
        onClick={handleBackdropClick} // 배경 클릭 시 모달 닫기
      >
        <div className="modal-content">
          <h2>새로운 맛집</h2>
          <input
            type="text"
            placeholder="맛집 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="맛집 주소"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="button-group">
            <button onClick={handleAddRestaurant}>추가하기</button>
            <button onClick={() => setIsOpen(false)}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurantButton;
