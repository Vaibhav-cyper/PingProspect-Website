import { Cpu, HardDrive, MonitorCheck } from 'lucide-react';

const requirements = {
  windows: [
    { icon: MonitorCheck, text: 'Windows 10 or higher' },
    { icon: Cpu, text: '4GB RAM minimum' },
    { icon: HardDrive, text: '500MB free disk space' }
  ],
  linux: [
    { icon: MonitorCheck, text: 'Ubuntu 18.04 or higher' },
    { icon: Cpu, text: '4GB RAM minimum' },
    { icon: HardDrive, text: '500MB free disk space' }
  ]
};

export default function SystemRequirements() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">System Requirements</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(requirements).map(([os, reqs]) => (
          <div key={os} className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 capitalize">{os}</h3>
            <div className="space-y-4">
              {reqs.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <req.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{req.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}