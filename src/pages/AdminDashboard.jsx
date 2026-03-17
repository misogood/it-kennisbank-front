import React, { useState } from 'react';
import { 
  BookOpen, 
  LogOut, 
  Globe, 
  Book, 
  Tag, 
  Calendar, 
  Plus, 
  Edit, 
  Trash2 
} from 'lucide-react';

export default function AdminDashboard() {
  // We maken de lijst met artikelen nu 'levend' met useState, 
  // zodat we ze visueel kunnen verwijderen uit de tabel.
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Common IT Issues and Solutions",
      desc: "Quick fixes for frequently encountered problems",
      category: "Troubleshooting",
      color: "bg-orange-500",
      date: "10/03/2026",
      tags: ["troubleshooting", "help", "support"]
    },
    {
      id: 2,
      title: "Password Requirements and Best Practices",
      desc: "Company password policy and security guidelines",
      category: "Security & Access",
      color: "bg-red-500",
      date: "09/03/2026",
      tags: ["password", "security", "policy"]
    },
    {
      id: 3,
      title: "Microsoft 365 Apps Guide",
      desc: "Using Word, Excel, PowerPoint, and other Office apps",
      category: "Software & Applications",
      color: "bg-green-500",
      date: "08/03/2026",
      tags: ["microsoft", "office", "guide"]
    },
    {
      id: 4,
      title: "Two-Factor Authentication Setup",
      desc: "Enable and manage 2FA for your company accounts",
      category: "Security & Access",
      color: "bg-red-500",
      date: "07/03/2026",
      tags: ["2fa", "mfa", "login", "auth"]
    },
    {
      id: 5,
      title: "Email Configuration Guide",
      desc: "Set up and configure your company email on all devices",
      category: "Email & Communication",
      color: "bg-indigo-500",
      date: "06/03/2026",
      tags: ["email", "outlook", "setup"]
    },
    {
      id: 6,
      title: "VPN Setup Guide",
      desc: "Step-by-step instructions for connecting to the company VPN",
      category: "Network & Connectivity",
      color: "bg-blue-500",
      date: "05/03/2026",
      tags: ["vpn", "remote", "network"]
    }
  ]);

  // Dit houdt bij of de pop-up open is, en zo ja, welk artikel we willen verwijderen
  const [articleToDelete, setArticleToDelete] = useState(null);

  // Deze functie wordt uitgevoerd als we in de pop-up op de zwarte 'Delete' knop klikken
  const confirmDelete = () => {
    // Filter het verwijderde artikel uit de lijst
    const updatedArticles = articles.filter(article => article.id !== articleToDelete.id);
    setArticles(updatedArticles);
    
    // Sluit de pop-up
    setArticleToDelete(null);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-12">
      
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" />
          Admin Dashboard
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            <Globe className="w-4 h-4" /> View Site
          </button>
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 w-full pt-8">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Total Articles</p>
              <h2 className="text-3xl font-bold text-gray-900">{articles.length}</h2>
            </div>
            <div className="text-blue-100 bg-blue-50 p-3 rounded-lg">
               <BookOpen className="w-8 h-8 text-blue-300" />
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Categories</p>
              <h2 className="text-3xl font-bold text-gray-900">6</h2>
            </div>
            <div className="text-green-100 bg-green-50 p-3 rounded-lg">
               <Tag className="w-8 h-8 text-green-300" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Last Updated</p>
              <h2 className="text-3xl font-bold text-gray-900">10/03/2026</h2>
            </div>
            <div className="text-purple-100 bg-purple-50 p-3 rounded-lg">
               <Calendar className="w-8 h-8 text-purple-300" />
            </div>
          </div>
        </div>

        {/* Hoofd Tabel Sectie */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden relative">
          
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold text-gray-900">Manage Articles</h2>
            <button className="bg-[#0A0A0A] hover:bg-gray-800 text-white flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
              <Plus className="w-4 h-4" /> Add New Article
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th className="px-6 py-4 font-semibold">Title</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Last Updated</th>
                  <th className="px-6 py-4 font-semibold">Tags</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition group bg-white">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900 text-sm">{article.title}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{article.desc}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${article.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {article.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {article.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="flex items-center gap-1.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium transition">
                          <Edit className="w-3.5 h-3.5" /> Edit
                        </button>
                        
                        {/* HIER openen we de pop-up en geven we het huidige artikel door */}
                        <button 
                          onClick={() => setArticleToDelete(article)}
                          className="flex items-center gap-1.5 border border-red-200 text-red-600 bg-white hover:bg-red-50 px-3 py-1.5 rounded-md text-xs font-medium transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Tekst voor als de tabel leeg is (alles is verwijderd) */}
            {articles.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                <p>No articles found. Try adding a new one!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- DE DELETE CONFIRMATION MODAL (POP-UP) --- */}
      {articleToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm transition-opacity">
          
          {/* De witte pop-up kaart */}
          <div className="bg-white rounded-2xl shadow-2xl max-w-[440px] w-full p-8 transform transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Are you absolutely sure?
            </h3>
            
            <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
              This action cannot be undone. This will permanently delete the article <span className="font-semibold text-gray-700">"{articleToDelete.title}"</span> from the database.
            </p>
            
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setArticleToDelete(null)}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#0A0A0A] rounded-lg hover:bg-gray-800 transition shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}