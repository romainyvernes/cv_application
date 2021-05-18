import React from 'react';
import '../styles/TextArea.css';

const TextArea = (props) => {
  const { attributes, onChange, content } = props;
  
  return (
    <textarea 
      name={attributes.name}
      placeholder={attributes.placeholder}
      value={content[attributes.name.split('-')[1]].content !== undefined
        ? content[attributes.name.split('-')[1]].content
        : content[attributes.name.split('-')[1]]
      }
      onChange={onChange}
      required
    ></textarea>
  );
};

export default TextArea;