import React from 'react';
import { BookOpen, Lock, ArrowLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center p-4 font-sans text-gray-900">
      
      {/* 1. Header & Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 font-bold text-2xl text-gray-900 mb-2">
          <BookOpen className="text-blue-600 w-7 h-7" />
          IT Knowledge Base
        </div>
        <p className="text-gray-500 text-lg">Admin Login</p>
      </div>

      {/* 2. Login Kaart */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">
        
        <h1 className="text-2xl font-bold flex items-center gap-3 mb-8">
          <Lock className="w-6 h-6 text-gray-700" />
          Sign In
        </h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
              Username
            </label>
            <input 
              type="text" 
              id="username"
              placeholder="Enter username" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              placeholder="Enter password" 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Submit Knop */}
          <button 
            type="submit" 
            className="w-full bg-[#0A0A0A] hover:bg-gray-800 text-white font-medium rounded-lg py-3 mt-2 transition"
          >
            Sign In
          </button>
        </form>

        {/* 3. Demo Credentials Box */}
        <div className="mt-8 bg-[#F4F8FF] border border-blue-100 rounded-lg p-4 text-sm">
          <h3 className="font-bold text-blue-900 mb-1">Demo Credentials:</h3>
          <div className="text-blue-800 space-y-1">
            <p>
              Username: <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">admin</span>
            </p>
            <p>
              Password: <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">admin123</span>
            </p>
          </div>
        </div>

      </div>

      {/* 4. Terug naar home link */}
      <a href="#" className="mt-8 flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm transition">
        <ArrowLeft className="w-4 h-4" />
        Back to Knowledge Base
      </a>

    </div>
  );
}