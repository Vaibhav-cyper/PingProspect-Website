
import { MessageCircle } from 'lucide-react';

export default function MessageAutomation() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Conversions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Create impressive conversations that convert
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            Create 
            <span className="bg-blue-600 text-white font-bold px-2 rounded-lg mx-2 ">
            personalized and engaging messages 
            </span>
            that drive conversions ,connect with more people, build meaningful relationships, and ultimately grow your business or network.
            </p>
            <div className="flex gap-4">
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 font-medium hover:bg-blue-600 hover:text-neutral-50 text-blue-600 flex items-center gap-2 transition transform hover:scale-105">
              Download Now
              <span className="text-xl">→</span>
            </button>
              
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform -rotate-3"></div>
              <img
                src="Public\conversation.webp"
                alt="Message Automation Interface"
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}