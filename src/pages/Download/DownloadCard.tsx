import React from 'react';


interface DownloadCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function DownloadCard({ icon: Icon, title, description, children }: DownloadCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 rounded-xl p-3">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}