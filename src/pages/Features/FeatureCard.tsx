import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export default function FeatureCard({ title, description, icon: Icon, imageUrl }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 rounded-lg p-3">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}