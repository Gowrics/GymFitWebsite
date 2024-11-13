import React from 'react';
import PageTitle from '../comonent/PageTitle';
import SectionTitle from '../comonent/SectionTitleComponent';
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <PageTitle 
        linkText="Home" 
        linkHref="/" 
        pageName="Contact" 
        pageInfo="Contact Us"  
      />
       <div class="row justify-content-center  contactrow">
       <SectionTitle 
        title="Contact us" 
        line="___" 
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In error reprehenderit quam enim obcaecati, repudiandae officia a cumque nemo provident!" 
      />
            
        </div>
        <div class="row justify-content-center pb-5 contactform">
<div class="col-lg-9 text-center">
                <form id="contact-form">
                <div class=" form-row ">
                     <div class="col-lg-6 col-md-6 col-sm-12 ">
                       <input type="text" class="form-control" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="col">
                        <input type="password" class="form-control" placeholder="Enter password" name="pswd"/>
                    </div>

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group-2">
                                <textarea name="user_message" class="form-control" rows="8" placeholder="Your Message"></textarea>
                            </div>

                            <div class="text-center">
                                <button class="btn btn-main mt-3 " type="submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    <div class="container  mt--170">
        <div class="row d-flex ">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded-0 border-0 shadow-sm text-center py-5 px-4 contact-info">
                    <i class="fas fa-mobile mb-3 text-lg text-color"></i>
                    <span>Call us</span>
                    <p class="lead text-black mb-0 mt-3">+23 45 67890</p>
                    <p class="lead">9:00 am - 17:00 pm</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0">
                <div class="card rounded-0 border-0 shadow-sm text-center py-5 px-4 contact-info">
                    <i class="fas fa-envelope mb-3 text-lg text-color"></i>
                    <span>Email at</span>
                    <p class="lead text-black mt-3 mb-0">support@themefisher.com</p>
                    <p class="lead text-black ">support@gymfit.com</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded-0 border-0 shadow-sm text-center py-5 px-4 contact-info">
                    <i class="fas fa-home mb-3 text-lg text-color"></i>
                    <span>Location</span>
                    <p class="lead text-black mt-3">Fitness Center Bedford Heights,North London, USA</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Contact;     