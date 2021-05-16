import React from 'react';
import '../styles/List.css';

const List = (props) => {
  const { items, category } = props;
  
  return (
    <ul className={`${category}-list`}>
      {items.map((item) => (
        <li key={item.id}>{item.name || item.content}</li>
      ))}
    </ul>
  );
};

export default List;