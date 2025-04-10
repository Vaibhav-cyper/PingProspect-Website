import { Sparkles } from 'lucide-react';

export default function PricingHero() {
  return (
    <div className="relative bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Special Launch Pricing
            <span className="block text-blue-600">Limited Time Offer</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Be among the first to experience PingProspect&apos;s powerful automation features completely free during our launch period.
          </p>
        </div>
      </div>
    </div>
  );
}