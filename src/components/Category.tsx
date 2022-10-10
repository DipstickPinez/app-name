import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface CategoryParts {
  children?: React.ReactNode;
  categoryName: string;
  subcategories: any[];
}

const CategoryObject = (categoryParts: CategoryParts) => {
  const subcategoriesLi = categoryParts.subcategories.map(
    description => <li>{description}</li>
  );
  return (
    <section>
      <h2>{categoryParts.categoryName}</h2>
      {categoryParts.subcategories}
    </section>
  );
};

export default CategoryObject;
