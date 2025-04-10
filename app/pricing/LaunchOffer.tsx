import { Clock, Check, ArrowRight } from 'lucide-react';

export default function LaunchOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          
          <div className="px-8 pt-12 pb-8">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Limited Time Launch Offer</span>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Free Access for Early Adopters
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get full access to all features
              </p>
              
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-gray-900">$0</span>
                <span className="text-xl text-gray-500">/month</span>
              </div>
              
              <p className="mt-4 text-sm text-gray-500">
                During launch period • Limited time offer
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Everything included:
              </h3>
              <ul className="space-y-4">
                {[
                  'Unlimited message automation',
                  'Smart anti-ban protection',
                  'Excel/CSV data import',
                  'Personalized messaging',
                  'Advanced analytics dashboard',
                  'Priority support',
                  'Future updates included'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * After the launch period, we&apos;ll introduce our regular pricing plans. Early adopters will receive special benefits and discounted rates.
          </p>
        </div>
      </div>
    </section>
  );
}