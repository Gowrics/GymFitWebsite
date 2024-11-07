// TrainerCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TrainerCardComponent.css';

const TrainerCard = ({ imageSrc, name, subtitle, description }) => {
  return (
    <div className="col-lg-6">
      <div className="card border-0 bg-transparent rounded-0 mb-4">
        <div className="row no-gutters align-items-center">
          <div className="col-md-6">
            <img src={imageSrc} alt={name} className="img-fluid w-100" />
          </div>
          <div className="col-md-6">
            <div className="card-body team-wrap pl-4">
              <h3 className="card-title text-color">{name}</h3>
              <h6 className="card-subtitle pb-4 letter-spacing">{subtitle}</h6>
              <p className="mb-5">{description}</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#"><i className="fab fa-facebook"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#"><i className="fab fa-linkedin"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
