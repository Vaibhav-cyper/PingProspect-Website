import React from 'react';
import { Layers, MessageSquare, Settings } from 'lucide-react';
import Link  from 'next/link';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const features: FeatureCard[] = [
  {
    icon: <Layers className="w-12 h-12 text-blue-500 group-hover:text-yellow-500 transition-colors duration-300" />,
    title: "Effortless One-Click Data Imports",
    description: "Save valuable time by easily importing user data from Excel for seamless outreach.",
    link: "/features"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-500 group-hover:text-emerald-500 transition-colors duration-300" />,
    title: "Personalized Messaging Made Effortless",
    description: "Send tailored messages to your contacts automatically with custom variables and templates.",
    link: "/features"
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />,
    title: "Robust Error Handling",
    description: "Automatically retries failed messages and manages chat sessions for uninterrupted operation.",
    link: "/features"
  }
];



export default function Features() {
  return (
    <section className="py-24 bg-white">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-20" data-aos="fade-up">
        <h2 className=" text-lg text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience the ease of reaching your audience
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to automate your Facebook messaging workflow, backed by powerful features.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-blue-600 font-medium hover:text-purple-700 transition-colors"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-24 relative rounded-3xl overflow-hidden" data-aos="fade-up">
          <img
            src="hero-stock1.webp"
            alt="Team Collaboration"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-0 right-0 -mt-8 -mr-8">
            <div className="text-emerald-400">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}