import { HeroSection } from './components/hero-section';
import { BenefitsSection } from './components/benefits-section';
import { FeaturesSection } from './components/features-section';
import { PricingSection } from './components/pricing-section';
import { TestimonialsSection } from './components/testimonials-section';
import { SocialProof } from './components/social-proof';
import { CaptureForm } from './components/capture-form';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <SocialProof />
      <CaptureForm />
      <Footer />
    </div>
  );
}