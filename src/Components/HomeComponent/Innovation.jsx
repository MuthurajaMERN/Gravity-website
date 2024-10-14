import React from 'react';
import vector from '../../assets/vector.jpg';
import experts from '../../assets/experts.png';
import { Link } from 'react-router-dom';

const Innovation = () => {
    return (
        <div className='relative'>
            <img
                src={vector}
                alt="An illustrative background depicting innovation in machinery"
                className='w-screen h-[70vh]'
            />
            <div className='absolute top-20 left-8 right-4 text-black mt-20 w-1/3 font-medium'>
                <h1 className='text-3xl font-bold mb-4 text-center'>Innovation</h1>
                <p>
                    India's machinery exports are growing quickly, especially in areas like agricultural equipment, construction tools, and automotive parts. Indian companies are adding modern technology like automation and IoT to their machines, making them more competitive globally.
                </p>
                <p className='mt-2'>
                    With the "Make in India" initiative and government support, the country has become a key manufacturing hub. There's also a focus on making energy-efficient and eco-friendly machinery. India's exports are increasing, especially to regions like Asia, Africa, and the Middle East, strengthening its role in global machinery trade.
                </p>
            </div>

            {/* <div className='d-flex flex-row items-center justify-center mt-16 border bg-gray-300'>
                <div className='w-1/2 flex items-center justify-center'>
                    <img
                        src={experts}
                        alt="Experts in machinery"
                        className='w-3/4 h-auto' // Adjust width to 3/4 to fit better
                    />
                </div>
                <div className='w-1/2 text-left'>
                    <h2 className='text-xl font-semibold'>
                        Leading Exporter of All Types of Machinery
                    </h2>
                    <p className='mt-2'>
                        We have been in the industry since 2015. Over the years, we have become the world’s leading exporter of all types of machinery, providing premium products and excellent service.
                    </p>
                </div>
            </div> */}
            <div className="bg-gray-100 font-[sans-serif] relative max-w-full mx-auto rounded overflow-hidden mt-4">
                <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-orange-400">
                    <div className="text-center px-6">
                        <h3 className="font-extrabold text-2xl text-orange-500 leading-tight"><span className="text-gray-800"></span>   Leading Exporter of All Types of Machinery</h3>
                        <p className="text-gray-800 text-base leading-relaxed mt-4">We have been in the industry since 2021. Over the years, we have become the world’s leading exporter of all types of machinery, providing premium products and excellent service.
                        </p>

                       <Link to='/Contact'>
                            <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                                Get Started
                            </button>
                       </Link>
                    </div>

                    <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max">
                        <div className="p-2">
                            <img src={experts} className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="img" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Innovation;
