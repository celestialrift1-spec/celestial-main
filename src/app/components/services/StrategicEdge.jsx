'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

export default function StrategicEdge() {
    const [disableAnim, setDisableAnim] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const alreadyAnimated = sessionStorage.getItem("strategicEdgePlayed");
        if (alreadyAnimated) {
            setDisableAnim(true);
        } else {
            sessionStorage.setItem("strategicEdgePlayed", "true");
        }
        setIsMounted(true);
    }, []);

    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const { scrollYProgress } = useScroll();

    const points = [
        {
            title: "Super Franchise Model",
            description:
                "Centralized quality control across 7 district units ensures brand consistency and operational excellence.",
        },
        {
            title: "Electric Vehicle Deployment",
            description:
                "Reducing fuel costs by up to 50% through sustainable EV integration in logistics operations.",
        },
        {
            title: "Tech-Enabled Operations",
            description:
                "Real-time tracking, MIS dashboards, and smart analytics for transparent, efficient logistics management.",
        },
        {
            title: "Infrastructure Readiness",
            description:
                "Fully equipped centers with CCTV, scanners, and high-speed internet to ensure seamless workflow.",
        },
        {
            title: "Revenue Share Model",
            description:
                "Franchisees retain up to 90% of earnings under a transparent and scalable business structure.",
        },
        {
            title: "Continuous Training",
            description:
                "Ongoing support, skill development, and franchise training for consistent operational growth.",
        },
    ];

    const duplicatedPoints = [...points, ...points, ...points];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId;
        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const animate = () => {
            if (!isPaused && container) {
                scrollPosition += scrollSpeed;
                const maxScroll = container.scrollWidth / 3;
                if (scrollPosition >= maxScroll) scrollPosition = 0;
                container.scrollLeft = scrollPosition;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const cardVariants = {
        rest: {
            scale: 1,
            y: 0,
            boxShadow: "0 10px 30px -5px rgba(39, 57, 28, 0.1), 0 0 0 1px rgba(176, 219, 156, 0.2)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        hover: {
            scale: 1.03,
            y: -8,
            boxShadow: "0 30px 60px -15px rgba(39, 57, 28, 0.25), 0 0 0 2px rgba(176, 219, 156, 0.5)",
            transition: { type: "spring", stiffness: 300, damping: 15 }
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    // Don't render until component is mounted to avoid hydration issues
    if (!isMounted) {
        return (
      <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-[#F8FAFC] overflow-hidden py-12 sm:py-16 md:py-24">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
      <p className="inline-block text-xs sm:text-sm font-bold text-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 bg-[#B0DB9C]/10 rounded-full border border-[#B0DB9C]/30">
        Our Strategic Edge
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-snug sm:leading-snug md:leading-tight mb-4 sm:mb-5">
        Driving Innovation <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
          with Sustainable Solutions
        </span>
      </h2>
    </div>
  </div>
</div>

        );
    }

    return (
        <>
            <style jsx global>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>

            <div ref={sectionRef} className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen bg-[#F8FAFC] overflow-hidden py-12 sm:py-16 md:py-24">

  {/* Animated background circles */}
  <motion.div
    className="absolute top-1/4 left-1/4 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 rounded-full bg-gradient-radial from-[#B0DB9C]/30 to-transparent blur-2xl sm:blur-3xl"
  />
  <motion.div
    className="absolute bottom-1/4 right-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 rounded-full bg-gradient-radial from-[#27391C]/20 to-transparent blur-2xl sm:blur-3xl"
  />

  {/* Heading Section */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-12 md:mb-16">
    <motion.div className="text-center max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
      <p className="inline-block text-[10px] sm:text-xs font-bold text-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-4 px-2.5 sm:px-4 py-1 sm:py-2 bg-[#B0DB9C]/10 rounded-full border border-[#B0DB9C]/30">
        Our Strategic Edge
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-snug sm:leading-snug md:leading-tight mb-4 sm:mb-5">
        Driving Innovation <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
          with Sustainable Solutions
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
        Celestial Rift LLP brings a <strong>modern, scalable logistics model</strong> that merges technology, sustainability, and franchise empowerment.
      </p>
    </motion.div>

    <motion.div
      className="w-16 sm:w-20 md:w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-4 sm:mt-6 rounded-full"
    />
  </div>

  {/* Horizontal scroll cards */}
  <div className="relative pb-6 sm:pb-8">
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto gap-4 sm:gap-6 py-6 sm:py-8 items-start sm:items-center scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="w-4 sm:w-6 flex-shrink-0"></div>

      {duplicatedPoints.map((point, index) => (
        <motion.div
          key={index}
          className="relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] cursor-pointer"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden group bg-white border border-[#B0DB9C]/20"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#B0DB9C]/0 via-[#B0DB9C]/0 to-[#B0DB9C]/0 group-hover:from-[#B0DB9C]/20 group-hover:via-[#86EFAC]/10 group-hover:to-[#B0DB9C]/20 transition-all duration-500" />

            <div className="relative z-10 p-5 sm:p-7 md:p-8 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 rounded-xl bg-gradient-to-br from-[#B0DB9C]/20 to-[#B0DB9C]/10 flex items-center justify-center border border-[#B0DB9C]/30 group-hover:from-[#B0DB9C]/30 group-hover:to-[#B0DB9C]/20 transition-all duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#27391C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#27391C] transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm text-[#64748B] leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-3 sm:mt-5 flex items-center text-xs sm:text-sm text-[#27391C] font-semibold group-hover:text-[#B0DB9C] transition-colors duration-300">
                <span>Learn more</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="w-4 sm:w-6 flex-shrink-0"></div>
    </div>

    {/* Scroll status */}
    <motion.div className="text-center mt-4 sm:mt-6">
      <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-white rounded-full border border-[#B0DB9C]/30 shadow-sm">
        <span className="text-xs sm:text-sm font-medium text-[#64748B]">
          {isPaused ? "Paused" : "Auto-scrolling"}
        </span>
        <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 ${isPaused ? "bg-red-500" : "bg-[#B0DB9C] animate-pulse"}`} />
      </div>
    </motion.div>
  </div>
</div>

        </>
    );
}
