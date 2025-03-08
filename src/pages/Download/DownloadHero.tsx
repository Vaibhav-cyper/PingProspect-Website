import { Download} from 'lucide-react';

export default function DownloadHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-700 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-600 to-indigo-600" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
              <Download className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Download PingProspect
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Get started with automated Facebook outreach today. Simple installation, powerful features.
          </p>
        </div>
      </div>
    </div>
  );
}
