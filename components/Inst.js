"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import bd from '../public/bd.png';
import bckv from '../public/bckv.jpeg';
import bose from '../public/bose.png';
import brainwere from '../public/brainwere.jpeg';
import iicb from '../public/iicb.jpeg';
import iiserk from '../public/iiserk.jpeg';
import iitkgp from '../public/iitkgp.jpeg';

const Brands = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.grid > div');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${0.1 * (index + 1)}s`;
      el.style.opacity = 1;
    });
  }, []);

  return (
    <section id="Institutes" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800">
        Collaboration with the institute 
        </h2>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
        {[
            {src: bckv, alt: "BCKV"},
            {src: bose, alt: "BOSE"},
            {src: brainwere, alt: "Brainwere"},
            {src: iicb, alt: "IICB"},
            {src: iiserk, alt: "IISERK"},
            {src: iitkgp, alt: "IITKGP"}
        ].map((brand, index) => (
          <div key={index} className="p-4 md:p-7 bg-green-100 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image src={brand.src} alt={brand.alt} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto transition-opacity duration-300 ease-in-out hover:opacity-80 object-contain" />
          </div>
        ))}
      </div>
      {/* End Grid */}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .grid > div {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Brands;
