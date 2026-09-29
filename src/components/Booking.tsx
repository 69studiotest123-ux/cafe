"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
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

    // Construct formatted WhatsApp message for reservation request
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

    // Show transparent modal and open WhatsApp link
    setSubmitted(true);
    window.open(waLink, "_blank");
  };

  return (
    <section id="book-table" className="relative py-28 md:py-40 bg-[#221812] border-t border-[#D8C2A4]/15 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#17110D] blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
              RESERVATIONS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4EBDD] font-normal tracking-tight uppercase leading-[0.95] mb-4">
            Your Table <br />
            <span className="italic text-[#D8C2A4] font-light lowercase">is waiting.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#D8C2A4]/75 font-light max-w-lg mx-auto leading-relaxed">
            Reserve your intimate seating for morning brew, artisan brunch, or evening catch-up.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-[#17110D]/90 backdrop-blur-xl rounded-3xl border border-[#D8C2A4]/20 p-8 sm:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahan Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] placeholder-[#D8C2A4]/35 focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] placeholder-[#D8C2A4]/35 focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] focus:outline-none focus:border-[#B98A55] transition-colors text-sm [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    >
                      <option value="" disabled className="bg-[#17110D]">Select Time Slot (8:00 AM – 5:30 PM)</option>
                      <option value="08:30 AM" className="bg-[#17110D]">08:30 AM (Breakfast)</option>
                      <option value="10:00 AM" className="bg-[#17110D]">10:00 AM (Morning Coffee)</option>
                      <option value="11:30 AM" className="bg-[#17110D]">11:30 AM (Brunch)</option>
                      <option value="01:00 PM" className="bg-[#17110D]">01:00 PM (Lunch)</option>
                      <option value="02:30 PM" className="bg-[#17110D]">02:30 PM (Afternoon Tea/Matcha)</option>
                      <option value="04:00 PM" className="bg-[#17110D]">04:00 PM (Late Afternoon)</option>
                      <option value="04:45 PM" className="bg-[#17110D]">04:45 PM (Closing Hour)</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    >
                      <option value="1 Guest" className="bg-[#17110D]">1 Guest (Solo Quiet Corner)</option>
                      <option value="2 Guests" className="bg-[#17110D]">2 Guests (Intimate Table)</option>
                      <option value="3 Guests" className="bg-[#17110D]">3 Guests</option>
                      <option value="4 Guests" className="bg-[#17110D]">4 Guests (Standard Dining)</option>
                      <option value="5-8 Guests" className="bg-[#17110D]">5–8 Guests (Large Courtyard Table)</option>
                      <option value="More than 8" className="bg-[#17110D]">8+ Guests (Special Gathering)</option>
                    </select>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D8C2A4] mb-2 font-medium">
                      Special Request (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Courtyard seating, anniversary"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2A1B12]/60 border border-[#D8C2A4]/20 text-[#F4EBDD] placeholder-[#D8C2A4]/35 focus:outline-none focus:border-[#B98A55] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full bg-[#B98A55] hover:bg-[#F4EBDD] text-[#17110D] font-semibold text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl shadow-black/50"
                  >
                    <span>REQUEST A TABLE</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="mt-4 text-[11px] text-[#D8C2A4]/60 tracking-wide font-light">
                    * Table requests are sent directly to Beru Café’s team via WhatsApp for instant confirmation.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#4E5E48]/30 border border-[#4E5E48] text-[#D8C2A4] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#B98A55]" />
                </div>
                <h3 className="font-serif text-3xl text-[#F4EBDD] font-normal">
                  Reservation Request Prepared
                </h3>
                <p className="text-sm text-[#D8C2A4]/80 max-w-md mx-auto leading-relaxed font-light">
                  Your details have been forwarded to our WhatsApp desk. Our team will verify table availability for <strong className="text-[#F4EBDD]">{formData.date} at {formData.time}</strong> and respond to confirm.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#D8C2A4]/30 text-xs uppercase tracking-wider text-[#D8C2A4] hover:text-[#F4EBDD]"
                  >
                    Make Another Request
                  </button>
                  <a
                    href={BERU_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#B98A55] text-xs uppercase tracking-wider font-semibold text-[#17110D] hover:bg-[#F4EBDD]"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
