import React from 'react';
import Form from './Form';
import Experience from './Experience';
import List from './List';
import '../styles/Editable.css';

const Editable = (props) => {
  const { 
    formDisplay,
    headerInput,
    contactInput,
    skillInput,
    summaryInput,
    workInput,
    schoolInput,
    general,
    skill,
    job,
    school,
    skills,
    jobs,
    schools,
    editMode,
    onSubmit,
    onChange,
    onClick,
    onEdit,
    onDelete,
  } = props;
  
  return (
    <div className="resume-page">
      <section className='side-bar'>
        <Form items={headerInput} content={general} btnDisplay={false} onChange={onChange} />
        <div className='contact-section'>
          <h3 className='side-heading'>Contact</h3>
          <hr />
          <Form items={contactInput} content={general} btnDisplay={false} onChange={onChange} />
        </div>
        <div className='skills-section'>
          <h3 className='side-heading'>Skills</h3>
          <hr />
          {skills.length > 0 
            ? <List 
                items={skills}
                category={'skill'}
                editMode={editMode}
                onDelete={onDelete} />
            : ''
          }
          {formDisplay.skill
            ? <Form 
                items={skillInput} 
                btnDisplay={true}
                content={skill}
                onSubmit={onSubmit}
                onChange={onChange}
                onClick={onClick}
                sectionName={'skill'} />
            : <button type='submit' name='skill' onClick={onClick}>
                Add skills
              </button>
          }
        </div>
      </section>
      <main>
        <section className='summary-section'>
          <h3 className='summary-heading'>Summary</h3>
          <hr />
          <Form 
            items={summaryInput} 
            content={general} 
            btnDisplay={false} 
            onChange={onChange} />
        </section>
        <section className='work-section'>
          <h3 className='experience-heading'>Professional Experience</h3>
          <hr />
          {jobs.length > 0 
            ? <Experience 
                items={jobs} 
                editMode={editMode} 
                section={'job'}
                onEdit={onEdit}
                onDelete={onDelete} />
            : ''
          }
          {formDisplay.job
            ? <Form 
                items={workInput} 
                btnDisplay={true}
                content={job}
                onSubmit={onSubmit}
                onChange={onChange}
                onClick={onClick}
                sectionName={'job'} />
            : <button type='submit' name='job' onClick={onClick}>
                Add job
              </button>
          }
        </section>
        <section className='education-section'>
          <h3 className='experience-heading'>Education</h3>
          <hr />
          {schools.length > 0 
            ? <Experience 
                items={schools} 
                editMode={editMode} 
                section={'school'}
                onEdit={onEdit}
                onDelete={onDelete} />
            : ''
          }
          {formDisplay.school
            ? <Form 
                items={schoolInput} 
                btnDisplay={true} 
                content={school}
                onSubmit={onSubmit}
                onChange={onChange}
                onClick={onClick}
                sectionName={'school'} />
            : <button type='submit' name='school' onClick={onClick}>
                Add school
              </button>
          }
        </section>
      </main>
    </div>
  );
};

export default Editable;