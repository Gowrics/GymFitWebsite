import React, { useState } from 'react'
import './Gallary.css';
import img1 from '../assets/img1.jpeg'; // Adjust path based on image location
import img2 from '../assets/img2.jpeg'; // Adjust path based on image location
import { Modal } from 'react-bootstrap';
import SectionTitle from './SectionTitleComponent';

const Gallary = () => {
    const images = [
        img1, img2,img1,
        img2,
        img1,
        img2,
        img1,
        img2,
      ];
        const [show, setShow] = useState(false);
      const [currentImage, setCurrentImage] = useState(null);
   
      const handleShow = (image) => {
        setCurrentImage(image);
        setShow(true);
      };
      
      const handleClose = () => setShow(false);
      
        
  return (
    <div>
        <div className='sec6'>
  <section className="gallery">
      <div className="container">
        <div className="row justify-content-center">
        <SectionTitle title="Our Gallery" line="___" description="We offer more than 35 group exercis, aerobic classes each week."/>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row portfolio-gallery">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 p-0">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="img-fluid"
                onClick={() => handleShow(image)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {currentImage && <img src={currentImage} alt="Enlarged view" className="img-fluid w-100" />}
        </Modal.Body>
      </Modal>
    </section>
</div>
    </div>
  )
}

export default Gallary