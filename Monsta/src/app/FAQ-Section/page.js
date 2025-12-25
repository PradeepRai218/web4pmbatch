'use client';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Breadcrumds from '../common/Breadcrumds';

export default function FAQsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '1. What is your return policy?',
      answer:
        'We offer a 30-day return policy on all unused products with original packaging. Please contact our support for more details.',
    },
    {
      question: '2. How long does shipping take?',
      answer:
        'Shipping usually takes 5-7 business days depending on your location. You can track your order through the tracking ID provided.',
    },
    {
      question: '3. Do you offer international shipping?',
      answer:
        'Yes, we ship internationally to most countries. International shipping rates apply.',
    },
    {
      question: '4. Can I cancel my order?',
      answer:
        'Orders can be cancelled within 24 hours after placing them. After that, orders enter the processing stage and cannot be cancelled.',
    },
    {
      question: '5. How can I contact customer support?',
      answer:
        'You can contact our support team via email at support@example.com or through our live chat option on the website.',
    },
    {
      question: '6. Do you offer warranty on your products?',
      answer:
        'Yes, most of our products come with a 1-year manufacturer warranty against defects.',
    },
    {
      question: '7. How do I track my order?',
      answer:
        'Once your order is shipped, you will receive an email with your tracking number and a link to track your order online.',
    },
    {
      question: '8. What payment methods do you accept?',
      answer:
        'We accept all major credit cards, debit cards, PayPal, and UPI payments for your convenience.',
    },
  ];
   let pageName = 'FAQ';
  return (
    <div>
      <Breadcrumds pageName={pageName} />
      <section className="w-full py-16 bg-gradient-to-br from-gray-50 via-gray-100 via-rose-100 to-rose-300 ">
        <div className="max-w-[1120px] mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 cursor-pointer transition-all duration-300 hover:shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <span className="text-2xl text-rose-500 transition-transform duration-300">
                    {openIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
