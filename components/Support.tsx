
import { Mail } from 'lucide-react';
import Link from "next/link"

export default function Support() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Still have questions?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Reach Out to Us via Mail Anytime!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <Mail className="mr-2 h-5 w-5" />
          Contact Us
        </Link>
      </div>
    </section>
  );
}