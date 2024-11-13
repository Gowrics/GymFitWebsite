import React from 'react';

const SectionTitle = ({ title, description, line, color = "black" }) => {

  return (
    <div className="col-lg-8 text-center">
      <div className="section-title justify-content-center">
        <div className="divider mb-3"></div>
        <h2 style={{ color }}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
