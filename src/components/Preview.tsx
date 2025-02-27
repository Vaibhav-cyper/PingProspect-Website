
import { Play, Download } from 'lucide-react';

export default function Preview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            See PingProspect in Action
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Watch how easy it is to automate your Facebook outreach
          </p>
        </div>

        <div className="mt-12">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="PingProspect Interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <button className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button className="inline-flex items-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <Download className="h-5 w-5 mr-2" />
            Try It Yourself
          </button>
          
        </div>
      </div>
    </section>
  );
}