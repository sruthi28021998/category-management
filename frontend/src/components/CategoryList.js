import React from 'react';
import CategoryCard from './CategoryCard';


function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map(category => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;