"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import TemplateModal from '@/components/custom/TemplateModal';
import TemplateCard from '@/components/custom/TemplateCard';
import { Template, TemplatesData } from '../../types/templateTypes';

// Remove the client-side document manipulation as it's causing hydration issues
// Instead, we'll handle this properly with suppressHydrationWarning attribute

function App() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/templates.json');
        if (!response.ok) {
          throw new Error('Failed to fetch templates');
        }
        const data: TemplatesData = await response.json();
        setTemplates(data.templates);
        setLoading(false);
      } catch (err) {
        setError('Failed to load templates. Please try again later.');
        setLoading(false);
        console.error('Error fetching templates:', err);
      }
    };

    fetchTemplates();
  }, []);

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectTemplate = (template: Template) => {
    console.log('Selected template:', template);
    // Here you would implement the logic to use the selected template
    setIsModalOpen(false);
    // Show a success message
    alert(`Template "${template.templateName}" selected successfully!`);
  };

  const filteredTemplates = templates.filter((template) =>
    template.templateName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Browse Templates</h2>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {loading ? (
          <div key="loading" className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div key="error" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        ) : (
          <div key="templates" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => handleTemplateClick(template)}
                />
              ))
            ) : (
              <div key="no-results" className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No templates found matching your search.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <TemplateModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectTemplate}
      />
    </div>
  );
}

export default App;