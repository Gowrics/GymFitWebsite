// CourseCard.js
import React from 'react';
import './CardImgComponent.css'; // Import your CSS file for styles
import ButtonComponent from './ButtonComponent';

const CourseCard = ({ image, title, mentor, link }) => {
    return (
        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div className="card border-0 rounded-0 p-0 shadow-sm">
                <img src={image} alt={title} className="img-fluid" />
                <div className="card-body">
                    <a href={link}>
                        <h4 className="font-secondary mb-0">{title}</h4>
                    </a>
                    <p className="mb-2">Mentor: {mentor}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
