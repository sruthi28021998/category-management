import React, { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <CategoryList categories={categories} />
    </div>
  );
}

export default HomePage;