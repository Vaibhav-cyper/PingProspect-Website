import FooterLink from './FooterLink';
import FooterSection from './FooterSection';


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
            <img src="logo32x32.webp" alt="PingProspect" />
              <span className="text-xl font-bold text-gray-900">PingProspect</span>
            </div>
            <p className="text-gray-500 mb-4">
              Automate your Facebook outreach with ease and efficiency.
            </p>
          </div>

          {/* Product Section */}
          <FooterSection title="Product">
            <li><FooterLink to="/features">Features</FooterLink></li>
            <li><FooterLink to="/pricing">Pricing</FooterLink></li>
            <li><FooterLink to="/download">Download</FooterLink></li>
            <li><FooterLink to="/early-access">Early Access</FooterLink></li>
          </FooterSection>

          {/* Company Section */}
          <FooterSection title="Company">
            <li><FooterLink to="/contact">Contact</FooterLink></li>
            <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
            <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
          </FooterSection>

          {/* Support Section */}
          <FooterSection title="Support">
            <li><FooterLink to="/faq">FAQ</FooterLink></li>
            <li><FooterLink to="/guide">Guide</FooterLink></li>
            
          </FooterSection>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} PingProspect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
