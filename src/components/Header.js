import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h2 className='side-name'>{props.name}</h2>
      <p className='side-position'>{props.position}</p>
    </div>
  );
};

export default Header;