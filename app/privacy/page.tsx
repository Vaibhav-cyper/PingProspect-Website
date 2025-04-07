import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-center text-gray-600 mb-8">Last Updated Sep 28, 2024</p>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                This Privacy Policy describes how Ping Prospect and its affiliates ("PingProspect" "we", "our" or "us") collect, use, and share information in connection with your use of our websites and desktop applications (collectively, the "Services"). This Privacy Policy (the "Privacy Policy") does not apply to information our customers may process when using our Services.
              </p>

              <p className="text-gray-600 mb-6">
                We may collect and receive information about users of our Services ("users," "you," or "your") from various sources, including: (i) information you provide through your user account on the Services (your "Account") if you register for the Services; (ii) your use of the Services; and (iii) from third-party websites, services, and partners.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. INFORMATION WE COLLECT</h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Information You Provide</h3>
              <p className="text-gray-600 mb-4">
                Account Registration. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address. If you choose to refer a friend to our Services, we may also collect your friend's email address so that we may send them a referral or promotional code to sign up for our Services.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Information</h3>
              <p className="text-gray-600 mb-4">
                When you add your financial account information to your Account, that information is directed to our third-party payment processor. We do not store your financial account information on our systems; however, we have access to and may retain subscriber information through our third-party payment processor.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communications</h3>
              <p className="text-gray-600 mb-6">
                If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. We may also receive a confirmation when you open an email from us.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. HOW WE USE INFORMATION</h2>
              <p className="text-gray-600 mb-4">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide, operate, and maintain our Services</li>
                <li>Improve, personalize, and expand our Services</li>
                <li>Understand and analyze how you use our Services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, or marketing purposes</li>
                <li>Process your transactions</li>
                <li>Find and prevent fraud</li>
                <li>For compliance purposes, including enforcing our Terms of Service</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. HOW WE SHARE INFORMATION</h2>
              <p className="text-gray-600 mb-4">We may share the information we collect in various ways, including the following:</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendors and Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We only share some short information with third-party vendors such as for login, for promotional and/or marketing purposes, and to provide you with information relevant to you such as product announcements, software updates, special offers, or other information.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 mb-4">
                We use analytics providers such as Google Analytics to see the necessary details for our desktop applications.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. LEGAL BASIS FOR PROCESSING PERSONAL INFORMATION</h2>
              <p className="text-gray-600 mb-6">
                Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. SECURITY</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect is committed to protecting your information. To do so, we employ a variety of security technologies and measures designed to protect information from unauthorized access, use, or disclosure.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. DATA RETENTION</h2>
              <p className="text-gray-600 mb-6">
                We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements).
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. ACCESS</h2>
              <p className="text-gray-600 mb-6">
                If you are a registered user, you may access certain information associated with your Account by logging into our Services or emailing support@pingprospect.com.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. YOUR DATA PROTECTION RIGHTS UNDER GDPR</h2>
              <p className="text-gray-600 mb-4">If you are a resident of the EEA, you have the following data protection rights:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access, correct, update, or request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Data portability</li>
                <li>Withdraw your consent</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. YOUR CHOICES</h2>
              <p className="text-gray-600 mb-6">
                You can use some of the features of the Services without registering, thereby limiting the type of information that we collect.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. CHILDREN'S PRIVACY</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect does not knowingly collect information from children under the age of 13, and children under 13 are prohibited from using our Services.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-gray-600 mb-6">
                This Privacy Policy may be modified from time to time, so please review it frequently.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-gray-600 mb-6">
                Ping Prospect is a global business operating in India. We may transfer personal information to countries other than the country in which the data was originally collected.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@pingprospect.com" className="text-blue-600 hover:text-blue-700">
                  support@pingprospect.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}