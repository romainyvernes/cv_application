import React from 'react';
import Header from './Header';
import Contact from './Contact';
import List from './List';
import Summary from './Summary';
import Experience from './Experience';
import '../styles/Preview.css';

const Preview = (props) => {
  const { 
    general, 
    skill, 
    job, 
    school,
    skills,
    jobs,
    schools,
  } = props;
  
  return (
    <div className="resume-page">
      <section className='side-bar'>
        <Header name={general.name} position={general.position}/>
        <div className='contact-section preview-contact'>
          <h3 className='side-heading'>Contact</h3>
          <hr />
          <Contact 
            email={general.email} 
            phone={general.phone} 
            linkedIn={general.linkedIn} />
        </div>
        <div className='skills-section'>
          <h3 className='side-heading'>Skills</h3>
          <hr />
          {skills.length === 0
            ? <List items={[skill]} category={'skills'}/>
            : <List items={skills} category={'skills'}/>
          }
        </div>
      </section>
      <main>
        <section className='summary-section'>
          <h3 className='summary-heading'>Summary</h3>
          <hr />
          <Summary summary={general.description}/>
        </section>
        <section className='work-section'>
          <h3 className='experience-heading'>Professional Experience</h3>
          <hr />
          {jobs.length === 0 
            ? <Experience items={[job]}/>
            : <Experience items={jobs}/>
          }
        </section>
        <section className='education-section'>
          <h3 className='experience-heading'>Education</h3>
          <hr />
          {schools.length === 0 
            ? <Experience items={[school]}/>
            : <Experience items={schools}/>
          }
        </section>
      </main>
    </div>
  );
};

export default Preview;