import Image from  "next/image"
import Link  from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo32x32.webp" width={32} height={32} alt="PingProspect" />
              <span className="text-xl font-bold text-gray-900">PingProspect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-700">Home</Link>
            <Link href="/features" className="text-gray-600 hover:text-blue-700">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-700">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700">Contact</Link>
            <Link 
              href="/download" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}