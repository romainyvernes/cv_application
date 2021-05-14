import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Skills from './Skills';
import Summary from './Summary';
import Experience from './Experience';

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
    <div className="app">
      <section className='side-bar'>
        <Header name={general.name} position={general.position}/>
        
        <h3 className='side-heading'>Contact</h3>
        <hr />
        <Contact contact={general.contact}/>
        
        <h3 className='side-heading'>Skills</h3>
        <hr />
        <Skills skill={skill} skills={skills}/>
      </section>
      <main>
        <h3 className='summary-heading'>Summary</h3>
        <hr />
        <Summary summary={general.description}/>
        
        <h3 className='experience-heading'>Professional Experience</h3>
        <hr />
        <Experience template={job} items={jobs}/>
        
        <h3 className='experience-heading'>Education</h3>
        <hr />
        <Experience template={school} items={schools}/>
      </main>
    </div>
  );
};

export default Preview;