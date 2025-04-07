import { ArrowRight, MessageCircle , Sparkles  } from 'lucide-react';
import Link from "next/link"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Announcement Banner */}
      <div className="flex justify-center mb-12">
          <div className="bg-blue-50 rounded-full px-4 py-2 flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Announcement</span>
            <Link href="/download" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Free Access for Early Adopters →
            </Link>
          </div>
        </div>

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Send Messages to Clients
          <span className="block text-blue-600">on Autopilot</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-500">
        Automate your outreach process and reach more people with less effort.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="inline-flex items-center justify-center  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get started for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Learn more
            <MessageCircle className="ml-2 h-5 w-5" />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Try out for Free. No credit card required.
        </p>
      </div>
      </div>

     
  );
}
