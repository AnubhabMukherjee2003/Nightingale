"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import bd from '../public/bd.png';
import waters from '../public/waters.jpg';
import genaxy from '../public/genaxy.jpeg';
import helix from '../public/helix.png';
import middlebay from '../public/middlebay.jpeg';
import labman from '../public/labman.png';
import wenser from '../public/wenser.png';
import r from '../public/r.png';
import remi from '../public/remi.jpeg';
import abclonal from '../public/abclonal.png';
import dlab from '../public/dlab.jpg';
import cst from '../public/cst.jpg';
import biolab from '../public/biolab.png';
import biorad from '../public/biorad.jpg';
import sartorius from '../public/sartorius.png';

const Brands = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.grid > div');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${0.1 * (index + 1)}s`;
      el.style.opacity = 1;
    });
  }, []);

  return (
    <section id="brands" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800">
        Channel partner
        </h2>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {[
          { src: bd, alt: "BD" },
          { src: waters, alt: "Waters" },
          { src: genaxy, alt: "Genaxy" },
          { src: helix, alt: "Helix" },
          { src: middlebay, alt: "Middleby" },
          { src: labman, alt: "Labman" },
          { src: wenser, alt: "Wenser" },
          { src: r, alt: "Riviera" },
          { src: remi, alt: "Remi" },
          { src: abclonal, alt: "abclonal" },
          { src: dlab, alt: "DLAB" },
          { src: cst, alt: "CST" },
          { src: biolab, alt: "Biolab" },
          { src: biorad, alt: "Biorad" },
          { src: sartorius, alt: "Sartorius" }
        ].map((brand, index) => (
          <div key={index} className="p-4 md:p-7 bg-green-100 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image src={brand.src} alt={brand.alt} className="w-full h-full  transition-opacity duration-300 ease-in-out hover:opacity-80 object-cover" />
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
