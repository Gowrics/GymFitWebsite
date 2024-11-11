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
    </div>
  );
}

export default Contact;     