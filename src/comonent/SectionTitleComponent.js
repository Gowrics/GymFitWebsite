import React from 'react';

const SectionTitle = ({ title, description, line, color = "black" }) => {

  // Corrected style object
  const secstyle = {
    sectionTitle: {
      position: 'relative',
      top: '-240px',
      right: '-70px',
    },
  };

  return (
    <div className="col-lg-8 text-center">
      <div className="section-title" style={secstyle.sectionTitle}>
        <div className="divider mb-3"></div>
        <h1 style={{ color: '#f5634b', fontSize: '70px' }}>{line}</h1>
        <h2 style={{ color }}>{title}</h2>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
