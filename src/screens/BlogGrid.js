import React from 'react'
import PageTitle from '../comonent/PageTitle'
import post1 from '../assets/post1.jpg'; // Adjust path based on image location
import post3 from '../assets/post3.jpg'; // Adjust path based on image location
import post4 from '../assets/post4.jpg'; // Adjust path based on image location
import post5 from '../assets/post5.jpg'; // Adjust path based on image location
import post6 from '../assets/post6.jpg'; // Adjust path based on image location
import './BlogGrid.css';

const BlogGrid = () => {
    const posts = [
        { img: post1, title: 'Make your fitness Boost with us' },
        { img: post3, title: 'Ethernity beauty health diet plan' },
        { img: post4, title: 'Ever too late to lose weight?' },
        { img: post5, title: 'Make your fitness Boost with us' },
        { img: post6, title: 'Ethernity beauty health diet plan' },
        { img: post6, title: 'Ethernity beauty health diet plan' }
      ];
    
    
    return (
    <div className='main-wrapper'>
        
<PageTitle linkText="Home" linkHref="/" pageName="Our blog" pageInfo="Blog article" />
    <section className="section blog bloggrid bg-gray ">
      <div className="container ">
        <div className="row rows justify-content-center">
          {posts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <article className="card border-0 rounded-0 mb-4">
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
                  <a href="blog-single.html">
                    <h4 className="mb-3 font-secondary">{post.title}</h4>
                  </a>

                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum, minima.
                  </p>

                  <a href="blog-single.html" className="text-color  mb-3 d-block">
                    <i className="fas fa-minus mr-2"></i> Read More
                      </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>


    </div>
  )
}

export default BlogGrid