import { Download, FolderOpen, MessageSquare, PlayCircle } from 'lucide-react';

const steps = [
  {
    icon: FolderOpen,
    title: 'Open PingProspect App',
    description: 'Open PingProspect desktop application on your Windows or Linux computer.'
  },
  {
    icon: Download,
    title: 'Import Your Contacts',
    description: 'Easily upload your contact list from Excel or CSV files with one click.'
  },
  {
    icon: MessageSquare,
    title: 'Start Messaging',
    description: 'Set up your personalized messages and let PingProspect handle the outreach.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
          Get your next leads with PingProspect in 3 simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="relative pl-20">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
