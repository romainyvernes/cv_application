import React from 'react';
import Form from './Form';
import '../styles/Editable.css';

const Editable = (props) => {
  const { 
    formDisplay,
    header,
    contact,
    skills,
    summary,
    work,
    school,
    onSubmit,
  } = props;
  
  return (
    <div className="resume-page">
      <section className='side-bar'>
        <Form items={header} btnDisplay={false} />
        <div className='contact-section'>
          <h3 className='side-heading'>Contact</h3>
          <hr />
          <Form items={contact} btnDisplay={false}/>
        </div>
        <div className='skills-section'>
          <h3 className='side-heading'>Skills</h3>
          <hr />
          {formDisplay.skills
            ? <Form 
                items={skills} 
                btnDisplay={true} 
                onSubmit={onSubmit}
                sectionName={'skill'} />
            : <button type='submit'>Add skills</button>
          }
        </div>
      </section>
      <main>
        <section className='summary-section'>
          <h3 className='summary-heading'>Summary</h3>
          <hr />
          <Form items={summary} btnDisplay={false}/>
        </section>
        <section className='work-section'>
          <h3 className='experience-heading'>Professional Experience</h3>
          <hr />
          {formDisplay.job
            ? <Form 
                items={work} 
                btnDisplay={true} 
                onSubmit={onSubmit}
                sectionName={'job'} />
            : <button type='submit'>Add job</button>
          }
        </section>
        <section className='education-section'>
          <h3 className='experience-heading'>Education</h3>
          <hr />
          {formDisplay.school
            ? <Form 
                items={school} 
                btnDisplay={true} 
                onSubmit={onSubmit}
                sectionName={'school'} />
            : <button type='submit'>Add school</button>
          }
        </section>
      </main>
    </div>
  );
};

export default Editable;