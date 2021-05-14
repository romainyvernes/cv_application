// Use for both work and education
import React from 'react';
import '../styles/Experience.css';

const Experience = (props) => {
  const { template, items } = props;

  if (items.length === 0) {
    return (
      <section className='experience'>
        <div className='dates'>
          <p>{
            `${template.dates.start} - 
            ${template.dates.end || 'Present'}`
          }</p>
        </div>
        <div>
          <h4 className='experience-label'>
            {template.position || template.degree}
            {template.degree ? `, ${template.major}` : ''}
          </h4>
          <p className='experience-institution'>
            {template.name || template.company}
          </p>
          <p className='experience-location'>{template.location}</p>
          <ul className='experience-detail'>
            <li>{template.responsibility.content}</li>
          </ul>
        </div>
      </section>
    );
  } else {
    return (
      <section className='experience'>
        
      </section>
    );
  }
};

export default Experience;