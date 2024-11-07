import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.css'; // Import custom CSS for styling

const PageTitle = ({ linkText, linkHref, pageName, pageInfo }) => {
  return (
    <section className="page-title bg-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link to={linkHref} className="text-sm letter-spacing text-white text-uppercase font-weight-bold">
                  {linkText}
                </Link>
              </li>
              <li className="list-inline-item"><span className="text-white">|</span></li>
              <li className="list-inline-item">
                <Link to="#" className="text-color text-uppercase text-sm letter-spacing">{pageName}</Link>
              </li>
            </ul>
            <h1 className="text-lg text-white mt-2">{pageInfo}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageTitle;
