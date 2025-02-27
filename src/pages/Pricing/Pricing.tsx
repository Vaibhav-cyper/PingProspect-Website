import PricingHero from './PricingHero';
import LaunchOffer from './LaunchOffer';
import Support from '../../components/Support';
import Footer from '../../components/Footer/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <LaunchOffer />
      <Support />
      <Footer />
    </div>
  );
}