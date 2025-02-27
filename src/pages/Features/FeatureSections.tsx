import { MessageSquare, Upload, Users, Shield, Bot, RefreshCw } from 'lucide-react';

const features = [
  {
    id: 'data-import',
    icon: Upload,
    label: 'Data Import',
    title: 'Effortless One-Click Data Imports',
    description: 'Save valuable time by easily importing user data from Excel for seamless outreach.',
    benefits: [
      'One-click import from Excel and CSV',
      'Automatic field mapping',
      'Data validation and cleaning',
      'Bulk contact processing'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
  },
  {
    id: 'messaging',
    icon: MessageSquare,
    label: 'Smart Messaging',
    title: 'Personalized Messaging Made Effortless',
    description: 'Send tailored messages to your contacts automatically with custom variables and templates.',
    benefits: [
      'Dynamic message templates',
      'Custom variable support',
      'Personalization at scale',
      'Message scheduling'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'bulk-messaging',
    icon: Users,
    label: 'Mass Messaging',
    title: 'Bulk Messaging for Greater Reach',
    description: 'Effortlessly reach multiple contacts at once without getting banned, thanks to our smart anti-spam system.',
    benefits: [
      'Smart rate limiting',
      'Anti-spam protection',
      'Batch processing',
      'Queue management'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'human-interaction',
    icon: Bot,
    label: 'Natural Interaction',
    title: 'Human-Like Interaction',
    description: 'Our bot mimics human behavior with natural delays and typing patterns to avoid spam filters.',
    benefits: [
      'Natural typing patterns',
      'Random delay intervals',
      'Human-like responses',
      'Activity simulation'
    ],
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'chat-management',
    icon: Shield,
    label: 'Chat Management',
    title: 'Automatic Chat Management',
    description: 'Close chat windows automatically and recover from crashes with our intelligent system.',
    benefits: [
      'Auto window management',
      'Crash recovery',
      'Session handling',
      'Memory optimization'
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'error-handling',
    icon: RefreshCw,
    label: 'Error Recovery',
    title: 'Robust Error Handling',
    description: 'Automatically retries failed messages and manages chat sessions for uninterrupted operation.',
    benefits: [
      'Automatic retry system',
      'Smart error recovery',
      'Session persistence',
      'Connection management'
    ],
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
];

export default function FeatureSections() {
  return (
    <div className="py-16">
      {features.map((feature, index) => (
        <div 
          key={feature.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <feature.icon className="h-5 w-5" />
                  <span className="font-medium">{feature.label}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl transform ${
                    index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                  }`}></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}