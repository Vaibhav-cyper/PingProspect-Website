"use client";
import { onAuthStateChanged } from "firebase/auth";
import {service} from "../../lib/services/Firebase"
import { useEffect, useState } from "react";

function SignIn() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(service.auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        
      } else {
        setIsLoggedIn(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    service.createUserAccount();
  };
  const handleLogout = () => {
    service.SiginOut();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Welcome to PingProspect
        </h2>

        {isLoggedIn ? (
          <button
          onClick={handleLogout}
          className="w-full rounded-lg bg-[#357AFF] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#2E69DE] focus:outline-none focus:ring-2 focus:ring-[#357AFF] focus:ring-offset-2 disabled:opacity-50"
        > 
           <span className="text-base">Signout</span>
        </button>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-[#357AFF] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#2E69DE] focus:outline-none focus:ring-2 focus:ring-[#357AFF] focus:ring-offset-2 disabled:opacity-50"
          > 
             <span> SignIn with Google</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SignIn;
