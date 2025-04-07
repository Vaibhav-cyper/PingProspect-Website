import PricingHero from './PricingHero';
import LaunchOffer from './LaunchOffer';
import Support from '../../components/Support';


export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <LaunchOffer />
      <Support />
    </div>
  );
}
