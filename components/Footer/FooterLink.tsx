import React from 'react';
import  Link  from 'next/link';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link
      href={to}
      className="text-gray-500 hover:text-gray-600 transition-colors"
    >
      {children}
    </Link>
  );
}