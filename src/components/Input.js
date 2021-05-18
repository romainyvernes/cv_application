import React from 'react';
import '../styles/Input.css';

const Input = (props) => {
  const { attributes, onChange, content } = props;
  
  return (
    <input 
      className='input-field'
      name={attributes.name}
      type={attributes.type}
      value={content[attributes.name.split('-')[1]]}
      placeholder={attributes.placeholder}
      onChange={onChange}
      required={attributes.name.split('-')[1] === 'endDate' ? false : true}
    />
  );
};

export default Input;