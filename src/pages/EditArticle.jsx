import React, { useState, useEffect } from 'react';
import { BookOpen, Save, FileText, Tag, Layout, ArrowLeft } from 'lucide-react';

export default function EditArticle({ articleId, onBack }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Troubleshooting');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Zodra het scherm opent, halen we de HUIDIGE data van het artikel op
  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${articleId}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setCategory(data.category);
        setTags(data.tags ? data.tags.join(', ') : ''); // Zet de array weer om in een komma-lijstje
        setContent(data.content);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Fout bij ophalen:", error);
        setIsLoading(false);
      });
  }, [articleId]);

  // Als je op Opslaan klikt, sturen we een PUT verzoek!
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const updatedArticleData = {
      title,
      category,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '') 
    };

    try {
      const response = await fetch(`http://localhost:5000/api/articles/${articleId}`, {
        method: 'PUT', // Let op: PUT betekent updaten!
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedArticleData)
      });

      if (response.ok) {
        alert('✅ Artikel succesvol bewerkt!');
        onBack(); // Stuur de gebruiker direct terug naar het dashboard
      } else {
        alert('Oeps, er ging iets mis op de server.');
      }
    } catch (error) {
      console.error("Fout bij updaten:", error);
      alert('Kan de server niet bereiken.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center animate-pulse">Loading article data...</div>;

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-12">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" /> Edit Article
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 w-full pt-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition mb-6 font-medium text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <FileText className="w-4 h-4 text-gray-400" /> Article Title
              </label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Layout className="w-4 h-4 text-gray-400" /> Category
                </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm">
                  <option value="Troubleshooting">Troubleshooting</option>
                  <option value="Network & Connectivity">Network & Connectivity</option>
                  <option value="Hardware">Hardware</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Tag className="w-4 h-4 text-gray-400" /> Tags (comma separated)
                </label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <BookOpen className="w-4 h-4 text-gray-400" /> Article Content
              </label>
              <textarea required value={content} onChange={(e) => setContent(e.target.value)} className="w-full h-64 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-mono"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-end">
              <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}