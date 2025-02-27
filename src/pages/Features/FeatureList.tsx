import { MessageSquare, Upload, Users, Shield, Bot, RefreshCw, BarChart, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Smart Message Automation",
    description: "Automate your outreach with intelligent message scheduling and personalization. Our system ensures each message feels personal and authentic.",
    icon: MessageSquare,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Bulk Data Import",
    description: "Easily import contact lists from Excel or CSV files. Our system processes your data efficiently while maintaining data integrity.",
    icon: Upload,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "Advanced User Management",
    description: "Manage multiple target audiences efficiently. Segment your contacts and customize your approach for different groups.",
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Anti-Ban Protection",
    description: "Our intelligent system mimics human behavior to prevent detection. Built-in safety features protect your account from restrictions.",
    icon: Shield,
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Smart Bot Behavior",
    description: "Advanced AI algorithms that simulate human-like interactions. Natural typing patterns and response times maintain authenticity.",
    icon: Bot,
    imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Auto-Recovery System",
    description: "Automatic error handling and session recovery. The system intelligently manages crashes and connection issues.",
    icon: RefreshCw,
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Analytics Dashboard",
    description: "Track your campaign performance with detailed analytics. Monitor success rates, engagement metrics, and optimization opportunities.",
    icon: BarChart,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Smart Scheduling",
    description: "Schedule messages at optimal times. Our system learns from engagement patterns to maximize response rates.",
    icon: Clock,
    imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function FeatureList() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}