import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() =>
        filterItems('all')}>
        Hepsi
      </button>
      <button className='filter-btn' onClick={() =>
        filterItems('breakfast')}>
        Kahvaltı
      </button>
      <button className='filter-btn' onClick={() =>
        filterItems('lunch')}>
        Yemek
      </button>
      <button className='filter-btn' onClick={() =>
        filterItems('drink')}>
        İçecekler
      </button>
    </div>
  );
};

export default Categories;