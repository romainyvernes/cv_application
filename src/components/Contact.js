import React from 'react';

const Contact = (props) => {
  const { contact } = props;
  
  return (
    <div className='contact-info'>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.linkedIn}</p>
    </div>
  );
};

export default Contact;