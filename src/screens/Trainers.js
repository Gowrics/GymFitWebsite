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
          <div class="row row2 ms-5 justify-content-center">
     	        <div class="row  justify-content-center" >  
                 <SectionTitle title="our Trainer" line="___" description=""/>
              </div>
               <div class="col-lg-6">
				      <div class="card border-0 mb-1  bg-transparent rounded-0 mb-4">
				  <div class="row no-gutters align-items-center">
				    <div class="col-md-6">
				      <img src={tr1} alt="" class="img-fluid w-100"/>
				    </div>
				    <div class="col-md-6">
				      <div class="card-body team-wrap pl-4">
				        <h3 class="card-title text-color">Bruice John</h3>
				        <h6 class="card-subtitle pb-4 letter-spacing">cross Expert trainer</h6>
				        <p class="mb-5">Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                <span><Link to href="#"><i class="fab fa-facebook"></i></Link>
				<Link to="#"><i class="fab fa-twitter"></i></Link>
<Link to="#"><i class="fab fa-linkedin"></i></Link></span>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="card border-0 mb-1 bg-transparent  rounded-0 mb-4">
				  <div class="row no-gutters align-items-center">
				    <div class="col-md-6">
				      <img src={tr2} alt="" class="img-fluid w-100"/>
				    </div>
				    <div class="col-md-6">
				      <div class="card-body team-wrap pl-4">
				        <h3 class="card-title text-color">VIRGIL COOK</h3>
				        <h6 class="card-subtitle pb-4 letter-spacing ">cross Expert trainer</h6>
				        <p class="mb-5">Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                <span><Link to href="#"><i class="fab fa-facebook"></i></Link>
				<Link to="#"><i class="fab fa-twitter"></i></Link>
<Link to="#"><i class="fab fa-linkedin"></i></Link></span>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="card border-0 bg-transparent  rounded-0 mb-4 mb-lg-0">
				  <div class="row no-gutters align-items-center">
				    <div class="col-md-6">
				      <img src={tr3} alt="" class="img-fluid w-100"/>
				    </div>
				    <div class="col-md-6">
				      <div class="card-body team-wrap pl-4">
				        <h3 class="card-title text-color">JULIE COLLINS</h3>
				        <h6 class="card-subtitle pb-4 letter-spacing ">cross Expert trainer</h6>
				        <p class="mb-5">Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
			        	<span><Link to href="#"><i class="fab fa-facebook"></i></Link>
				<Link to="#"><i class="fab fa-twitter"></i></Link>
<Link to="#"><i class="fab fa-linkedin"></i></Link></span>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

			<div class="col-lg-6">	
				<div class="card p-0 border-0 bg-transparent rounded-0">
				  <div class="row no-gutters align-items-center">
				    <div class="col-md-6 ">
				      <img src={tr4} alt="" class="img-fluid w-100"/>
				    </div>
				    <div class="col-md-6">
				      <div class="card-body team-wrap pl-4">
				        <h3 class="card-title text-color">Thomas vel</h3>
				        <h6 class="card-subtitle pb-4 letter-spacing ">cross Expert trainer</h6>
				        <p class="mb-5">Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
			        	<span><Link to href="#"><i class="fab fa-facebook"></i></Link>
				<Link to="#"><i class="fab fa-twitter"></i></Link>
<Link to="#"><i class="fab fa-linkedin"></i></Link></span>
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
