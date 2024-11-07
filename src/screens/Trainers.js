import React from 'react';
import PageTitle from '../comonent/PageTitle';
import './Trainer.css';
import tr2 from '../assets/tr2.jpg';
import tr1 from '../assets/tr1.jpg';
import tr3 from '../assets/tr3.jpg';
import tr4 from '../assets/tr4.jpg';
import SectionTitle from '../comonent/SectionTitleComponent';

const Trainers = () => {
  return (
    <div className='main-container'>
      <PageTitle linkText="Home" linkHref="/" pageName="team" pageInfo="trainer" />
      <section className="section trainersec bg-gray
">
        <div className="container">
          <div className="row row1 justify-content-center">
          <SectionTitle title="our Trainer" line="___" description=""/>
          </div>

          <div className="row row2">
            <div className="col-lg-6">
              <div className="card border-0 mb-1 ms-5 ms-5 crd1 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr1} alt="Trainer 1" className="img-fluid " />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Bruice John</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">Growing up, I’ve always been involved in sports, fitness, and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fas fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat similar structure for other trainers */}
            <div className="col-lg-6">
              <div className="card border-0 mb-1 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr2} alt="Trainer 2" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap me-5 pl-4">
                      <h3 className="card-title text-color">Virgil Cook</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">Growing up, I’ve always been involved in sports, fitness, and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fas fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="card border-0 mb-1 ms-5 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr1} alt="Trainer 1" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Bruice John</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">Growing up, I’ve always been involved in sports, fitness, and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fas fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 mb-1 bg-transparent rounded-0 mb-4">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-6">
                    <img src={tr1} alt="Trainer 1" className="img-fluid w-100" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body team-wrap pl-4">
                      <h3 className="card-title text-color">Bruice John</h3>
                      <h6 className="card-subtitle pb-4 letter-spacing">Cross Expert Trainer</h6>
                      <p className="mb-5">Growing up, I’ve always been involved in sports, fitness, and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fas fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fas fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add additional trainer sections here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
