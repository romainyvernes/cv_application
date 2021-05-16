import React from 'react';

const Contact = (props) => {
  const { email, phone, linkedIn } = props;
  
  return (
    <div className='contact-info'>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{linkedIn}</p>
    </div>
  );
};

export default Contact;