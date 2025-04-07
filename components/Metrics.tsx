
import { Users, MessageCircle, Clock } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '50+',
    label: 'Early Adopters',
    description: 'Trust PingProspect for their outreach'
  },
  {
    icon: MessageCircle,
    value: '10,000',
    label: 'Messages Automated',
    description: 'Sent with personalization per day'
  },
  {
    icon: Clock,
    value: '150+',
    label: 'Hours Saved',
    description: 'For our valued customers'
  }
];

export default function Metrics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <metric.icon className="h-12 w-12 text-blue-600" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-gray-900">{metric.value}</p>
              <p className="mt-2 text-lg font-medium text-gray-600">{metric.label}</p>
              <p className="mt-1 text-base text-gray-500">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}