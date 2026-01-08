"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Zap } from "lucide-react";

const ACCENT_COLOR = "#B0DB9C"; // Light Green
const SECONDARY_COLOR = "#27391C"; // Dark Green

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function DevelopmentHero() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1920&q=90"; // logistics background

  return (
    <section
  id="insights-hero"
  className="pt-16 sm:pt-20 md:pt-24 min-h-[70vh] sm:min-h-[75vh] md:min-h-[77vh] flex items-center justify-center relative overflow-hidden scroll-mt-[80px] sm:scroll-mt-[90px] md:scroll-mt-[100px]"
>
  <div
    className="absolute inset-0 bg-cover bg-center transform scale-105"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundAttachment: "scroll",
    }}
  >
    <div className="absolute inset-0 bg-gray-900/70"></div>
  </div>

  {/* Content */}
  <motion.div
    className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-8 sm:py-10 max-w-xl sm:max-w-2xl md:max-w-3xl text-center relative z-10"
    initial="hidden"
    whileInView="visible"
    variants={textVariants}
    viewport={{ once: true }}
  >
    <motion.div
      className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3 sm:mb-5"
      variants={textVariants}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255,255,255,0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: ACCENT_COLOR }} />
      <span className="text-[10px] sm:text-xs font-medium" style={{ color: ACCENT_COLOR }}>
        Trackon’s Future-Focused Development Vision
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 tracking-tight drop-shadow-lg text-white"
      variants={textVariants}
    >
      Why Choose Trackon for Your Logistics Franchise?
    </motion.h1>

    <motion.p
      className="text-xs sm:text-sm md:text-base font-light mt-2 sm:mt-3 mx-auto max-w-[260px] sm:max-w-xl md:max-w-2xl lg:max-w-2xl leading-relaxed text-gray-100"
      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.7 },
        },
      }}
    >
      Revolutionizing Bhadrak’s logistics landscape with{" "}
      <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
        sustainable operations
      </span>
      ,{" "}
      <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
        cutting-edge technology
      </span>{" "}
      and{" "}
      <span className="font-semibold" style={{ color: ACCENT_COLOR }}>
        a trusted network of franchises
      </span>
      .
    </motion.p>

    <motion.div
      className="mt-6 sm:mt-8 flex flex-col md:flex-row md:justify-center md:gap-6 lg:gap-10 gap-3 sm:gap-5 text-gray-100"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.8, duration: 0.7 },
        },
      }}
    >
      {/* Add buttons or actionable items here if needed */}
    </motion.div>
  </motion.div>
</section>

  );
}
