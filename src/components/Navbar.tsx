import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="Public\logo32x32.webp" alt="PingProspect" />
              <span className="text-xl font-bold text-gray-900">PingProspect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-700">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-700">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-700">Pricing</Link>
            <Link to="/guide" className="text-gray-600 hover:text-blue-700">Guide</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-700">Contact</Link>
            <Link 
              to="/download" 
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