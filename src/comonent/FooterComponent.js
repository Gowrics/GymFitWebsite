// FooterComponent.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer bg-black-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ps-5 col-md-6 mb-5 mb-lg-0">
            <h2 className="text-white lh-40 mb-4">GymFit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illo ad quo sunt maiores, sint nostrum omnis eaque cumque dolorum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div className="footer-widget recent-blog">
              <h4 className="mb-4 text-white lh-40 letter-spacing text-uppercase">Recent Posts</h4>
              <div>
                <Link to ="#" className="text-white ">Claritas est etiam processus dynamicus</Link>
                <p className="text-sm mt-2 text-white-50">30 February 2019</p>
              </div>
              <div className="mt-4">
              <Link to ="#" className="text-white">Claritas est etiam processus dynamicus</Link>
                <p className="text-sm mt-2 text-white-50">30 February 2019</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-5 mb-5 mb-lg-0">
            <div className="footer-widget">
              <h4 className="mb-4 text-white lh-40 letter-spacing text-uppercase">Quick Links</h4>
              <ul className="list-unstyled footer-menu lh-30 mb-0">
  <li><Link to ="#"><i className="fas fa-angle-double-right mr-2"></i> About Us</Link></li>
  <li><Link to ="#"><i className="fas fa-angle-double-right mr-2"></i> Services</Link></li>
  <li><Link to ="#"><i className="fas fa-angle-double-right mr-2"></i> Membership</Link></li>
  <li><Link to ="#"><i className="fas fa-angle-double-right mr-2"></i> Courses</Link></li>
  <li><Link to ="#"><i className="fas fa-angle-double-right mr-2"></i> Contact us</Link></li>
</ul>

            </div>
          </div>

          <div className="col-lg-3 col-md-5 ">
            <div className="footer-widget">
              <h4 className="mb-4 text-white lh-40 letter-spacing text-uppercase">Home Location</h4>
              <p>Washington 6036 Richmond hwy., Alexandria, VA USA 22303</p>
              <span className="text-white">+1 (409) 987–5874</span><br />
              <span className="text-white">info@demolink.org</span>
            </div>
          </div>
        </div>

        <div className="row rowic ms-4 mt-5 bg-black">
  <div className="col-lg-5">
    <p className="text-white mb-1">
      Gymfit © 2019, Theme By{" "}
      <a href="https://themefisher.com/" className="text-color" target="_blank" rel="noopener noreferrer">
        Themefisher.com
      </a>
    </p>
  </div>
  <div className="col-lg-4 ms-auto text-end">
    <ul className="list-inline mb-0 footer-socials">
      <li className="list-inline-item">
        <a href="https://www.facebook.com/themefisher" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://twitter.com/themefisher" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://github.com/themefisher/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
      </div>
    </footer>
  );
};

export default FooterComponent;