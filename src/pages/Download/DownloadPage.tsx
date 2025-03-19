import { useState, useEffect } from 'react';
import { FaWindows } from "react-icons/fa";
import { MonitorDown, Shield, Cpu, HardDrive, Download, CheckCircle } from 'lucide-react';
import DownloadHero from './DownloadHero';

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified Windows executable with built-in security features"
  },
  {
    icon: Download,
    title: "Quick Installation",
    description: "Simple setup process that takes less than 2 minutes"
  },
  {
    icon: CheckCircle,
    title: "Auto Updates",
    description: "Always stay up to date with automatic updates"
  }
];

const requirements = [
  {
    icon: FaWindows,
    text: "Windows 10 or higher"
  },
  {
    icon: Cpu,
    text: "8GB RAM minimum"
  },
  {
    icon: HardDrive,
    text: "500MB free disk space"
  }
];

const steps = [
  "Download the PingProspect installer",
  "Run the installer as administrator",
  "Follow the installation wizard",
  "Launch PingProspect and start automating"
];

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export default function DownloadPage() {
  // State to store the download URL and loading status
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the latest release on component mount
  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Vaibhav-cyper/PingProspect-Relasesver/releases/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch release data');
        }
        const data: GitHubRelease = await response.json();
        // Find the asset that matches the pattern for the Windows executable
        const asset = data.assets.find(asset => 
          asset.name.startsWith('pingprospect-Setup-') && asset.name.endsWith('.exe')
        );
        if (asset) {
          setDownloadUrl(asset.browser_download_url);
        } else {
          console.warn('No matching .exe asset found in the latest release');
        }
      } catch (error) {
        console.error('Error fetching latest release:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLatestRelease();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <DownloadHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        {/* Main Download Card */}
        <div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-xl p-3">
                <FaWindows className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Windows</h3>
                <p className="text-gray-600">For Windows 10 and above</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gray-50 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <feature.icon className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Conditional rendering based on loading state and download URL */}
            {isLoading ? (
              <div className="w-full flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 text-lg rounded-xl font-medium">
                Loading...
              </div>
            ) : downloadUrl ? (
              <a
                href={downloadUrl}
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl font-medium transition-colors group"
                download
                rel="noopener noreferrer"
              >
                <MonitorDown className="h-8 w-6 mr-2" />
                Download for Windows
              </a>
            ) : (
              <div className="w-full flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 text-lg rounded-xl font-medium">
                Download not available
              </div>
            )}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">System Requirements</h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <req.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{req.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Steps */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Installation Steps</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div 
          className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600">
            Our support team is available 24/7. Contact us at{' '}
            <a 
              href="mailto:support@pingprospect.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              support@pingprospect.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
