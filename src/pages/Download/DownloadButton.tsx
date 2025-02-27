import { Download, LucideIcon } from 'lucide-react';

interface DownloadButtonProps {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  onClick: () => void;
}

export default function DownloadButton({ icon: Icon, label, sublabel, onClick }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center w-full bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300"
    >
      <div className="flex-shrink-0 mr-6">
        <Icon className="h-10 w-10 text-gray-700 group-hover:text-blue-600 transition-colors" />
      </div>
      <div className="flex-grow text-left">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {label}
        </h3>
        <p className="text-sm text-gray-600">{sublabel}</p>
      </div>
      <Download className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
    </button>
  );
}