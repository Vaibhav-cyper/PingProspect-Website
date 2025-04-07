import FeatureHero from './FeatureHero';
import FeatureSections from './FeatureSections';
import FinalCTA from '../../components/FinalCTA';
import Support from '../../components/Support';


export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <FeatureHero />
      <FeatureSections />
      <FinalCTA />
      <Support />
    </div>
  );
}