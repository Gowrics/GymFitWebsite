import React from 'react'
import PageTitle from '../comonent/PageTitle'
import SectionTitle from '../comonent/SectionTitleComponent'
import './Membership.css';
import ButtonComponent from '../comonent/ButtonComponent';
import { Link } from 'react-router-dom';
const Membership = () => {
  return (
    <div >
              <PageTitle linkText="Home" linkHref="/" pageName="Pricing" pageInfo="Membership" />
              <section className="section pricing" >
	<div className="container">
		<div className="row justify-content-center"  style={{position:"relative",top:'350px'}}>
		<SectionTitle title="Package pricing" line="___" description=""/>
		</div>
		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div className="card pricecard rounded-0 px-4 py-4 ">
					<h4 className="card-title text-capitalize font-weight-normal font-secondary">Standard Pack</h4>
					<h3 className="text-lg font-secondary position-relative mt-3"><sup className="text-sm position-absolute">$</sup>12  <sub>per month</sub></h3>

 					<div className="card-body mt-2">
						<ul className="list-unstyled lh-40 mb-4">
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li><i className="fas fa-times mr-3"></i>Beginners Classes</li>
							<li><i className="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li><i className="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<Link to="#" class="btn btn-solid-border text-black">Buy Now</Link>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div className="card pricecard rounded-0 px-4 py-5 " style={{height:'554px'}}>
					<h4 className="card-title text-capitalize font-weight-normal font-secondary"><span className="text-sm bg-dark text-light py-1 px-2 mr-2">Popular</span>Pro Pack</h4>
					<h3 className="text-lg font-secondary position-relative mt-3"><sup className="text-sm position-absolute">$</sup>29 <sub>per month</sub></h3>

 					<div className="card-body mt-2">
						<ul className="list-unstyled lh-35 mb-5">
							<li className="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li className="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li className="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li><i className="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li><i className="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<Link to="#" className="btn btn-main mt-4 " >Buy Now</Link>					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div className="card  pricecard rounded-0 px-4 py-5 ">
					<h4 className="card-title text-capitalize font-weight-normal font-secondary">Gold Pack</h4>
					<h3 className="text-lg font-secondary position-relative mt-3"><sup className="text-sm position-absolute">$</sup>39 <sub>per month</sub></h3>

 					<div className="card-body mt-2">
						<ul className="list-unstyled lh-35 mb-4">
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Olympic Weightlift</li>
							<li className="text-black font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Personal Training</li>
						
						</ul>
						<Link to="#" class="btn btn-solid-border mt-5 text-black">Buy Now</Link>
					</div>
				</div>
			</div>
		</div>
	</div>

<section className="section pricing  primg">
	<div className="container">
		<div className="row justify-content-center"  style={{position:"relative",top:'470px'}}>
		<SectionTitle title="Package pricing" line="___" description=""/>
		</div>
		<div className="row justify-content-center mt-5">
			<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div className="card pricecard rounded-0 px-4 py-5 ">
					<h4 className="card-title text-capitalize text-white font-weight-normal font-secondary">Standard Pack</h4>
					<h3 className="text-lg font-secondary text-white position-relative mt-3"><sup class="text-sm position-absolute">$</sup>12  <sub>per month</sub></h3>

 					<div className="card-body mt-2">
						<ul className="list-unstyled lh-40 mb-4">
							<li className="text-white font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li className="text-white font-weight-bold"><i className="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li className="text-secondary"  ><i className="fas fa-times mr-3"></i>Beginners Classes</li>
							<li  className="text-secondary"  ><i className="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li  className="text-secondary" ><i className="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<Link to="#" class="btn btn-solid-border text-white">Buy Now</Link>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card pricecard rounded-0 px-4 py-5 " style={{height:'554px'}}>
					<h4 class="card-title text-capitalize text-white font-weight-normal font-secondary"><span class="text-sm bg-light text-dark text-light py-1 px-2 mr-2">Popular</span>Pro Pack</h4>
					<h3 class="text-lg font-secondary text-white position-relative mt-3"><sup class="text-sm position-absolute">$</sup>29 <sub>per month</sub></h3>

 					<div class="card-body mt-0">
						<ul class="list-unstyled lh-35 mb-5">
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li  class="text-secondary" ><i class="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li  class="text-secondary" ><i class="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<Link to ="#" class="btn btn-main mt-4" >Buy Now</Link>					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card  pricecard rounded-0 px-4 py-5 ">
					<h4 class="card-title text-capitalize text-white font-weight-normal font-secondary">Gold Pack</h4>
					<h3 class="text-lg font-secondary text-white position-relative mt-3"><sup class="text-sm position-absolute">$</sup>39 <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-25 mb-0">
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Olympic Weightlift</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Personal Training</li>
						</ul>
						<Link to ="#" class="btn btn-solid-border mt-5 text-white">Buy Now</Link>								</div>
				</div>
			</div>
		</div>
	</div>
</section>
</section>


    </div>
  )
}

export default Membership