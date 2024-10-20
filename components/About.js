"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('h2, p, ul, img').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id='about' className="w-full bg-gradient-to-br from-white to-green-100 pt-7 pb-7 md:pt-20 md:pb-24">
      <div className="box-border px-8 flex flex-col md:flex-row justify-between items-center content-center w-full md:w-11/12 mx-auto leading-6 text-black border-0 border-gray-300 border-solid max-w-7xl">
       
       <div className="relative box-border w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10 transform hover:scale-105 transition-transform duration-300 ease-in-out" style={{ height: '400px' }}>
       <Image fill src="/ab1.png" className="p-4 sm:pr-10 xl:pl-10 rounded-lg shadow-lg object-cover" alt="About Us - Nightingale" />
       </div>

          {/* Content */}
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-green-600">
            Who We Are
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 xl:pr-32 lg:text-lg">
            Nightingale is a Kolkata-based company with over three decades of experience in the scientific and research
            equipment industry. We are committed to delivering quality products and services that advance scientific
            exploration and innovation.
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Maximize productivity and growth
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Speed past your competition
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Learn the top techniques
            </li>
          </ul>
        </div>
        {/* End Content */}
      </div>
      <div className="box-border flex flex-col md:flex-row items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 max-w-7xl">
        {/* Content */}
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-green-600">
            What We Do
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            We specialize in providing scientific solutions that cater to a variety of industries and research needs:
          </p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Chromatography Systems
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Water Purification Systems (RO and Ultra-filtration)
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Electrophoresis & Spectrophotometers
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Molecular Biology Tools 
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid hover:text-green-600 transition-colors duration-200">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full transform hover:scale-110 transition-transform duration-200">
                <span className="text-sm font-bold">✓</span>
              </span> Documentation Systems
            </li>
          </ul>
        </div>
        {/* End Content */}

        {/* Image */}
        <div className="relative box-border w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-in-out" style={{ height: '400px' }}>
        <Image fill src="/ab2.png" className="p-4 sm:pr-10 xl:pl-10 rounded-lg shadow-lg object-cover" alt='About Us' />
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About; 
