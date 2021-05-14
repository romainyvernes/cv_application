// Use for all editable sections
import React from 'react';

const Form = (props) => {
  const { items } = props;
  
  return (
    <form onSubmit={props.onSubmit}>
      {items.map((item) => (
        <div>
          <label for={item.name}>{item.label}</label>
          <input 
            name={item.name} 
            placeholder={item.placeholder} 
            onChange={item.eventFunction}
          />
        </div>
      ))}
      <div className='form-btn-wrapper'>
        <button type='reset'>Cancel</button>
        <button type='submit'>Confirm</button>
      </div>
    </form>
  );
};

export default Form;