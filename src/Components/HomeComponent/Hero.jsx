import React from 'react';
import forklift from '../../assets/forklift.jpeg';
import logo from '../../assets/logo.png';

const Hero = () => {
  return (
    <div>
      <div className='relative z-10 w-full'>
        <div>
          <img src={forklift} alt="" className='w-full h-[70vh]' />
        </div>
        <div className='border bg-orange-500 p-6 absolute top-4/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded shadow-lg w-96'>
          <img src={logo} alt="Company Logo" className='w-40 h-12 mb-4 mx-auto' /> {/* Added mx-auto for centering */}
          <h1 className='text-l font-semibold'>Since 2021</h1>
          <p className='mt-2 text-xl font-bold text-black'>Exporting Diverse Machinery<br />Worldwide for Your Business Needs</p>
        </div>
      </div>

    </div>
  );
};

export default Hero;
