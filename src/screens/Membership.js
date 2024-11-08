import React from 'react'
import PageTitle from '../comonent/PageTitle'
import SectionTitle from '../comonent/SectionTitleComponent'
import './Membership.css';
import ButtonComponent from '../comonent/ButtonComponent';
const Membership = () => {
  return (
    <div>
    <PageTitle linkText="Home" linkHref="/" pageName="Pricing" pageInfo="Membership" />
	
    <section class="section pricing">
	<div class="container">
		<div class="row justify-content-center"  style={{position:"relative",top:'350px'}}>
		<SectionTitle title="Package pricing" line="___" description=""/>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card pricecard rounded-0 px-4  py-5 ">
					<h4 class="card-title text-capitalize font-weight-normal font-secondary">Standard Pack</h4>
					<h3 class="text-lg font-secondary position-relative mt-2"><sup class="text-sm position-absolute">$</sup>12  <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-40 mb-4">
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li><i class="fas fa-times mr-3"></i>Beginners Classes</li>
							<li><i class="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li><i class="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-solid-border text-black">Buy Now</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card pricecard rounded-0 px-4 py-5 " style={{height:'554px'}}>
					<h4 class="card-title text-capitalize font-weight-normal font-secondary"><span class="text-sm bg-dark text-light py-1 px-2 mr-2">Popular</span>Pro Pack</h4>
					<h3 class="text-lg font-secondary position-relative mt-2"><sup class="text-sm position-absolute">$</sup>29 <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-35 mb-5">
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li><i class="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li><i class="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-main "  style={{position:'relative',top:'-22px'}}>Buy Now</a>					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card  pricecard rounded-0 px-4 py-5 ">
					<h4 class="card-title text-capitalize font-weight-normal font-secondary">Gold Pack</h4>
					<h3 class="text-lg font-secondary position-relative mt-2"><sup class="text-sm position-absolute">$</sup>39 <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-35 mb-4">
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Olympic Weightlift</li>
							<li class="text-black font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-solid-border text-black">Buy Now</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section pricing bg-gray primg">
	<div class="container">
		<div class="row justify-content-center"  style={{position:"relative",top:'350px'}}>
		<SectionTitle title="Package pricing" line="___" description=""/>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card pricecard rounded-0 px-4 py-5 ">
					<h4 class="card-title text-capitalize text-white font-weight-normal font-secondary">Standard Pack</h4>
					<h3 class="text-lg font-secondary text-white position-relative mt-2"><sup class="text-sm position-absolute">$</sup>12  <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-40 mb-4">
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-secondary"  ><i class="fas fa-times mr-3"></i>Beginners Classes</li>
							<li  class="text-secondary"  ><i class="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li  class="text-secondary" ><i class="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-solid-border text-white">Buy Now</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card pricecard rounded-0 px-4 py-5 " style={{height:'554px'}}>
					<h4 class="card-title text-capitalize text-white font-weight-normal font-secondary"><span class="text-sm bg-light text-dark text-light py-1 px-2 mr-2">Popular</span>Pro Pack</h4>
					<h3 class="text-lg font-secondary text-white position-relative mt-2"><sup class="text-sm position-absolute">$</sup>29 <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-35 mb-5">
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li  class="text-secondary" ><i class="fas fa-times mr-3"></i>Olympic Weightlifting</li>
							<li  class="text-secondary" ><i class="fas fa-times mr-3"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-main " style={{position:'relative',top:'-22px'}}>Buy Now</a>					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
				<div class="card  pricecard rounded-0 px-4 py-5 ">
					<h4 class="card-title text-capitalize text-white font-weight-normal font-secondary">Gold Pack</h4>
					<h3 class="text-lg font-secondary text-white position-relative mt-2"><sup class="text-sm position-absolute">$</sup>39 <sub>per month</sub></h3>

 					<div class="card-body mt-2">
						<ul class="list-unstyled lh-35 mb-4">
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Training overview</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Foundation Training</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Beginners Classes</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Olympic Weightlift</li>
							<li class="text-white font-weight-bold"><i class="fas fa-check mr-3 text-color"></i>Personal Training</li>
						</ul>
						<a href="#" class="btn btn-solid-border text-white">Buy Now</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


    </div>
  )
}

export default Membership