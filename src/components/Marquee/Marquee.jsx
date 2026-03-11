import React from 'react';
import { marqueeItems } from '../../data/portfolio';
import './Marquee.css';

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
