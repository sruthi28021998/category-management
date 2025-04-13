import React from 'react';
function CategoryCard({ category }) {
  return (
    <div className="category-card">
      {category.imageUrl && <img src={category.imageUrl} alt={category.name} />}
      <h3>{category.name}</h3>
      <p>{category.description}</p>

    </div>
  );
}

export default CategoryCard;