import React from 'react'
import PageTitle from '../comonent/PageTitle'
import './About.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';
import img5 from '../assets/img5.jpeg'; // Adjust path based on image location
import img6 from '../assets/img6.jpeg'; // Adjust path based on image location
import ButtonComponent from '../comonent/ButtonComponent';
import Gallary from '../comonent/Gallary';
import SectionTitle from '../comonent/SectionTitleComponent';

const About = () => {
  return (
    <div className='main-container '>
    <PageTitle linkText="Home" linkHref="/" pageName="About us" pageInfo="What we are" />

    <section className="section-about ">
      <div className="container1 justify-content-center">
        <div className="row align-items-center">
          {/* Column for the first image */}
          <div className="col-lg-3 col-md-6">
            <img src={img6} alt="Image 1" className="img-fluid imgabout mb-4" />
          </div>

          {/* Column for the second image */}
          <div className="col-lg-3 col-md-6">
            <img src={img5} alt="Image 2" className="img-fluid imgabout mt-lg-4" />
          </div>

          {/* Additional column for text content */}
          <div className="col-lg-6 col-md-12">
            <div className="about-item position-relative mt-5 mt-lg-0">
              <span className="h5 text-lg text-muted">Est:1990</span>
              <h2 className="mt-1 mb-3"  style={{ fontWeight: '700',lineHeight:'40px' ,fontSize:'26px'}}>
                Having <span className="text-color">10 years</span> of experience in fitness
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.
              </p>
              <ButtonComponent text={"SERVICES"} link={"/services"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*------------------------------ */}
    <section class="section why">
	<div class="container1">
	<div class="row rowabout  ms-5 justify-content-center">
     	<div class="row me-5 justify-content-center" > 

	{/*<div class="row rowtitle ms-5 justify-content-center">*/}
		<SectionTitle title="Why Choose us" line="___" description=""/>
		</div>

	{/*	<div class="row rowabout">*/}
			<div class="col-lg-4 col-md-6 mb-5 " >
				<div class="card col1 p-4 text-center mb-4 border-0 bg-black-50 rounded-0 ">
                <i className="fas fa-dumbbell text-lg text-color"></i>
					<h3 class="mt-3 text-white">Modern Equipment</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-5 ">
				<div class="card col2 p-4 text-center border-0 mb-4 rounded-0">
                <i className="fas fa-fist-raised text-lg text-color"></i>
					<h3 class="mt-3">PROFFESIONAL TRAINer</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-5">
				<div class="card  col3 p-4 text-center border-0 mb-4 rounded-0 bg-black-50">
                <i className="fas fa-apple-alt text-lg text-color"></i> 
					<h3 class="mt-3 text-white">HEALTHY DIET Plan</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 ">
				<div class="card col4 p-4 text-center border-0 rounded-0 ">
                <i className="fas fa-thumbs-up text-lg text-color"></i> 
                                <h3 class="mt-3">24/7 Helping People</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6  ">
				<div class="card col5 p-4 text-center border-0 rounded-0 bg-black-50">
				<i className="fas fa-shield-alt text-lg text-color"></i>
		<h3 class="mt-3 text-white">Unique to Your Needs</h3>
					<p class="mt-3 mb-4 text-white">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 ">
				<div class="card col6 p-4 text-center border-0 rounded-0">
                <i className="fas fa-dollar-sign text-lg text-color"></i>
                					<h3 class="mt-3">Online payment</h3>
					<p class="mt-3 mb-4">Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.</p>
				</div>
			</div>
		</div>
	</div>
</section>
{/*------------------------------ */}

<Gallary/>
    </div>
  )
}

export default About