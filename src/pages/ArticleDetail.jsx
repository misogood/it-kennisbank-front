import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Tag, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// We ontvangen hier het specifieke ID én de 'terug' functie!
export default function ArticleDetail({ articleId, onBack }) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // We plakken het specifieke ID nu achter de URL
    fetch(`http://localhost:5000/api/articles/${articleId}`)
      .then(response => {
        if (!response.ok) throw new Error("Artikel niet gevonden");
        return response.json();
      })
      .then(data => setArticle(data))
      .catch(err => {
        console.error("Oeps, foutje:", err);
        setError(true);
      });
  }, [articleId]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center">
        <p className="text-xl text-red-500 font-bold mb-4">Oeps, dit artikel bestaat niet (meer)!</p>
        <button onClick={onBack} className="text-blue-500 hover:underline">Ga terug</button>
      </div>
    );
  }

  if (!article) return <div className="min-h-screen flex items-center justify-center animate-pulse text-gray-500">Loading...</div>;

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-gray-900 pb-20">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" /> IT Knowledge Base
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 w-full pt-8">
        
        {/* De Terugknop doet nu écht iets! */}
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition mb-6 font-medium text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <span className={`${article.color || 'bg-blue-500'} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
          {article.category}
        </span>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-4">{article.title}</h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            {article.tags && article.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800" {...props} />,
              p: ({node, ...props}) => <p className="mb-5 leading-relaxed text-gray-700 text-lg" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700 text-lg" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
              img: ({node, ...props}) => <img className="rounded-xl shadow-md max-w-full h-auto my-8 border border-gray-100" {...props} />
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}