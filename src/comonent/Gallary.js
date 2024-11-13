import React, { useState } from 'react';
import './Gallary.css';
import img1 from '../assets/img1.jpeg'; // Adjust path based on image location
import img2 from '../assets/img2.jpeg'; // Adjust path based on image location
import { Modal, Button } from 'react-bootstrap';
import SectionTitle from './SectionTitleComponent';

const Gallary = () => {
    const images = [img1, img2, img1, img2, img1, img2, img1, img2];
    
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className='sec6'>
                <section className="gallery">
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <SectionTitle 
                                title="Our Gallery" 
                                line="___" 
                                description="We offer more than 35 group exercise, aerobic classes each week."
                            />
                        </div>
                    </div>
                    <div className="container-fluid p-0">
                        <div className="row portfolio-gallery">
                            {images.map((image, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                    <img
                                        src={image}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="img-fluids"
                                        onClick={() => handleShow(index)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal to show enlarged image with navigation */}
                    <Modal show={show} onHide={handleClose} centered size="lg" className='models'>
                        <Modal.Header closeButton>
                            <Modal.Title>Image Preview</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-0 d-flex justify-content-center align-items-center position-relative">
                            {/* Previous Button */}
                            <Button 
                                  variant="outline-light"   // Use 'link' variant to remove default button styles
                                onClick={goToPrevImage} 
                                className="position-absolute start-0 m-3 custom-btn"
                            >
                                <i className="fas fa-chevron-left fa-2x"></i>
                            </Button>
                            
                            {/* Image Display */}
                            <img src={images[currentIndex]} alt="Enlarged view" className="img-fluid w-100" />
                            
                            {/* Next Button */}
                            <Button 
                                  variant="outline-light"   // Use 'link' variant to remove default button styles
                                onClick={goToNextImage} 
                                className="position-absolute end-0 m-3 custom-btn"
                            >
                                <i className="fas fa-chevron-right fa-2x"></i>
                            </Button>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        </div>
    );
};

export default Gallary;
