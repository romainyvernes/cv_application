import React from 'react';
import '../styles/TextArea.css';

const TextArea = (props) => {
  const { attributes } = props;

  return (
    <textarea 
      name={attributes.name}
      placeholder={attributes.placeholder}
      onChange={attributes.eventFunction}
      required
    ></textarea>
  );
};

export default TextArea;