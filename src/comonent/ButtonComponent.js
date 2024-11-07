import React from 'react';
import './ButtonComponent.css'; // Include your button styles here

const ButtonComponent = ({ text, link, }) => {
  return (
    <a href={link} target="_blank"  rel="noopener noreferrer" className="btn btn-main">
      {text} <i className="ti-angle-right ml-3"></i>
    </a>
  );
};

export default ButtonComponent;





{/*import React from 'react';
import './ButtonComponent.css'; // Make sure to import the CSS file for styling

const ButtonComponent = () => {
  return (
    <div className="button-container">
      <a href="3" target="_blank" rel="noopener noreferrer" className="btn btn-main">
        Join Us <i className="ti-angle-right ml-3"></i>
      </a>
    </div>
  );
};

export default ButtonComponent;
*/ }