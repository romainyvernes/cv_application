import React from 'react';
import '../styles/Skills.css';

const Skills = (props) => {
  const { skill, skills } = props;
  
  return (
    <ul className='skills-list'>
      {skills.length === 0 
        ? <li>{skill.name}</li> 
        : skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))
      }
    </ul>
  );
};

export default Skills;