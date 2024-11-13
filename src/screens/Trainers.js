import React from 'react';
import PageTitle from '../comonent/PageTitle';
import './Trainer.css';
import tr2 from '../assets/tr2.jpg';
import tr1 from '../assets/tr1.jpg';
import tr3 from '../assets/tr3.jpg';
import tr4 from '../assets/tr4.jpg';
import SectionTitle from '../comonent/SectionTitleComponent';
import { Link } from 'react-router-dom';

const Trainers = () => {
  return (
    <div>
      <PageTitle linkText="Home" linkHref="/" pageName="team" pageInfo="trainer" />
      <section className="section trainersec bg-gray">
        <div className="container">
          <div className="row row2 justify-content-center">
            <div className="row row1 justify-content-center">
              <SectionTitle title="our Trainer" line="___" description="" />
            </div>

            <div className="col-lg-6">
              <div className="card border-0 mb-1 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr1} alt="Bruice John" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Bruice John</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">
                        Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.
                      </p>
                      <span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 mb-1 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr2} alt="Virgil Cook" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Virgil Cook</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">
                        Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.
                      </p>
                      <span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 bg-transparent rounded-0 mb-4 mb-lg-0">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr3} alt="Julie Collins" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Julie Collins</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">
                        Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.
                      </p>
                      <span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card p-0 border-0 bg-transparent rounded-0">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr4} alt="Thomas Vel" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Thomas Vel</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">
                        Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.
                      </p>
                      <span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
