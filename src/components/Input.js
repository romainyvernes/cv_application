import React from 'react';
import '../styles/Input.css';

const Input = (props) => {
  const { attributes } = props;

  return (
    <input 
      name={attributes.name}
      type={attributes.type}
      placeholder={attributes.placeholder}
      onChange={attributes.eventFunction}
      required
    />
  );
};

export default Input;