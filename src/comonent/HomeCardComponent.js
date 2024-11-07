// Card.js
import React from 'react';
import './HomeCardComponent.css';


const HomeCard = ({ number, title, description, link }) => {
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="card card1 p-5 border-0 rounded-top hover-style-1 flex-fill">
            <h3 className="number">{number}</h3>
                <h3 className="mt-3">{title}</h3>
                <p className="mt-3 mb-4">{description}</p>
                <a href={link} className="text-color text-uppercase font-size-13 letter-spacing font-weight-bold">
                <i className="fas fa-minus mr-2 text-color"></i>more Details
                </a>
            </div>
        </div>
    );
};

export default HomeCard;
