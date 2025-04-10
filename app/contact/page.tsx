import { MessageSquare } from 'lucide-react';
import ContactForm from '../../components/ContactComponent/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Have a question? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-lg rounded-2xl">
            <ContactForm />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              For existing users, please use the support option in the app to submit your tickets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}