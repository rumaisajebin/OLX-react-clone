import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow.jsx'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv m-2">
        <div className="menuBar ml-5">
          <div className="flex font-medium text-sm gap-3 mr-3 cursor-pointer">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="flex justify-evenly w-4/5 text-sm">
            <span className='cursor-pointer'>Cars</span>
            <span className='cursor-pointer'>Motorcycles</span>
            <span className='cursor-pointer'>Mobile Phones</span>
            <span className='cursor-pointer'>For Sale: Houses & Apartments</span>
            <span className='cursor-pointer'>Scooters</span>
            <span className='cursor-pointer'>Commercial & Other Vehicles</span>
            <span className='cursor-pointer'>For Rent: Houses & Apartments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
