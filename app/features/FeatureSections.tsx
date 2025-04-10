import { MessageSquare, Upload, Users, Bot, RefreshCw } from 'lucide-react';
import Image from "next/image"


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
    image: '/data-import.webp',
    width: 600, // Adjust to your image's width
    height: 400,
    
  },
  {
    id: 'messaging',
    icon: MessageSquare,
    label: 'Personalized Messaging',
    title: 'Personalized Messaging Made Effortless',
    description: 'Send tailored messages to your contacts automatically with custom variables and templates.',
    benefits: [
      'Dynamic message templates',
      'Custom variable support',
      'Personalization at scale'  
    ],
    image: '/personalized-messaging.webp',
    width: 600, // Adjust to your image's width
    height: 400
  },
  {
    id: 'Reach More Pople',
    icon: Users,
    label: 'Reach More Pople',
    title: 'Reach More Pople ',
    description: 'Effortlessly reach multiple contacts at once without getting banned, thanks to our smart anti-spam system.',
    benefits: [
      'Smart rate limiting',
      'Anti-spam protection',
      'Batch processing',
      'Queue management'
    ],
    image: '/reach-more-people.webp',
    width: 600, // Adjust to your image's width
    height: 400
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
    image: '/human-interaction.webp',
    width: 600, // Adjust to your image's width
    height: 400
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
    image: '/error-recovery.webp',
    width: 600, // Adjust to your image's width
    height: 400
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
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height}
                    // fill={feature.fill}
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