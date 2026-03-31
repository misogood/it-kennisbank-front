import React, { useState, useEffect } from 'react';
import { BookOpen, LogOut, Globe, Tag, Calendar, Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function AdminDashboard({ onReadArticle, onEditArticle }) {
  const [articles, setArticles] = useState([]);
  const [articleToDelete, setArticleToDelete] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error("Foutje:", error));
  }, []);

  const confirmDelete = async () => {
    if (!articleToDelete) return;
    try {
      await fetch(`http://localhost:5000/api/articles/${articleToDelete.id}`, { method: 'DELETE' });
      setArticles(articles.filter(a => a.id !== articleToDelete.id));
      setArticleToDelete(null);
    } catch (error) { console.error("Fout:", error); }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-12">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" /> Admin Dashboard
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden relative">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold text-gray-900">Manage Articles</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <th className="px-6 py-4 font-semibold">Title</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Last Updated</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition group bg-white">
                    <td className="px-6 py-4">
                      <p onClick={() => onReadArticle(article.id)} className="font-bold text-gray-900 text-sm cursor-pointer hover:text-blue-600 transition">
                        {article.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{article.desc}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${article.color || 'bg-blue-500'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{article.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        <button onClick={() => onReadArticle(article.id)} className="flex items-center gap-1.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium transition">
                          <Eye className="w-3.5 h-3.5" /> Read
                        </button>

                        {/* DE NIEUWE KLIKBARE EDIT KNOP! */}
                        <button onClick={() => onEditArticle(article.id)} className="flex items-center gap-1.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium transition">
                          <Edit className="w-3.5 h-3.5" /> Edit
                        </button>

                        <button onClick={() => setArticleToDelete(article)} className="flex items-center gap-1.5 border border-red-200 text-red-600 bg-white hover:bg-red-50 px-3 py-1.5 rounded-md text-xs font-medium transition">
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      {/* ... (Delete modal code, same as before) ... */}
    </div>
  );
}