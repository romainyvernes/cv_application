// Use for all editable sections
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import '../styles/Form.css';

const Form = (props) => {
  const { items, btnDisplay, onChange, content } = props;
  
  return (
    <form 
      onSubmit={props.onSubmit || undefined} 
      autoComplete='off'
      name={props.sectionName || undefined}
      data-index={content.index !== undefined ? content.index : undefined}
    >
      {items.map((item, index) => (
        <div 
          className={
            `input-wrapper ${item.type === 'date' ? 'date-input' : ''}`
          }
          key={index}
        >
          {item.label && <label htmlFor={item.name}>{item.label}</label>}
          {item.type === 'text-area'
            ? <TextArea attributes={item} content={content} onChange={onChange} />
            : <Input attributes={item} content={content} onChange={onChange} />
          }
        </div>
      ))}
      {btnDisplay &&
        <div className='form-btn-wrapper'>
          <button 
            type='reset' 
            name={props.sectionName}
            onClick={props.onClick}
          >
            Cancel
          </button>
          <button type='submit'>Add</button>
        </div>
      }
    </form>
  );
};

export default Form;