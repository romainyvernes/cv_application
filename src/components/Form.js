// Use for all editable sections
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import '../styles/Form.css';

const Form = (props) => {
  const { items, btnDisplay } = props;
  
  return (
    <form 
      onSubmit={props.onSubmit || undefined} 
      autoComplete='off'
      data-section-name={props.sectionName || undefined}
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
            ? <TextArea attributes={item}/>
            : <Input attributes={item}/>
          }
        </div>
      ))}
      {btnDisplay &&
        <div className='form-btn-wrapper'>
          <button type='reset'>Cancel</button>
          <button type='submit'>Add</button>
        </div>
      }
    </form>
  );
};

export default Form;