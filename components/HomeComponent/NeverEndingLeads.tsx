//Never Ending Leads
import { Users } from "lucide-react";
import { AnimatedList } from "../magicui/animated-list"; // Removed due to missing module

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications = [
  {
    name: "Payment received",
    description: "PingProspect",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "PingProspect",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "PingProspect",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "PingProspect",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
export default function AutomationDashboard() {
  return (
    <section className="py-24 bg-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-100 mb-4">
              <Users className="h-5 w-5" />
              <span className="font-medium">Reach</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
             Never Ending Leads 
            </h2>
            <p className="text-lg text-blue-100 mb-8">
            Non-stop flow of leads, meetings, and opportunities delivered straight to your inbox with just one click. Work tirelessly to keep your sales pipeline full, eliminating the hassle of manual outreach.
            </p>
            <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white font-medium hover:bg-white hover:text-blue-600 text-blue-600 flex items-center gap-2 transition transform hover:scale-105">
              Download Now
              <span className="text-xl">→</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  );
}