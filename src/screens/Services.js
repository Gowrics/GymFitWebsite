import React from 'react'
import PageTitle from '../comonent/PageTitle'
import service1 from '../assets/service-1.jpg';
import service2 from '../assets/service-2.jpg';
import service3 from '../assets/service-3.jpg';
import service4 from '../assets/service-4.jpg';
import service5 from '../assets/service-5.jpg';
import service6 from '../assets/service-6.jpg';
import './Services.css';
import PeopleSayComponent from '../comonent/PeopleSayComponent';
import SectionTitle from '../comonent/SectionTitleComponent';

const Services = () => {
  return (
    <div>
      <PageTitle linkText="Home" linkHref="/" pageName="Our Services" pageInfo="What we do" />
     <div> <section class="section services1">
	<div class="container">
		<div class="row justify-content-center" style={{position:"relative",top:'350px'}}>
		<SectionTitle title="Our Services" line="___" description="We offer more than 35 group exercis, aerobic classes each week."/>
		</div>

		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service1} class=" mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service2} class="mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>

			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service3} class="mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service4} class="mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service5} class="mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="media align-items-center mb-4">
				  <img src={service6} class="mr-3 w-50" alt="..."/>

				  <div class="media-body">
				    <span class="letter-spacing text-sm ">Fitness</span>
				    <h4 class="mb-3 h4ms text-uppercase">Keep Fitness</h4>
				   <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
				  </div>
				</div>
			</div>
		</div>
	</div>
</section>
<PeopleSayComponent/>
</div>
    </div>
  )
}

export default Services