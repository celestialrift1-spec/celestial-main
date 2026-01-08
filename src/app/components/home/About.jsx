'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {path === 'truck' && <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>}
        {path === 'location' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
        {path === 'lightning' && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />}
        {path === 'leaf' && <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>}
    </svg>
);

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
    };

    return (
        <motion.section
            id="about"
            className="relative py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white text-gray-800 selection:bg-[#B0DB9C] selection:text-[#27391C] font-sans overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#B0DB9C]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-32 right-4 sm:bottom-40 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#27391C]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div className="text-center mb-12 sm:mb-20" variants={sectionVariants}>
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#27391C] mb-3 sm:mb-4 tracking-tight leading-snug sm:leading-tight"
                        variants={itemVariants}
                    >
                        Celestial Rift LLP: <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                            Pioneering Last-Mile Excellence
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold max-w-xl sm:max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Bridging connections with speed, reliability, and innovation.
                    </motion.p>
                    <motion.div
                        className="w-20 sm:w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-4 sm:mt-6 rounded-full"
                        variants={itemVariants}
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.div>

                <motion.div className="mb-12 sm:mb-20" variants={itemVariants}>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
                        {/* Image Section */}
                        <motion.div
                            className="lg:col-span-2 relative rounded-3xl overflow-hidden group h-[300px] sm:h-[400px] lg:h-[500px]"
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="/images/about-1.jpg"
                                alt="Trackon Courier Office / Logistics Hub"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#27391C]/90 via-[#27391C]/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <motion.div
                                    className="p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 bg-[#B0DB9C] rounded-full shadow-lg mb-2 sm:mb-3"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon path="truck" className="w-5 h-5 sm:w-6 sm:h-6 text-[#27391C]" />
                                </motion.div>
                                <h4 className="text-white text-xl sm:text-2xl font-black mb-1 sm:mb-2">Our Operations Hub</h4>
                                <p className="text-[#B0DB9C] text-xs sm:text-sm font-semibold">District-level logistics excellence</p>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            className="lg:col-span-3 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full"
                            whileHover={{ y: -5 }}
                        >
                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-4">
                                    <motion.div
                                        className="p-2 sm:p-3 bg-gradient-to-br from-[#27391C] to-[#1a2514] rounded-2xl shadow-lg"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon path="location" className="w-6 h-6 sm:w-7 sm:h-7 text-[#B0DB9C]" />
                                    </motion.div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#27391C]">
                                        About Our Operations
                                    </h3>
                                </div>

                                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base leading-relaxed">
                                    <p className="text-gray-800">
                                        <strong className="text-[#27391C] font-extrabold">Celestial Rift LLP</strong> is a forward-thinking logistics enterprise specializing in <strong className="text-[#27391C] font-extrabold">last-mile courier solutions</strong> under the Trackon Super Franchise model.
                                    </p>

                                    <motion.div
                                        className="relative p-4 sm:p-6 bg-gradient-to-br from-[#B0DB9C]/10 to-[#B0DB9C]/5 rounded-2xl border-l-4 border-[#B0DB9C] shadow-inner"
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 bg-[#B0DB9C]/20 rounded-full blur-xl" />
                                        <p className="relative text-gray-700 text-xs sm:text-sm md:text-base">
                                            Strategically based in <strong className="text-gray-900 font-bold">Bhadrak, Odisha</strong>, we seamlessly leverage the expansive <strong className="text-[#27391C] font-extrabold">Trackon Couriers Pvt. Ltd.'s network of 1000+ cities</strong> to ensure fast, reliable, and efficient deliveries at the critical district level.
                                        </p>
                                    </motion.div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                                        <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-[#E5F3DD] rounded-xl">
                                            <div className="p-2 sm:p-3 bg-[#27391C] rounded-lg">
                                                <Icon path="lightning" className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0DB9C]" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#27391C] mb-1 text-sm sm:text-base">Fast Delivery</h5>
                                                <p className="text-[9px] sm:text-xs text-gray-600">Quick turnaround times</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-[#E5F3DD] rounded-xl">
                                            <div className="p-2 sm:p-3 bg-[#27391C] rounded-lg">
                                                <Icon path="leaf" className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0DB9C]" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#27391C] mb-1 text-sm sm:text-base">Eco-Friendly</h5>
                                                <p className="text-[9px] sm:text-xs text-gray-600">Sustainable solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default About;
