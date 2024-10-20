"use client"
import React, { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.grid > div');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${0.3 + index * 0.1}s`;
      el.style.opacity = 1;
    });
  }, []);

  return (
    <section id='services' className="max-w-screen  mx-auto px-4 sm:px-6 lg:px-64  bg-green-100 py-16 rounded-xl">
      <div className="text-center">
        <h2 className="font-semibold text-4xl mb-4 text-green-600 transition-all duration-300 ease-in-out hover:text-green-800">Our Scientific Services</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-600">We offer a wide range of scientific solutions to meet your research and laboratory needs, including chromatography systems, lab consumables, and custom solutions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Scientific Equipment Supply */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">Scientific Equipment Supply</h3>
            <p className="text-gray-600">We offer an extensive range of top-tier scientific equipment, including chromatography systems, water purification units, molecular biology tools, and more.</p>
          </div>
        </div>

        {/* Lab Consumables and Reagents */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">Lab Consumables and Reagents</h3>
            <p className="text-gray-600">From reagents and chemicals to plasticware and glassware, we supply a comprehensive range of consumables to keep your lab stocked with the highest quality materials.</p>
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">Custom Solutions</h3>
            <p className="text-gray-600">We provide tailored solutions to meet your specific research needs, including custom assay development, specialized equipment configurations, and bespoke laboratory setups.</p>
          </div>
        </div>

        {/* Authorized Distributors of Top Brands */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">Authorized Distributors of Top Brands</h3>
            <p className="text-gray-600">As authorized distributors of leading brands like Becton Dickinson, GENAXY Scientific, and ABclonal, we guarantee that you receive high-quality, authentic products from trusted manufacturers.</p>
          </div>
        </div>

        {/* 'Make in India' Initiatives */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">&apos;Make in India&apos; Initiatives</h3>
            <p className="text-gray-600">We proudly support local innovation through the &apos;Make in India&apos; initiative, offering a wide range of locally-manufactured scientific equipment and consumables that meet global standards.</p>
          </div>
        </div>

        {/* Product Training and Consultation */}
        <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <span className="text-green-600 bg-green-100 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl mb-2 text-green-600">Product Training and Consultation</h3>
            <p className="text-gray-600">Our experts provide comprehensive training and consultation services to help you get the most out of your scientific equipment. We ensure your team is fully equipped to operate and maintain the products effectively for optimum performance.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .grid > div {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .grid > div:nth-child(1) { animation-delay: 0.3s; }
        .grid > div:nth-child(2) { animation-delay: 0.4s; }
        .grid > div:nth-child(3) { animation-delay: 0.5s; }
        .grid > div:nth-child(4) { animation-delay: 0.6s; }
        .grid > div:nth-child(5) { animation-delay: 0.7s; }
        .grid > div:nth-child(6) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default Service;
