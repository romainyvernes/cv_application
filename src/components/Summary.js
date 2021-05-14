import React from 'react';

const Summary = (props) => {  
  return (
    <section className='summary'>
      <p>{props.summary}</p>
    </section>
  );
};

export default Summary;