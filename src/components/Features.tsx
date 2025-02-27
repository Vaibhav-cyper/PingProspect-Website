import { MessageSquare, Upload, Users, Shield, Bot, RefreshCw } from 'lucide-react';

const features = [
  {
    name: 'Effortless One-Click Data Imports',
    description: 'Save valuable time by easily importing user data from Excel for seamless outreach.',
    icon: Upload,
  },
  {
    name: 'Personalized Messaging Made Effortless',
    description: 'Send tailored messages to your contacts automatically with custom variables and templates.',
    icon: MessageSquare,
  },
  {
    name: 'Bulk Messaging for Greater Reach',
    description: 'Effortlessly reach multiple contacts at once without getting banned, thanks to our smart anti-spam system.',
    icon: Users,
  },
  {
    name: 'Human-Like Interaction',
    description: 'Our bot mimics human behavior with natural delays and typing patterns to avoid spam filters.',
    icon: Bot,
  },
  {
    name: 'Automatic Chat Management',
    description: 'Close chat windows automatically and recover from crashes with our intelligent system.',
    icon: Shield,
  },
  {
    name: 'Robust Error Handling',
    description: 'Automatically retries failed messages and manages chat sessions for uninterrupted operation.',
    icon: RefreshCw,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience the ease of reaching your audience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to automate your Facebook messaging workflow, backed by powerful features.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}