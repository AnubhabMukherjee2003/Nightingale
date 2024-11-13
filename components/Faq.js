"use client"
import React, { useState, useRef, useEffect } from 'react';

const Faq = () => {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = useRef([]);

  useEffect(() => {
    // Ensure that the refs are set before accessing them
    if (activeTab !== null && tabs.current[activeTab]) {
      tabs.current[activeTab].style.maxHeight = `${tabs.current[activeTab].scrollHeight}px`;
    }
  }, [activeTab]);

  const handleClick = (index) => {
    // If the same tab is clicked, close it
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const handleRotate = (index) => (activeTab === index ? 'rotate-180' : '');

  const handleToggle = (index) => {
    return activeTab === index
    ? { maxHeight: `${tabs.current[index]?.scrollHeight}px` }
    : { maxHeight: '0px' };
  };

  return (
    <main id="faq" className="px-[10vw] bg-light-blue">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl text-center font-semibold text-green-600 mb-2">FAQ</h2>
          <ul className="flex flex-col">
            {[
              {
                question: "What types of products does Nightingale offer?",
                answer: "We provide a wide range of scientific and laboratory equipment, including chromatography systems, water purification units, electrophoresis systems, spectrophotometers, molecular biology tools, and more. We also supply consumables such as reagents, plasticware, and glassware."
              },
              {
                question: "Do you offer any research services?",
                answer: "Yes, we provide a variety of contract research services, including Sanger Sequencing, Next-Generation Sequencing (NGS), whole genome sequencing, and custom oligonucleotide synthesis. Our services are designed to meet the needs of research organizations with precise and accurate results."
              },
              {
                question: "Which brands are you authorized distributors for?",
                answer: `We are proud to be an authorized distributor for leading global brands like <strong>Becton Dickinson</strong>, <strong>GENAXY Scientific</strong>, and <strong>ABclonal</strong>. We also promote Make in India brands, supporting local innovation and entrepreneurship.`
              },
              {
                question: "Do you offer equipment maintenance and support?",
                answer: "Yes, we provide professional maintenance, calibration, and repair services for all the equipment we supply. Our team ensures that your scientific instruments stay in optimal condition for accurate and reliable research outcomes."
              },
              {
                question: "How can I place an order or get in touch with your team?",
                answer: "You can reach us through our contact page by filling out the form, or directly via email at office.nightingle@gmail.com or nightingle2018@gmail.com. You can also call us at +91 79803 60459 for any inquiries or to place an order."
              }
            ].map((item, index) => (
              <li key={index} className="bg-white my-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg">
                <h2 onClick={() => handleClick(index)} className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-100">
                  <span className="text-gray-800">{item.question}</span>
                  <svg className={`fill-current text-green-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate(index)}`} viewBox="0 0 20 20">
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                <div ref={(el) => (tabs.current[index] = el)} style={handleToggle(index)} className="border-l-2 border-green-600 overflow-hidden max-h-0 duration-500 transition-all">
                  <p className="p-3 text-gray-900" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Faq;
