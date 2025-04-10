import Hero from '../components/HomeComponent/Hero';
import Features from '../components/HomeComponent/Features';
import HowItWorks from '../components/HomeComponent/HowItWorks';
import Preview from '../components/HomeComponent/Preview';
import Metrics from '../components/HomeComponent/Metrics';
import Productivity from '../components/HomeComponent/Productivity';
import NeverEndingLeads from '../components/HomeComponent/NeverEndingLeads';
import MessageAutomation from '../components/HomeComponent/MessageAutomation';
import FAQ from '../components/FAQComponent/FAQ';
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