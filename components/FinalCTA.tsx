import { ArrowRight} from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 mix-blend-multiply" />
          </div>
          <div className="relative py-24 px-8 sm:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Automate Your Facebook Outreach?
              </h2>
              <p className="mt-6 text-xl text-blue-100">
              Download For Free today. No credit card required.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex cursor-pointer items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md  bg-white text-blue-500 transition-colors">
                  Download Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}