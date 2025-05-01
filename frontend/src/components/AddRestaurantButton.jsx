import React, { useState } from 'react';
import './AddRestaurantButton.css';

function AddRestaurantButton({ setRestaurants }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddRestaurant = () => {
    if (name && address) {
      setRestaurants(prev => [
        ...prev,
        { id: Date.now(), name, address }
      ]);
      setName('');
      setAddress('');
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button className="add-restaurant-btn" onClick={() => setIsOpen(true)}>
        식당 추가
      </button>

      {/* 항상 렌더링, 표시 여부만 클래스 변경 */}
      <div className={`modal-backdrop ${isOpen ? 'show' : ''}`}>
        <div className="modal-content">
          <h2>새로운 맛집</h2>
          <input
            type="text"
            placeholder="식당 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="식당 주소"
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
