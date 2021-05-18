import React from 'react';
import '../styles/List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  const { items, category } = props;
  
  return (
    <ul 
      className={`${category}-list ${
        props.editMode ? 'skill-edit' : ''
      }`}
    >
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name || item.content}</span>
          {props.editMode 
            ? <button 
                name={category} 
                value={item.id} 
                onClick={props.onDelete}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button> 
            : ''
          }
        </li>
      ))}
    </ul>
  );
};

export default List;