import { FaWindows, FaLinux } from "react-icons/fa";
import { MonitorDown } from 'lucide-react';
import DownloadHero from './DownloadHero';
import DownloadCard from './DownloadCard';
import DownloadButton from './DownloadButton';
import SystemRequirements from './SystemRequirements';

const WindowsIcon = () => <FaWindows className="h-8 w-8" />;
const LinuxIcon = () => <FaLinux className="h-8 w-8" />;

export default function DownloadPage() {
  const downloadWindows = () => {
    window.location.href = 'https://github.com/Vaibhav-cyper/PingProspect-Relasesver/releases/latest/download/pingprospect.exe';
  };

  const downloadLinuxDeb = () => {
    window.location.href = 'https://github.com/Vaibhav-cyper/PingProspect-Relasesver/releases/latest/download/pingprospect.deb';
  };

  const downloadLinuxAppImage = () => {
    window.location.href = 'https://github.com/Vaibhav-cyper/PingProspect-Relasesver/releases/latest/download/pingprospect.AppImage';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DownloadHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <DownloadCard
            icon={WindowsIcon}
            title="Windows"
            description="For Windows 10 and above"
          >
            <DownloadButton
              icon={MonitorDown}
              label="Download for Windows"
              sublabel="Latest version"
              onClick={downloadWindows}
            />
          </DownloadCard>

          <DownloadCard
            icon={LinuxIcon}
            title="Linux"
            description="For Ubuntu, Debian and other distributions"
          >
            <div className="space-y-4">
              <DownloadButton
                icon={MonitorDown}
                label="Download .deb"
                sublabel="For Debian, Ubuntu, and derivatives"
                onClick={downloadLinuxDeb}
              />
              <DownloadButton
                icon={MonitorDown}
                label="Download AppImage"
                sublabel="Universal Linux package"
                onClick={downloadLinuxAppImage}
              />
            </div>
          </DownloadCard>
        </div>

        <div className="mt-12">
          <SystemRequirements />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help? Contact us at{' '}
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