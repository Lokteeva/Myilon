import React from 'react';

function Categories({ items, value, onChangeCategory }) {
  
  return (
    <div className="categories">
      <ul>       
        {items &&
        items.map((name, id) => (
          <li
            className={value === id ? 'active' : ''}
            onClick={() => onChangeCategory(id)}
            key={`${name}_${id}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
