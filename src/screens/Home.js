// Home.js
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS for styling
import ButtonComponent from '../comonent/ButtonComponent';
import img1 from '../assets/img1.jpeg'; // Adjust path based on image location
import img2 from '../assets/img2.jpeg'; // Adjust path based on image location
import { Modal } from 'react-bootstrap';
import Gallary from '../comonent/Gallary';
import HomeCard from '../comonent/HomeCardComponent';
import { Link } from 'react-router-dom';
import PeopleSayComponent from '../comonent/PeopleSayComponent';
import SectionTitle from '../comonent/SectionTitleComponent';
import './Home.css';
const Home = () => {
  const cardData = [
    {
      number: '01',
      title: 'Modern Equipment',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.',
      link: 'about.html',
    },
    {
      number: '02',
      title: 'PROFESSIONAL TRAINER',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.',
      link: 'about.html',
    },
    {
      number: '03',
      title: 'HEALTHY DIET Plan',
      description: 'Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius.',
      link: 'about.html',
    },
  ];
  
  return (
  
      <div className="home">
<div className='sec1'>  
<section class="slider">
	<div class="container">
		<div class="row">
			<div class="col-md-8 ms-5  ">
				<span class="h6 d-inline-block mb-4 subhead text-uppercase">Gym fitness club</span>
				<h1 class="text-uppercase text-white mb-4">Step up your <br/> <span class="text-color">fitness Challange</span><br/>with us</h1>

				<ButtonComponent text="Join Us" link="#" />
				</div>
		</div>
	</div>
</section>

</div>
<div className='sec2 '>
          <section className="mt-80px ">
            <div className="container">
              <div className="row  justify-content-center">
                {cardData.map((card, index) => (
                  <HomeCard
                    key={index}
                    number={card.number}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                  />
                ))}
              </div>
            </div>
          </section>
          </div>
<div className='sec3'>
        <section className="sectionabout ps-5 mb-5"> {/* Add mb-5 for Bootstrap margin bottom */}
        <div className="container">
        <div className="row align-items-center">
		<div class="col-lg-5">
			        <img src={img1} alt="Fitness Facility"  className="img-fluid rounded mb-0 me-4 shadow w-100" style={{width:'300px',height:'40%'}} />
    </div>
    <div className="col-lg-6">
        <div className="pl-3 mt-4 mt-lg-0">
            <h2 className="mt-2 mb-3">We’ve skill in <br />wide <span className="text-color">range of fitness</span> and other body health facilities.</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>
            <ButtonComponent text="Learn More" link="#" />
        </div>
    </div>
</div>
   </div>    
     </section>
      </div>
      <div className='sec4'>
        <section class="section cta ">
	<div class="container">
		<div class="row  justify-content-center">
			<div class="col-lg-8 col-md-12 col-sm-12  ">
				<div class="text-center">
					<span class="h6 letter-spacing text-white">Discover your potential</span>
					<h2 class="text-lg mt-4 mb-5  text-white">
						Book your early seat to get <span class="text-color">summer 25% </span>dicsount
					</h2>
          <ButtonComponent text="join Now" link="#" />
          </div>
			</div>
		</div>
	</div>
</section>
</div>
<div className='sec5'>
<section className="secservices ">
	<div class="container mt-5 justify-content-center" >
		<div class="row mt5 ms-5 mt-5  justify-content-center" >
		<div class="row  mt5 justify-content-center" >
		<SectionTitle  title="Our Services" description="We offer more than 35 group exercis, aerobic classes each week."/>
			</div>

			<div class="col-lg-4  justify-content-center col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1">
				<i class="fas fa-dumbbell text-lg text-color"></i>
				<h4 class="mt-3 mb-4 text-uppercase">WEIGHT LIFTING</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1">
				<i class="fas fa-biking text-lg text-color"></i>
				<h4 class="mt-3 mb-4 text-uppercase">Cycling</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1">
				<i class="fas fa-weight-hanging text-lg text-color"></i>

					<h4 class="mt-3 mb-4 text-uppercase">YOGA MEDIDATION</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1">
				<i class="fas fa-hand-rock text-lg text-color"></i>
				<h4 class="mt-3 mb-4 text-uppercase">Building body</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1"><i className="fas fa-dumbbell text-lg text-color"></i>
					<h4 class="mt-3 mb-4 text-uppercase">Fitness Track</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="text-center  px-4 py-5 hover-style-1">
				<i class="fas fa-running text-lg text-color"></i>
				<h4 class="mt-3 mb-4 text-uppercase">Fitness</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
<div className='sec6'>
  <Gallary/>
    </div>
<div className='sec7'>
	<PeopleSayComponent/>
</div>
<div className='sec8'>

<section class="section course bg-gray">
	<div class="container">
		<div class="row justify-content-center">
		<SectionTitle title="Popular Courses" description="We offer more than 35 group exercis, aerobic classes each week."/>
		</div>

		<div class="row row2 ps-5">
			<div class="col-lg-3 col-md-6">
				<div class="card card2 border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src={img1} alt="" class="img-fluid"/>

					<div class="card-body">
						<Link to="course-single.html"><h4 class="font-secondary mb-0">Build Body</h4></Link>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>

			<div class="col-lg-3 col-md-6">
				<div class="card card2 border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src={img1}alt="" class="img-fluid"/>

					<div class="card-body">
						<Link to="course-single.html"><h4 class="font-secondary mb-0">Build Body</h4></Link>
						<p class="mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>

			<div class="col-lg-3 col-md-6">
				<div class="card card2 border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src={img1} alt="" class="img-fluid"/>

					<div class="card-body">
						<Link to="course-single.html"><h4 class="font-secondary mb-0">Build Body</h4></Link>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="card card2 border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
					<img src={img1} alt="" class="img-fluid"/>

					<div class="card-body">
						<Link to="course-single.html"><h4 class="font-secondary mb-0">Build Body</h4></Link>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row justify-content-center mt-5">
    <div class="col-lg-12 d-flex justify-content-center mt-5">
        <ButtonComponent text="SEE ALL OUR COURSE" link="#" />
    </div>
</div>
</section> </div>
</div> 
  );
};
export default Home;
