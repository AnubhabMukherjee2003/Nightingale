"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Ensure you import the Image component
import Link from 'next/link'; // Import Link from next/link

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: "/front-view-female-doctor-protective-suit-with-mask-sitting-with-solutions-white-background-virus-medicine-covid-pandemic.jpg",
      alt: "Slide 1",
      title: "Expertise You Can Trust",
      description: "Over 30 years of experience in the scientific industry",
      buttonText: "Learn More About Us",
      buttonLink:"#about"
    },
    {
      src: "/man-lab-doing-experiments-sprout.jpg",
      alt: "Slide 2",
      title: "Innovative Scientific Solutions",
      description: "Providing advanced equipment for research and discovery",
      buttonText: "Explore Our brands",
      buttonLink: "#brands"
    },
    {
      src: "/scientists-microbiologists-with-ppe-suit-face-mask-hold-test-tube-microscope-lab-finding-treatment-vaccine-coronavirus-infection-covid-19-laboratory-vaccine-concept.jpg",
      alt: "Slide 3",
      title: "Cutting-Edge Research Services",
      description: "Delivering accurate and reliable sequencing and research solutions",
      buttonText: "Discover Our Services",
      buttonLink:"#services"
    }
  ];

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden mt-16">
      <div id="slider" className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/40"></div>
            <Image 
                src={slide.src} 
                alt={slide.alt} 
                className="object-cover opacity-50 transition-opacity duration-300" 
                fill // Use layout="fill" for responsive behavior
                priority={true}// Use priority for high-priority loading
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl mx-auto px-4 animate-fadeIn">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-text">{slide.title}</h2>
                <p className="text-lg md:text-3xl text-black mb-8">{slide.description}</p>
                <Link href={slide.buttonLink}>
                <button className="font-bold bg-gradient-to-r from-green-400 to-green-400 text-white px-8 py-3 rounded-full hover:from-white hover:text-green-500 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  {slide.buttonText}
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button id="prevBtn" onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition duration-300 hover:scale-110 z-10" aria-label="Previous Slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button id="nextBtn" onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition duration-300 hover:scale-110 z-10" aria-label="Next Slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <div key={index} onClick={() => showSlide(index)} className={`w-4 h-4 rounded-full bg-white bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition duration-300 ${index === currentIndex ? 'bg-opacity-100' : ''}`} data-index={index}></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-out forwards;
        }

        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </main>
  );
};

export default Hero;
