import React from 'react'
import post1 from '../assets/post1.jpg'; // Adjust path based on image location
import post3 from '../assets/post3.jpg'; // Adjust path based on image location
import post5 from '../assets/post5.jpg'; // Adjust path based on image location
import { Link } from 'react-router-dom';
import '../screens/BlogSideBar.css';

const BlogSisidecomponent = () => {
  return (
    <div>

<div class="col-lg-3">
<div className="card border-0 rounded-0 mb-5">
      <form action="#" className="search position-relative">
        <input type="text" placeholder="Search" className="form-control" />
        <i className="fas fa-search position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
      </form>
    </div>
    <div className="mb-5 follow">
      <h5 className="font-secondary mb-4">
        <i className="fas fa-minus mr-2 text-color"></i>Follow us
      </h5>
      <ul class="listgroup" style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
      <li>
        <Link to="#" className="text-muted">
          <i className="fab fa-facebook"></i>
        </Link>
      </li>
      <li>
        <Link to="#" className="text-muted">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li >
        <Link to="#" className="text-muted">
          <i className="fab fa-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link to="#" className="text-muted">
          <i className="fab fa-pinterest"></i>
        </Link>
      </li>
      <li>
        <Link to="#" className="text-muted">
          <i className="fab fa-dribbble"></i>
        </Link>
      </li>
    </ul>
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
          <Link to="#" className="text-muted1">Fitness</Link>
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
	<h5 class="font-secondary mb-4"> <i className="fas fa-minus mr-2 text-color"></i>Tags</h5>
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
  )
}

export default BlogSisidecomponent