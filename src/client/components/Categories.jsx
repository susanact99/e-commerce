import React from 'react';
import '../styles/categories.css';

export function Categories({ setSelectedCategory }) {
  const categories = [
    { category: "all", id: 0 },
    { category: "men's clothing", id: 1 },
    { category: "jewelery", id: 2 },
    { category: "electronics", id: 3 },
    { category: "women's clothing", id: 4 }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='main-container'>
      <h5 className='categories-header'>-MAIN CATEGORIES-</h5>
      <div className='categories-container'>
        {categories.map((item) => (
          <div key={item.id}>
            <button
              className='category'
              onClick={() => handleCategoryClick(item.category)}
            >
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}