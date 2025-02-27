import  { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 pl-5">{question}</span>
        <span className='px-5'>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 " />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 " />
        )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600 px-5">{answer}</p>
        </div>
      )}
    </div>
  );
}