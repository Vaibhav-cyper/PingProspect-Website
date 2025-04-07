import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Preview from '../components/Preview';
import Metrics from '../components/Metrics';
import Productivity from '../components/Productivity';
import NeverEndingLeads from '../components/NeverEndingLeads';
import MessageAutomation from '../components/MessageAutomation';
import FAQ from '../components/FAQ/FAQ';
import Support from '../components/Support';
import FinalCTA from '../components/FinalCTA';


export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Preview />
      <Features />
      <HowItWorks />
      <Productivity />
      <NeverEndingLeads />
      <MessageAutomation />
      <Metrics />
      <FAQ />
      <Support />
      <FinalCTA />
    </div>
  );
}