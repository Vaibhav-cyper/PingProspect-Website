import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Announcement Banner */}
      <div className="flex justify-center mb-12">
        <Link
          href="/download"
          className="bg-blue-50 rounded-full px-2 md:px-4 py-2 flex items-center space-x-1 md:space-x-2 text-sm font-medium text-blue-900 hover:bg-blue-100 transition-colors"
        >
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span>Announcement</span>
          <span className="text-blue-600 whitespace-nowrap">
            Free Access for Early Adopters →
          </span>
        </Link>
      </div>

      {/* Headline */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Reach Out to More leads
          <span className="block text-blue-600">with PingProspect</span>
        </h1>

        <p className="my-8 text-xl text-gray-500 font-medium">
          Automate your Outreach with PingProspect. Get more leads, book more
          meetings, and close more deals—effortlessly.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="inline-flex items-center justify-center  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Download Now for free
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

        <p className="mt-8 text-sm text-black-500 font-medium">
          1 Minutes Setup • Get More Clients • No credit card required.
        </p>
      </div>
    </div>
  );
}
