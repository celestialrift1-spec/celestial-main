'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Zap, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CorePhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const philosophies = [
    { icon: Leaf, title: 'Sustainability', description: 'Green logistics powered by electric vehicles.' },
    { icon: Zap, title: 'Speed & Reliability', description: 'Every parcel, delivered on time.' },
    { icon: Award, title: 'Operational Excellence', description: 'Advanced systems and quality control.' },
    { icon: Users, title: 'Customer Trust', description: 'Transparent communication and live tracking.' }
  ];

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 transition-all duration-1000 transform"
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-30px)' }}>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-4 sm:mb-5">
            <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
              Our Core Philosophy
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold max-w-xl sm:max-w-2xl mx-auto">
            Building the future of logistics with innovation, integrity, and a commitment to excellence
          </p>

          <div className="w-20 sm:w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-6 sm:mt-8 rounded-full"></div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-2xl shadow-lg transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: '#1B3A2B',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: isHovered ? '0 20px 40px -10px rgba(176, 219, 156, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    backgroundColor: '#234F3C',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scale(1)' : 'scale(0.95)'
                  }}
                ></div>

                {/* Content */}
                <div className="relative p-4 sm:p-6">
                  <div
                    className="inline-flex p-2 sm:p-3 rounded-xl mb-3 sm:mb-4 transition-all duration-500 relative"
                    style={{
                      backgroundColor: '#B0DB9C',
                      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    {isHovered && (
                      <div
                        className="absolute inset-0 rounded-xl animate-ping"
                        style={{ backgroundColor: '#B0DB9C', opacity: 0.3 }}
                      ></div>
                    )}
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-500"
                      style={{ color: '#1B3A2B', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-all duration-300"
                      style={{ color: '#E9F8E5', transform: isHovered ? 'translateX(6px)' : 'translateX(0)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed transition-all duration-300 delay-75"
                     style={{ color: '#CDECC2', transform: isHovered ? 'translateX(6px)' : 'translateX(0)' }}>
                    {item.description}
                  </p>

                  <div className="mt-3 sm:mt-4 h-1 rounded-full transition-all duration-700 ease-out"
                       style={{ backgroundColor: '#B0DB9C', width: isHovered ? '100%' : '48px' }}></div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                  style={{ border: '2px solid #B0DB9C', opacity: isHovered ? 0.5 : 0 }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="mt-12 sm:mt-16 text-center rounded-2xl shadow-xl p-8 sm:p-12 transition-all duration-1000 delay-700"
          style={{
            backgroundColor: '#E5F3DD',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#171717' }}>
            Experience the Difference
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Join thousands of satisfied customers who trust us with their deliveries every day
          </p>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg relative overflow-hidden group"
            style={{ backgroundColor: '#B0DB9C', color: '#27391C' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(176, 219, 156, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span className="relative z-10">Get Started Today</span>
          </button>
        </div>
      </div>
    </div>
  );
}
