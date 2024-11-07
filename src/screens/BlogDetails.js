import React from 'react'
import PageTitle from '../comonent/PageTitle'
import post1 from '../assets/post1.jpg'; // Adjust path based on image location
import post3 from '../assets/post3.jpg'; // Adjust path based on image location
import post4 from '../assets/post4.jpg'; // Adjust path based on image location
import post5 from '../assets/post5.jpg'; // Adjust path based on image location
import './BlogSideBar.css';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const posts = [
        { img: post1, title: 'Make your fitness Boost with us' },
        { img: post3, title: 'Ethernity beauty health diet plan' },
        { img: post4, title: 'Ever too late to lose weight?' },
        { img: post5, title: 'Make your fitness Boost with us' },

    ];
    return (
    <div>
     <PageTitle linkText="Home" linkHref="/" pageName="blog single" pageInfo="Enhance beauty Health" />

     <section className="section blog blogdetails blogsidebar bg-gray" style={{height:'300vh'}}>
      <div className="container">
      <div class="row justify-content-center">
      <div class="col-lg-9 col-md-12 row11">
        <div className="row ">
        <div className="col-lg-12 ">
      <img src={post3} alt="" className="img-fluid" style={{width:'1000px',height:'500px'}} />
      <p className="mt-4">
        Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit
        amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non
        mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed,
        condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.
        Suspendisse fermentum congue dui nec fringilla. Duis volutpat nunc
        lectus. Suspendisse potenti. Suspendisse egestas venenatis nunc. Donec
        at laoreet lacus.
      </p>

      <blockquote className="blockquote p-4 bg-white text-black font-italic my-5">
        <i className="fas fa-quote-left text-lg text-color mr-2"></i>
        Merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isitue
        tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud
        penggunaan Lorem Ipsum adalah karena ia kurang lebih memiliki penyebaran
        huruf.
      </blockquote>

      <div className="media mb-4">
        <img
          src="images/blog/blog-post-5.jpg"
          alt=""
          className="img-fluid mr-4"
        />
        <div className="media-body">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam quam elit, mollis at odio gravida,
            ultrices pulvinar justo. Vivamus eleifend mollis dolor, et ornare
            turpis vehicula in. Pellentesque auctor ac enim sit amet euismod.
            Ut eu accumsan nunc. Nam ultrices, orci a volutpat molestie, ipsum
            magna posuere ex, vel lobortis dolor purus tristique purus.
          </p>
        </div>
      </div>
      <p>
        Aliquam lobortis efficitur velit, vel tempor dui iaculis non. Mauris
        non ullamcorper leo. Nulla consectetur arcu eget condimentum auctor.
        Aliquam sagittis dictum augue. Duis fringilla nec augue eu laore
      </p>

      <div className="post-tags my-5 text-uppercase font-size-12 letter-spacing text-center">
        <Link to="#" className="mr-2 text-black">
          <i className="fas fa-bookmark mr-2 text-color"></i>Yoga
        </Link>
        <Link to="#" className="mr-2 text-black">
          <i className="fas fa-bookmark mr-2 text-color"></i>Meditation
        </Link>
        <Link to="#" className="mr-2 text-black">
          <i className="fas fa-bookmark mr-2 text-color"></i>Nutrition
        </Link>
        <Link to="#" className="mr-2 text-black">
          <i className="fas fa-bookmark mr-2 text-color"></i>Healthy diet
        </Link>
      </div>

      <div className="border-top border-bottom py-4 text-center social-share">
        <h4 className="mb-4 font-secondary text-uppercase font-weight-normal">
          Like the post?
        </h4>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
        <Link to="#">
          <i className="fab fa-facebook"></i>
        </Link>     </li>
          <li className="list-inline-item">
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>


    </div>
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
</div>

</section>

    </div>
  )
}

export default BlogDetails