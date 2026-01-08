"use client";

import React, { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8114956770",
      link: "tel:+918114956770",
    },
    {
      icon: Mail,
      label: "Email",
      value: "celestialrift1@gmail.com",
      link: "mailto:celestialrift1@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value:
        "Plot No-363/1734, New Market, Bypass Road, Bhadrak, Odisha – 756100",
      link: "https://maps.google.com/?q=Bhadrak,Odisha",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const immediateHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12" ref={ref}>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={immediateHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27391C] tracking-tight leading-tight mb-4 sm:mb-5">
              <span className="bg-gradient-to-r from-[#27391C] to-[#B0DB9C] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
              Get in touch with us. We're here to help and answer any questions.
            </p>

            <motion.div
              className="w-20 sm:w-24 h-1.5 mx-auto bg-gradient-to-r from-[#B0DB9C] to-[#27391C] mt-5 sm:mt-6 rounded-full"
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-[#27391C] to-[#27391C]/90 p-5 sm:p-8 lg:p-10">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Let's Connect
                </h3>
                <p className="text-[#B0DB9C] text-xs sm:text-sm leading-relaxed">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={
                        item.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-[#B0DB9C]/20 hover:border-[#B0DB9C]"
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#B0DB9C] rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#27391C]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[#B0DB9C] font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                          {item.label}
                        </h4>
                        <p className="text-white text-xs sm:text-sm leading-relaxed break-words">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="pt-4 sm:pt-6 border-t border-[#B0DB9C]/20">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#B0DB9C] rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#27391C]" />
                  </div>
                  <div>
                    <h4 className="text-[#B0DB9C] font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                      Business Hours
                    </h4>
                    <p className="text-white text-xs sm:text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-[#B0DB9C]/80 text-[10px] sm:text-xs mt-0.5">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119366.55638281468!2d86.4170925!3d21.0547737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bbc21b69fb1e5%3A0x3b24fef1d902e3ac!2sBhadrak%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white rounded-xl p-3 sm:p-4 shadow-xl sm:shadow-2xl">
              <h4 className="text-[#171717] font-bold text-sm sm:text-base mb-1">
                Visit Our Office
              </h4>
              <p className="text-[#64748B] text-[11px] sm:text-xs leading-relaxed">
                Plot No-363/1734, New Market, Bypass Road, Bhadrak, Odisha –
                756100
              </p>
              <a
                href="https://maps.google.com/?q=Bhadrak,Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-[#27391C] text-white px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold hover:bg-[#B0DB9C] hover:text-[#27391C] transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
