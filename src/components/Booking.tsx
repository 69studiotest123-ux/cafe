"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Send, CheckCircle2 } from "lucide-react";
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
      (formData.notes ? `• Note: ${formData.notes}\n` : "") +
      `\nPlease confirm availability. Thank you!`
    );

    const waLink = `https://wa.me/${BERU_INFO.phoneTel.replace(/\D/g, "")}?text=${message}`;

    setSubmitted(true);
    window.open(waLink, "_blank");
  };

  return (
    <section id="book-table" className="relative py-16 sm:py-24 lg:py-32 bg-[#F4EBDD]/40 border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#B98A55]" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
              RESERVATIONS & EVENTS
            </span>
            <span className="w-6 h-[1.5px] bg-[#B98A55]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight mb-3">
            Reserve Your Table
          </h2>

          <p className="text-xs sm:text-sm text-[#6A5546] font-light max-w-lg mx-auto leading-relaxed">
            Planning a relaxed brunch, meeting friends, or hosting a small gathering? Send your reservation request directly to our team via WhatsApp.
          </p>
        </div>

        {/* Reservation Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2A1B12]/8 shadow-[0_8px_32px_rgba(42,27,18,0.04)]"
        >
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#17110D]">
                Reservation Request Sent!
              </h3>
              <p className="text-xs sm:text-sm text-[#6A5546] max-w-md mx-auto">
                WhatsApp has opened with your table details. Our team will confirm your reservation shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="touch-target px-6 py-2.5 rounded-full border border-[#2A1B12]/20 text-xs uppercase tracking-wider text-[#2A1B12] hover:bg-[#FAF7F2] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amani Perera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B98A55]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B98A55]" />
                    <span>Preferred Time</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B98A55]" />
                    <span>Party Size</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3 – 4 Guests</option>
                    <option value="5-8 Guests">5 – 8 Guests</option>
                    <option value="Large Gathering (8+)">Large Group (8+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#17110D] mb-1.5">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Birthday breakfast, indoor AC preference, dietary preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-4 rounded-xl border border-[#2A1B12]/15 bg-[#FAF7F2]/50 text-sm text-[#17110D] focus:outline-none focus:border-[#B98A55] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="touch-target flex items-center justify-center gap-2.5 w-full h-13 rounded-full bg-[#2A1B12] hover:bg-[#17110D] text-[#FAF6F0] text-xs font-semibold uppercase tracking-[0.2em] shadow-md transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-[#B98A55]" />
                <span>Send Request via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#6A5546]/80 font-light">
                Direct instant confirmation with the café team. No deposit required.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
