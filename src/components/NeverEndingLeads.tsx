import { Users } from 'lucide-react';

export default function AutomationDashboard() {
  return (
    <section className="py-24 bg-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-100 mb-4">
              <Users className="h-5 w-5" />
              
              <span className="font-medium">Reach</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
             Never Ending Leads 
            </h2>
            <p className="text-lg text-blue-100 mb-8">
            Non-stop flow of leads, meetings, and opportunities delivered straight to your inbox with just one click. Work tirelessly to keep your sales pipeline full, eliminating the hassle of manual outreach.
            </p>
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white font-medium hover:bg-white hover:text-blue-600 text-blue-600 flex items-center gap-2 transition transform hover:scale-105">
              Download Now
              <span className="text-xl">→</span>
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative absolute inset-0 bg-blue-500  p-4 rounded-2xl shadow-xl">
              <img
                src="reach.webp"
                alt="Analytics Dashboard"
                className="rounded-xl w-lg h-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
