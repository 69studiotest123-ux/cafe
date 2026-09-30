"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Send, CheckCircle2, Sparkles } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2 Guests",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello Beru Café! I would like to request a table reservation:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.time}\n` +
      `• Guests: ${formData.guests}\n` +
      (formData.notes ? `• Special Request: ${formData.notes}\n` : "") +
      `\nPlease let me know if this table can be reserved. Thank you!`
    );

    const waLink = `https://wa.me/94771234567?text=${message}`;

    setSubmitted(true);
    window.open(waLink, "_blank");
  };

  return (
    <section id="book-table" className="relative py-32 md:py-44 bg-[#F4EBDD]/40 border-t border-[#E4C8BA]/60 overflow-hidden">
      {/* Ambient Background */}
      <div className="ambient-orb w-[700px] h-[700px] bg-[#E4C8BA]/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb" />
      <div className="ambient-orb w-[300px] h-[300px] bg-[#B98A55]/10 top-10 right-20 animate-orb-reverse" />
      <div className="ambient-orb w-[250px] h-[250px] bg-[#E4C8BA]/15 bottom-10 left-10 animate-orb" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
              <span className="text-xs uppercase tracking-[0.32em] font-semibold text-[#B98A55]">
                RESERVATIONS
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#2A1B12] font-normal tracking-tight uppercase leading-[0.95] mb-5">
              Your Table{" "}
              <br />
              <span className="italic font-light lowercase text-[#B98A55]">is waiting.</span>
            </h2>

            {/* Ornament */}
            <div className="ornament-divider max-w-xs mx-auto my-6">
              <span className="text-[#B98A55] text-xs">✦</span>
            </div>

            <p className="text-xs sm:text-sm text-[#6A5546] font-normal max-w-md mx-auto leading-relaxed">
              Reserve your intimate seating for morning brew, artisan brunch, or an afternoon catch-up.
            </p>
          </motion.div>
        </div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_16px_50px_rgba(56,36,24,0.08)] border border-[#E4C8BA]/80"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                suppressHydrationWarning
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahan Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] placeholder-[#A08977] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] placeholder-[#A08977] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      <Calendar className="inline w-3 h-3 mr-1.5 text-[#B98A55]" />
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      <Clock className="inline w-3 h-3 mr-1.5 text-[#B98A55]" />
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    >
                      <option value="" disabled className="bg-white text-[#2A1B12]">Select Time Slot (8:00 AM – 5:30 PM)</option>
                      <option value="08:30 AM" className="bg-white text-[#2A1B12]">08:30 AM (Breakfast)</option>
                      <option value="10:00 AM" className="bg-white text-[#2A1B12]">10:00 AM (Morning Coffee)</option>
                      <option value="11:30 AM" className="bg-white text-[#2A1B12]">11:30 AM (Brunch)</option>
                      <option value="01:00 PM" className="bg-white text-[#2A1B12]">01:00 PM (Lunch)</option>
                      <option value="02:30 PM" className="bg-white text-[#2A1B12]">02:30 PM (Afternoon Tea/Matcha)</option>
                      <option value="04:00 PM" className="bg-white text-[#2A1B12]">04:00 PM (Late Afternoon)</option>
                      <option value="04:45 PM" className="bg-white text-[#2A1B12]">04:45 PM (Closing Hour)</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      <Users className="inline w-3 h-3 mr-1.5 text-[#B98A55]" />
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    >
                      <option value="1 Guest" className="bg-white text-[#2A1B12]">1 Guest (Solo Quiet Corner)</option>
                      <option value="2 Guests" className="bg-white text-[#2A1B12]">2 Guests (Intimate Table)</option>
                      <option value="3 Guests" className="bg-white text-[#2A1B12]">3 Guests</option>
                      <option value="4 Guests" className="bg-white text-[#2A1B12]">4 Guests (Standard Dining)</option>
                      <option value="5-8 Guests" className="bg-white text-[#2A1B12]">5–8 Guests (Large Courtyard Table)</option>
                      <option value="More than 8" className="bg-white text-[#2A1B12]">8+ Guests (Special Gathering)</option>
                    </select>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-[#382418] mb-2 font-semibold">
                      Special Request (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Courtyard seating, anniversary"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      suppressHydrationWarning
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E4C8BA] text-[#2A1B12] placeholder-[#A08977] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-14 py-4 rounded-full bg-[#382418] hover:bg-[#B98A55] text-[#FAF6F0] font-semibold text-xs uppercase tracking-[0.24em] transition-all duration-300 shadow-xl"
                  >
                    <span>REQUEST A TABLE</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <p className="mt-4 text-[11px] text-[#6A5546] tracking-wide font-normal">
                    * Table requests are sent directly to Beru Café's team via WhatsApp for instant confirmation.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-20 h-20 rounded-full bg-[#E4C8BA]/30 border border-[#B98A55]/40 text-[#382418] flex items-center justify-center mx-auto mb-5 animate-float shadow-md">
                  <CheckCircle2 className="w-9 h-9 text-[#B98A55]" />
                </div>
                <h3 className="font-serif text-3xl text-[#2A1B12] font-normal">
                  Reservation Request Prepared
                </h3>
                <p className="text-sm text-[#6A5546] max-w-md mx-auto leading-relaxed font-normal">
                  Your details have been forwarded to our WhatsApp desk. Our team will verify availability for{" "}
                  <strong className="text-[#2A1B12]">{formData.date} at {formData.time}</strong>{" "}
                  and respond to confirm.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    suppressHydrationWarning
                    className="px-7 py-3 rounded-full border border-[#E4C8BA] text-xs uppercase tracking-wider text-[#382418] hover:bg-[#FAF7F2] transition-colors font-semibold"
                  >
                    Make Another Request
                  </button>
                  <a
                    href={BERU_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full bg-[#382418] text-xs uppercase tracking-wider font-semibold text-[#FAF6F0] hover:bg-[#B98A55] transition-colors"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
