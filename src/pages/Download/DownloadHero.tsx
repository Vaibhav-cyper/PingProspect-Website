export default function DownloadHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-700 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-600 to-indigo-600" />
      </div>
      <div className="relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Download PingProspect
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Get started with automated Facebook outreach today
          </p>
        </div>
      </div>
    </div>
  );
}