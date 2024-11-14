import React from 'react'
import PageTitle from '../comonent/PageTitle'
import post1 from '../assets/post1.jpg'; // Adjust path based on image location
import post3 from '../assets/post3.jpg'; // Adjust path based on image location
import post4 from '../assets/post4.jpg'; // Adjust path based on image location
import post5 from '../assets/post5.jpg'; // Adjust path based on image location
import './BlogSideBar.css';
import { Link } from 'react-router-dom';

const BlogSideBar = () => {
    const posts = [
        { img: post1, title: 'Make your fitness Boost with us' },
        { img: post3, title: 'Ethernity beauty health diet plan' },
        { img: post4, title: 'Ever too late to lose weight?' },
        { img: post5, title: 'Make your fitness Boost with us' },

    ];
    

    return (
    <div>
     <PageTitle linkText="Home" linkHref="/" pageName="Our blog" pageInfo="Blog article" />
     <section className="section blog blogsidebar  bg-gray">
      <div className="container">
      <div class="row justify-content-center">
      <div class="col-lg-9 row11 justify-content-center">
        <div className="row justify-content-center">
          {posts.map((post, index) => (
        
            <div className="col-lg-6 col-md-6 justify-content-center" key={index}>
              <article className="card border-0 rounded-0 mb-4 justify-content-center">
                <img src={post.img} alt="Blog post" className="img-fluid" />

                <div className="mt-3 px-4 py-3">
                  <div className="blog-post-meta text-capitalize mb-2">
                    <span className="post-meta date-meta mr-2">
                      <i className="fas fa-calendar-alt mr-2"></i>March 25, 2019
                    </span>
                    <span className="post-meta author">
                      <i className="fas fa-user mr-2 text-muted"></i>John Stain
                    </span>
                  </div>
                  <Link to="/blogdetails">
                    <h4 className="mb-3 font-secondary">{post.title}</h4>
                  </Link>

                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum, minima.
                  </p>

                  <Link to href="/blogdetails" className="text-color  mb-3 d-block">
                    <i className="fas fa-minus mr-2"></i> Read More
                      </Link>
                </div>
              </article>
            </div>
))}
</div>
<div className="row rowicon">
  <div className="col-lg-12 mt-5">
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="fas fa-chevron-left"></i> {/* Previous Icon */}
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="fas fa-chevron-right"></i> {/* Next Icon */}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</div>
<div class="col-lg-3 sides">
<div className=" border-0 rounded-0  mt5 justify-content-center mb-5">
      <form action="#" className="search position-relative">
        <input type="text" placeholder="Search" className="form-control justify-content-center " />
        <i className="fas fa-search position-absolute"></i>
      </form>
    </div>
    <div className="mb-5 follow  ">
	<h5 className="font-secondary  mb-4"><i className="fas fa-minus mr-2 text-color"></i>Follow us</h5>
  <div class="icon-container ">
  <a href="#" className="icon-box"><i className="fab fa-facebook"></i></a>
  <a href="#" className="icon-box"><i className="fab fa-twitter"></i></a>
  <a href="#" className="icon-box"><i className="fab fa-linkedin"></i></a>
  <a href="#" className="icon-box"><i className="fab fa-pinterest"></i></a>
  <a href="#" className="icon-box"><i className="fab fa-dribbble"></i></a>
</div>
    </div>
    <div className="mb-5 meidaimg">
  
    <h5 className="font-secondary mb-4">
        <i className="fas fa-minus mr-2 text-color"></i>Popular Post
      </h5>

      <div className="media mb-4">
        <img src={post5} alt="" className="img-fluid pr-4 w-50 align-self-center" style={{height:'100px'}} />
        <div className="media-body">
          <Link to="/blog-post-5" className="text-black d-block lh-25">Track your daily body fitness</Link>
        </div>
      </div>

      <div className="media mb-4">
        <img src={post3} alt="" className="img-fluid pr-4 w-50 align-self-center"  style={{height:'100px'}} />
        <div className="media-body">
          <Link to="/blog-post-6" className="text-black d-block lh-25">Keep your body fitness track</Link>
        </div>
      </div>

      <div className="media mb-4">
        <img src={post1} alt="" className="img-fluid pr-4 w-50 align-self-center"   style={{height:'100px'}}/>
        <div className="media-body">
          <Link to="/blog-post-1" className="text-black d-block lh-25">Keep your body fitness track</Link>
        </div>
      </div>

      <div className="mb-5 categories">
      <h5 className="font-secondary mb-4">
      <i className="fas fa-minus mr-2 text-color"></i>Categories
      </h5>
<div className='listcontainer'>
      <ul >
        <li className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-0">
          <Link to="#" className=" text-left text-muted1">Fitness</Link>
          <span className="badge bg-danger badge-pill text-white border-0">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-0">
          <Link to="#" className="text-muted1">Body Building</Link>
          <span className="badge bg-danger badge-pill text-white">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-0">
          <Link to="#" className="text-muted1">Cycling</Link>
          <span className="badge bg-danger badge-pill text-white">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-0">
          <Link to="#" className="text-muted1">Paracycling</Link>
          <span className="badge bg-danger badge-pill text-white">5</span>
        </li>
      </ul>
      </div>
    </div>

    <div class="mb-5 tags">
	<h5 class="font-secondary mb-4"> <i className="fas fa-minus mr-5 text-color"></i>Tags</h5>
      <Link className='lnks' to="/#">Body</Link>
      <Link className='lnks' to="/#">Fitness</Link>
      <Link className='lnks' to="/#">Health</Link>
      <Link className='lnks'to="/#">Diet</Link>
      <Link className='lnks' to="/#">Plan</Link>
      <Link className='lnks' to="/#">Gym</Link>
      <Link className='lnks' to="/#">Trainer</Link>
      <Link className='lnks' to="/#">Tutorials</Link>
</div>


</div>
</div>

</div>
</div>

</section>

    </div>
  )
}

export default BlogSideBar