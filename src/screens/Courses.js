import React from 'react'
import PageTitle from '../comonent/PageTitle'
import img1 from '../assets/img1.jpeg'; // Adjust path based on image location
import img2 from '../assets/img2.jpeg'; // Adjust path based on image location
import img3 from '../assets/img3.jpeg'; // Adjust path based on image location
import './Courses.css';
import SectionTitle from '../comonent/SectionTitleComponent';
const CoursePage = () => {
  return (
    <div>
    <PageTitle linkText="Home" linkHref="/" pageName="Course" pageInfo="Best course" />
	<section class="section" className="course1">
	<div class="container">
		<div class="row rowcourse justify-content-center">
		<SectionTitle title="popular courses" line="___" description=""/>
		</div>

		<div class="row rowcrd1" style={{marginTop:'70px'}}>
			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 mb-5" >
					<img src={img3} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 mb-5">
					<img src={img2} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 mb-5">
					<img src={img3} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 ">
					<img src={img3} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 ">
					<img src={img3} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card crdcourse rounded-0 p-0 ">
					<img src={img1} alt="" class="img-fluid imgcrd"/>

					<div class="card-body">
						<a href="course-single.html"><h4 class="mt-3 mb-0">Build Body</h4></a>
						<p class=" mb-2">Mentor: Jimmy Karter</p>
						<ul class="list-inline">
							<li class="list-inline-item">
							<i class="fas fa-clock mr-2 text-color" style={{padding:'4px'}}></i>
							Monday-Tuesday :
							</li>
							<li class="list-inline-item text-black">
								<strong>7am-12pm</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default CoursePage