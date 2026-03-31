import React, { useState } from 'react';
import { BookOpen, Save, FileText, Tag, Layout } from 'lucide-react';

export default function NewArticle() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Troubleshooting');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Dit voorkomt dat de pagina ongewenst herlaadt
    setIsSubmitting(true);

    const newArticleData = {
      title: title,
      category: category,
      content: content,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '') 
    };

    try {
      // Stuur het naar de backend
      const response = await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticleData)
      });

      if (response.ok) {
        alert('🎉 Succes! Je artikel is opgeslagen in de database.\n\nKlik op OK en ga naar je Admin Dashboard (of Home) om hem te zien!');
        // Maak vakjes leeg
        setTitle('');
        setCategory('Troubleshooting');
        setTags('');
        setContent('');
      } else {
        alert('Oeps, de server gaf een foutmelding terug.');
      }
    } catch (error) {
      console.error("Er ging iets mis:", error);
      alert('Kan de server niet bereiken. Staat je backend aan op poort 5000?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-12">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" />
          Create New Article
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 w-full pt-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <FileText className="w-4 h-4 text-gray-400" /> Article Title
              </label>
              <input 
                type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
              />
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
              <button type="submit" disabled={isSubmitting} className="bg-[#0A0A0A] hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium">
                <Save className="w-4 h-4" /> Publish Article
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}