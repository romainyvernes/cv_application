// Use for both work and education
import React from 'react';
import '../styles/Experience.css';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Experience = (props) => {
  const { items } = props;

  return (
    <div 
      className={`experience-wrapper ${
        props.editMode ? 'experience-edit' : ''
      }`}
    >
      {items.map((item) => (
        <div className='experience' key={item.id}>
          <div className='dates'>
            <p>{item.startDate} - {item.endDate || 'Present'}</p>
          </div>
          <div>
            <h4 className='experience-label'>
              {item.position || item.degree}
              {item.degree ? `, ${item.major}` : ''}
            </h4>
            <p className='experience-institution'>
              {item.institution || item.company}
            </p>
            <p className='experience-location'>{item.location}</p>
            {item.responsibilities.length === 0
              ? <List 
                  items={[item.responsibility]} 
                  category={'experience'} />
              : <List items={item.responsibilities} category={'experience'}/>
            }
          </div>
          {props.editMode
            ? <div className='experience-btn-wrapper'>
                <button 
                  name={props.section} 
                  value={item.id} 
                  onClick={props.onEdit}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button 
                  name={props.section} 
                  value={item.id} 
                  onClick={props.onDelete}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            : ''
          }
        </div>
      ))}
    </div>
  );
};

export default Experience;