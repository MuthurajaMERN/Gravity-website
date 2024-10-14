import React from 'react';
import about from '../../assets/about.png';
import imageOne from '../../assets/medicalAbout.jpg';
import imageTwo from '../../assets/agriAbout.jpeg';
import imageThree from '../../assets/engineering.jpg';
import imageFour from '../../assets/packingAbout.jpeg';
import vision from '../../assets/vision.jpg'
import mission from '../../assets/mission.jpg'
// Example products array with correct image references
const products = [
  { image: imageOne },
  { image: imageTwo },
  { image: imageThree },
  { image: imageFour },
];

const About = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-orange-500">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
          <h2 className="text-gray-800 lg:text-5xl text-3xl font-bold lg:!leading-[56px]">Our Company</h2>
          <p className="text-gray-800 mt-6 text-base leading-relaxed">
            Gravity Global Export Sdn. Bhd. was incorporated on 11 November 2021 in Malaysia under the name Gravity Global Export Sdn. Bhd. with the registration number 202101037574 (1437874-D). The company engages in the retail sale of various products over the internet, the wholesale of a variety of goods without any particular specialization, and other retail sales in non-specialized stores.
            <br /><br />
            Gravity Global Export Sdn. Bhd. is a private limited company and has been operating for 3 years.
          </p>
          <button type="button"
            className="bg-transparent border-2 border-gray-800 mt-12 transition-all text-gray-800 font-bold text-sm rounded-md px-6 py-2.5">Get Started</button>
        </div>

        <div className="lg:h-[480px] flex items-center">
          <img src={about} className="w-full h-full object-cover" alt="About Our Company" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 mb-5 p-4">
        {/* Major Products Header */}
        <h1 className='text-3xl font-bold mb-4 text-center'>Our Famous Products</h1>
        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl w-full sm:w-80 border border-orange-500"
            >
              <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className='py-8 bg-gray-200'

      >
        <h1 className='text-3xl font-bold mb-4 text-center'>Project Management</h1>
        <p className='w-full sm:w-1/2 mx-auto text-center'>
          Our Project Management team ensures seamless coordination and efficient execution of projects from start to finish.
          We prioritize clear communication, effective resource allocation, and timely delivery to meet client expectations.
          With a focus on innovation and quality, we drive successful project outcomes. Our dedicated team works closely
          with clients to achieve their goals on time and within budget.
        </p>
      </div>
      <div className="mt-8 w-[920px] mx-auto">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
          {/* Vision Text */}
          <div className="lg:w-1/2 p-4 lg:text-left text-center">
            <h1 className="text-3xl font-bold mb-4">Vision</h1>
            <p>
              To be a global leader in delivering innovative and sustainable solutions, empowering
              businesses to achieve excellence and drive positive change worldwide.
            </p>
          </div>
          {/* Vision Image */}
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={vision} alt="Vision Image" className="w-52 h-auto object-cover rounded-full" />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-8">
          {/* Mission Text */}
          <div className="lg:w-1/2 p-4 lg:text-right text-center">
            <h1 className="text-3xl font-bold mb-4">Mission</h1>
            <p>
              Our mission is to provide top-quality services and products through cutting-edge
              technology, expert collaboration, and customer-centric approaches. We aim to build
              lasting partnerships, enhance global connectivity, and contribute to sustainable growth
              for our clients and communities.
            </p>
          </div>
          {/* Mission Image */}
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={mission} alt="Mission Image" className="w-52 h-52 object-cover rounded-full " />
          </div>
        </div>
      </div>




    </div>
  );
};

export default About;
