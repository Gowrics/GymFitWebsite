import React from 'react';
import './CourseSingle.css';
const CourseSingle = () => {
  return (
    <section className='coursesingle' >
      <div className="container-fluid" style={{ paddingTop: '80px' }}> {/* Adjust the padding as needed */}
        <div className="d-flex flex-wrap">        
          <div className="flex-fill p-3" style={{ minWidth: '300px' }}>
            <h3>Main Column</h3>
            <p>This is the main column content.</p>

            <div className="d-flex flex-wrap">
              <div className="p-2" style={{ flex: '1 1 30%' }}>
                <h5>Sub-Column 1</h5>
                <p>This is the first sub-column inside the nested row.</p>
              </div>
              <div className="p-2" style={{ flex: '1 1 30%' }}>
                <h5>Sub-Column 2</h5>
                <p>This is the second sub-column inside the nested row.</p>
              </div>
              <div className="p-2" style={{ flex: '1 1 30%' }}>
                <h5>Sub-Column 3</h5>
                <p>This is the third sub-column inside the nested row.</p>
              </div>
            </div>
          </div>

          <div className="flex-fill p-3" style={{ minWidth: '250px' }}>
            <h3>Sidebar</h3>
            <p>This is the sidebar content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSingle;
