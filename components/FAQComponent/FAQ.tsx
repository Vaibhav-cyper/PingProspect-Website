"use client"

import FAQItem from './FAQItem';
import { faqData } from './faqData';

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8  lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          You may have some questions
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-700">
          Whether it&apos;s about how messages sent, our refund guarantee, or something more technical, we&apos;ve got your back.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200  ">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}