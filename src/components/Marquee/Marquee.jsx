import React from 'react';
import './Marquee.css';
import { marqueeItems } from '../../data/portfolio';

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-star">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
