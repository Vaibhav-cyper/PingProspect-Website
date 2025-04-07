"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (isRedirecting && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isRedirecting && countdown === 0) {
      window.location.href = '/';
    }
  }, [countdown, isRedirecting]);

  const stopRedirect = () => {
    setIsRedirecting(false);
  };

  const restartRedirect = () => {
    setIsRedirecting(true);
    setCountdown(10);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
          <div className="animate-bounce mt-4 mb-8">
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={stopRedirect}
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            <Link 
              href="#"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </div>
          
          {isRedirecting ? (
            <div className="mt-8 text-sm text-gray-500">
              <p>Redirecting href home page in <span className="font-bold text-blue-600">{countdown}</span> seconds</p>
              <button 
                onClick={stopRedirect}
                className="mt-2 text-blue-600 hover:text-blue-800 underline"
              >
                Stop redirect
              </button>
            </div>
          ) : (
            <div className="mt-8 text-sm text-gray-500">
              <button 
                onClick={restartRedirect}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 underline"
              >
                <RefreshCw className="mr-1 h-4 w-4" />
                Restart redirect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
