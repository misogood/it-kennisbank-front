import React from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  Clock, 
  Tag, 
  Printer, 
  Home
} from 'lucide-react';

export default function ArticleDetail() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Navigatiebalk */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900 cursor-pointer">
          <BookOpen className="text-blue-600 w-6 h-6" />
          IT Knowledge Base
        </div>
        
        <div className="hidden md:block w-1/3 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-gray-100 border border-transparent rounded-lg pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
          Browse All
        </button>
      </nav>

      {/* 2. Main Content Area */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
        
        {/* Breadcrumbs (Kruimelpad) */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-gray-900 flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-gray-900">Network & Connectivity</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">VPN Setup Guide</span>
        </nav>

        {/* 3. Het Artikel Zelf (De witte kaart) */}
        <article className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm mb-8">
          
          {/* Artikel Header */}
          <div className="mb-8 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">VPN Setup Guide</h1>
            <p className="text-lg text-gray-600 mb-6">Step-by-step instructions for connecting to the company VPN</p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Last updated March 5, 2026
                </span>
                
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium text-xs">vpn</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium text-xs">remote</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium text-xs">security</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>

          {/* Artikel Inhoud */}
          <div className="text-gray-800 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
              <p>This guide will help you set up and connect to the company VPN for secure remote access.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 mt-8">Prerequisites</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Company-issued laptop or approved personal device</li>
                <li>VPN credentials (available from IT Help Desk)</li>
                <li>Stable internet connection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">Installation Steps</h2>
              
              <h3 className="font-bold text-lg text-gray-900 mb-2">Windows</h3>
              <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-700">
                <li>Download the VPN client from the IT portal</li>
                <li>Run the installer as administrator</li>
                <li>Enter your employee ID when prompted</li>
                <li>Follow the on-screen installation steps</li>
              </ol>

              <h3 className="font-bold text-lg text-gray-900 mb-2">macOS</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Download the VPN client from the IT portal</li>
                <li>Open the .dmg file and drag the application to Applications folder</li>
                <li>Launch the application and grant necessary permissions</li>
                <li>Enter your employee ID when prompted</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 mt-8">Connecting to VPN</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Open the VPN application</li>
                <li>Enter your username (usually your email address)</li>
                <li>Enter your password</li>
                <li>Complete the 2FA challenge on your mobile device</li>
                <li>Click "Connect"</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">Troubleshooting</h2>
              
              <h3 className="font-bold text-gray-900 mb-2">Cannot connect</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                <li>Verify your internet connection is working</li>
                <li>Check that your credentials are correct</li>
                <li>Ensure 2FA is set up on your mobile device</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Slow connection</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Try connecting to a different VPN server</li>
                <li>Close unnecessary applications</li>
                <li>Contact IT if speeds remain slow</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 mt-8">Support</h2>
              <p className="text-gray-700">For additional help, contact IT Help Desk at ext. 1234 or helpdesk@company.com</p>
            </section>
          </div>
        </article>

        {/* 4. Support Block onderaan */}
        <div className="bg-[#F4F8FF] border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Need more help?</h3>
          <p className="text-gray-600 mb-6">
            Contact IT Help Desk at <span className="font-semibold text-gray-900">ext. 1234</span> or <a href="mailto:helpdesk@company.com" className="text-blue-600 hover:underline">helpdesk@company.com</a>
          </p>
          <button className="bg-white border border-gray-300 text-gray-700 font-medium px-6 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm text-sm">
            View all Network & Connectivity articles
          </button>
        </div>

      </main>
    </div>
  );
}