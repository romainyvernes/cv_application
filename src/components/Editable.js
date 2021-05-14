import React from 'react';
import Form from './Form';

const Editable = (props) => {
  const { 
    formDisplay,
    header,
  } = props;
  
  return (
    <div className="app">
      <section className='side-bar'>
        <Form items={header}/>
        
        <h3 className='side-heading'>Contact</h3>
        <hr />
        <Form />
        
        <h3 className='side-heading'>Skills</h3>
        <hr />
        {formDisplay.skill
          ? <Form />
          : <button type='submit'>Add skills</button>
        }
      </section>
      <main>
        <h3 className='summary-heading'>Summary</h3>
        <hr />
        <Form />
        
        <h3 className='experience-heading'>Professional Experience</h3>
        <hr />
        {formDisplay.job
          ? <Form />
          : <button type='submit'>Add job</button>
        }
        
        <h3 className='experience-heading'>Education</h3>
        <hr />
        {formDisplay.school
          ? <Form />
          : <button type='submit'>Add school</button>
        }
      </main>
    </div>
  );
};

export default Editable;