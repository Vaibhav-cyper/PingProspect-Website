import { ScrollText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <ScrollText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Terms of Service</h1>

            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance</h2>
              <p className="text-gray-600 mb-6">
                By using or visiting our website and downloading Ping Prospect Desktop APP, you signify that you have read, understand, and agree to be bound by our &quot;Terms of service or Agreement&quot;.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Ownership</h2>
              <p className="text-gray-600 mb-6">
                You may not claim intellectual or exclusive ownership rights to any of our products. All products are property of pingprospect.com. They are provided &quot;as is&quot; without warranty of any kind, expressed or implied. We shall not be liable for any damages, including but not limited to, direct, indirect, special, incidental, or consequential damages or losses that occur out of the use or inability to use our products.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Support</h2>
              <p className="text-gray-600 mb-6">
                Support and automatic product updates are provided for the term defined by the account type and are based on the date of purchase. After the subscription has expired a new subscription will need to be purchased to continue receiving support and product updates.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Payments & Refund Policy</h2>
              <p className="text-gray-600 mb-6">
                Our order process is conducted by our online reseller Stripe.com. Stripe.com is the Merchant of Record for all our orders. Stripe provides all customer service inquiries and handles returns. We provide a 7-day money-back guarantee as part of their refund policy from the moment of purchase. You can request money back if the service really doesn&apos;t satisfy you or you are faced with some service issues.
              </p>
              <p className="text-gray-600 mb-6">
                Please, email{' '}
                <a href="mailto:support@pingprospect.com" className="text-blue-600 hover:text-blue-700">
                  support@pingprospect.com
                </a>
                {' '}and send your order details. We care about our services and customers. We want to ensure that you are happy with your purchase and that our products work correctly in your website environment.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Transactional Emails</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect may on occasion send you email notifications related to your service. These transactional emails may include notification of changes to our terms and conditions, license expiration notices, and other transactional emails related to your purchase.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Price Changes</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect reserves the right to change the price of any service at any time. Any price change will be reflected on infwiz.com. If any price is lowered, you will not be entitled to a refund for the difference in the price from the time you purchased the service.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Sharing of Data</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect will never share your data with any third parties under any circumstances.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Data Privacy</h2>
              <p className="text-gray-600">
                Please refer to our{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>
                {' '}page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}