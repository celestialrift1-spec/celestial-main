"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Battery,
  Car,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  CreditCard,
  Target,
  Users,
} from "lucide-react";

const PRIMARY_GREEN = "#B0DB9C";
const DARK_GREEN = "#27391C";
const SLATE = "#64748B";
const LIGHT_BG = "#F8FAFC";
const TEXT_COLOR = "#171717";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const CardBackgroundPattern = ({ icon: Icon, color }) => (
  <motion.div
    className="absolute inset-0 overflow-hidden opacity-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.05 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <div
      className="absolute -top-4 sm:-top-10 -right-4 sm:-right-10 w-32 h-32 sm:w-64 sm:h-64 rotate-12"
      style={{ color }}
    >
      <Icon className="w-full h-full" style={{ opacity: 0.2 }} />
    </div>
    <div
      className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-24 h-24 sm:w-48 sm:h-48 -rotate-6"
      style={{ color }}
    >
      <Icon className="w-full h-full" style={{ opacity: 0.1 }} />
    </div>
  </motion.div>
);

export default function UpcomingProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const upcomingProducts = [
    {
      title: "TOTO Rickshaw Service",
      subtitle: "Premium Electric Auto-Rickshaw Mobility",
      description:
        "Company-owned fleet of electric auto-rickshaws with salaried drivers for superior reliability and safety compared to aggregator models.",
      icon: Car,
      color: PRIMARY_GREEN,
      features: [
        { icon: Battery, text: "Battery swapping for maximum uptime" },
        { icon: Zap, text: "Solar-powered charging stations" },
        { icon: Shield, text: "GPS tracking & enhanced safety" },
        { icon: CreditCard, text: "Transparent pricing, no surge pricing" },
      ],
      problemsSolved: [
        "Unreliable rides",
        "Safety risks for passengers",
        "Surge pricing issues",
        "Pollution from conventional vehicles",
        "Unstable driver income",
      ],
      revenueStreams: [
        "Premium fares",
        "High-margin commercial battery swapping",
        "Charging services for private EVs",
        "Advertising & subscriptions",
      ],
    },
    {
      title: "Green Mobility Network",
      subtitle: "EV Infrastructure Expansion",
      description:
        "Building India's safest, greenest last-mile mobility network with scalable electric vehicle infrastructure.",
      icon: Globe,
      color: DARK_GREEN,
      features: [
        { icon: TrendingUp, text: "Rapid EV shift market opportunity" },
        { icon: Target, text: "Government policy support" },
        { icon: Users, text: "Growing ride-hailing sector" },
        { icon: Battery, text: "Infrastructure for mass adoption" },
      ],
      problemsSolved: [
        "Lack of EV charging infrastructure",
        "High upfront costs for EV adoption",
        "Range anxiety for EV users",
        "Fragmented mobility solutions",
      ],
      revenueStreams: [
        "Infrastructure as a Service",
        "Battery subscription models",
        "Corporate fleet partnerships",
        "Government subsidies & incentives",
      ],
    },
  ];

  const fundingDetails = {
    amount: "INR 2 Crore",
    valuation: "INR 10 Crore (Pre-money)",
    allocation: [
      { label: "Fleet & Infrastructure", value: "60%" },
      { label: "Tech & Monitoring", value: "20%" },
      { label: "Operations & Marketing", value: "15%" },
      { label: "Contingency", value: "5%" },
    ],
  };

  return (
    <section
      id="upcoming-products"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden scroll-mt-[80px] sm:scroll-mt-[100px] w-full"
      style={{
        backgroundColor: LIGHT_BG,
        backgroundImage: `radial-gradient(${PRIMARY_GREEN}15 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="350" fill={PRIMARY_GREEN} opacity="0.1" />
          <circle cx="500" cy="300" r="200" fill={DARK_GREEN} opacity="0.05" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="100" width="400" height="400" rx="100" fill={DARK_GREEN} opacity="0.05" />
          <circle cx="150" cy="450" r="80" fill={PRIMARY_GREEN} opacity="0.08" />
        </svg>
      </motion.div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24" variants={fadeUp(0)}>
          <motion.div
            className="inline-flex items-center gap-2 text-[10px] xs:text-xs font-bold text-[#27391C] uppercase tracking-[0.2em] mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#B0DB9C]/10 rounded-full border border-[#B0DB9C]/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </motion.div>
            FUTURE PORTFOLIO
          </motion.div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-snug sm:leading-tight mb-4 sm:mb-6">
            Upcoming
            <br className="hidden xs:inline" />
            <motion.span
              className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              {" "}Products & Services
            </motion.span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
            Discover our pipeline of innovative mobility solutions designed to transform urban transportation in India.
          </p>
          <motion.div
            className="w-20 xs:w-24 sm:w-32 h-1.5 sm:h-2 mx-auto bg-gradient-to-r from-[#B0DB9C] via-[#27391C] to-[#B0DB9C] mt-6 sm:mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {upcomingProducts.map((product, index) => (
            <motion.div key={index} variants={fadeUp(index * 0.2)} className="h-full" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <div
                className="h-full p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl relative overflow-hidden group border-2 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl"
                style={{ backgroundColor: "white", borderColor: product.color + "40", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", minHeight: "min-content" }}
              >
                <CardBackgroundPattern icon={product.icon} color={product.color} />

                {/* Product Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0"
                    style={{ backgroundColor: product.color + "20" }}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <motion.div animate={isInView ? { rotate: [0, 360] } : { rotate: 0 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                      <product.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: product.color }} />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 truncate" style={{ color: TEXT_COLOR }}>{product.title}</h3>
                    <p className="text-[9px] xs:text-xs font-semibold overflow-hidden" style={{ color: product.color }}>{product.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 p-2 sm:p-3 rounded-md sm:rounded-lg bg-gray-50"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: product.color + "10", borderLeftColor: product.color, borderLeftWidth: "3px" }}
                    >
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}>
                        <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: product.color }} />
                      </motion.div>
                      <span className="text-xs xs:text-sm text-gray-700 line-clamp-2">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Problems & Revenue */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Problems */}
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2" style={{ color: DARK_GREEN }}>
                      <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                      Problems Solved
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {product.problemsSolved.map((problem, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block px-2 py-1 text-[9px] xs:text-xs font-medium rounded-full bg-red-50 text-red-700 border border-red-100 line-clamp-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {problem}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Revenue */}
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2" style={{ color: DARK_GREEN }}>
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                      Revenue Streams
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {product.revenueStreams.map((stream, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block px-2 py-1 text-[9px] xs:text-xs font-medium rounded-full bg-green-50 text-green-700 border border-green-100 line-clamp-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.7 + idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {stream}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Funding Section */}
        <motion.div variants={scaleIn(0.5)} className="max-w-full sm:max-w-4xl mx-auto px-2 sm:px-4 lg:px-8" whileHover={{ scale: 1.005 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 border-2 border-[#B0DB9C] shadow-lg sm:shadow-xl">
            {/* Header */}
            <motion.div className="text-center mb-8 sm:mb-10" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3" style={{ color: DARK_GREEN }}>Investment Opportunity</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">Join us in building India's safest, greenest last-mile mobility network</p>
            </motion.div>

            {/* Funding cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
              {[
                { label: "Funding Ask", value: fundingDetails.amount },
                { label: "Pre-money Valuation", value: fundingDetails.valuation },
                { label: "Scalable Model", value: "Market Ready" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/3 text-center p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200"
                  variants={scaleIn(0.7 + index * 0.1)}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", borderColor: PRIMARY_GREEN }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="text-xl xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2"
                    style={{ color: DARK_GREEN }}
                    animate={isInView ? { scale: [1, 1.1, 1], color: [DARK_GREEN, PRIMARY_GREEN, DARK_GREEN] } : {}}
                    transition={{ duration: 2, delay: 1 + index * 0.3 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-500">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Fund Allocation */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ color: DARK_GREEN }}>Use of Funds Allocation</h4>
              <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
                {fundingDetails.allocation.map((item, index) => (
                  <div key={index} className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm font-medium">
                      <span style={{ color: DARK_GREEN }}>{item.label}</span>
                      <span style={{ color: PRIMARY_GREEN }}>{item.value}</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.value } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: PRIMARY_GREEN }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div className="text-center mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
              <p className="text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6" style={{ color: DARK_GREEN }}>Excited to partner with forward-thinking investors</p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-white rounded-full"
                style={{ backgroundColor: DARK_GREEN }}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 25px ${PRIMARY_GREEN}40`, backgroundColor: PRIMARY_GREEN }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Explore Investment Opportunity
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2">
                For detailed discussions, pitch deck, or to explore this opportunity
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
