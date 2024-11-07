// src/components/Card.js

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import your CSS styles

const Card = ({ image, title, mentor, schedule, link }) => {
  return (
    <div className="card rounded-0 p-0 mb-5">
      <img src={image} alt={title} className="img-fluid" />
      <div className="card-body">
        <a href={link}><h4 className="mt-3 mb-0">{title}</h4></a>
        <p className="mb-2">Mentor: {mentor}</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="ti-time mr-2 text-color"></i> {schedule.days}:
          </li>
          <li className="list-inline-item text-black">
            <strong>{schedule.time}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
  schedule: PropTypes.shape({
    days: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
