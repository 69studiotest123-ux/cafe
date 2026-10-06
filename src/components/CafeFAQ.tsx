"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function CafeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Where is Beru Café located?",
      answer:
        "Beru Café is quietly tucked at 29, Thimbirigasyaya Place, Colombo 05, Western Province, Sri Lanka.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open all 7 days of the week from 8:00 AM to 5:30 PM (Monday through Sunday).",
    },
    {
      question: "What specialty drinks and dishes do you serve?",
      answer:
        "Our artisan menu features ceremonial grade Japanese Uji matcha (such as our signature Artisan Rose Matcha), single-origin specialty coffee, fresh breakfast bowls, pan-seared ocean fish, gourmet bagels, and handmade laminated pastries.",
    },
    {
      question: "How do I make a table reservation?",
      answer:
        "You can request a table reservation through our online reservation form on this website, which instantly sends your party details directly to our team via WhatsApp for confirmation.",
    },
    {
      question: "Do you offer vegan or dairy-free beverage options?",
      answer:
        "Yes, we offer plant-based milk alternatives including oat milk and almond milk, alongside naturally plant-based bowls and elixirs. Please let our barista know your dietary preferences.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#2A1B12]/8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <HelpCircle className="w-4 h-4 text-[#B98A55]" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
              FREQUENT QUESTIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#17110D] font-normal tracking-tight">
            Visiting Beru Café
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#2A1B12]/8 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="touch-target w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#17110D] font-medium"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B98A55] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed border-t border-[#2A1B12]/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
