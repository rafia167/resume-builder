import React, { useState } from 'react';
import TemplateCard from './TemplateCard';

const TemplateGallery = ({ templates, onSelectTemplate }) => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Templates' },
    { id: 'professional', label: 'Professional' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'creative', label: 'Creative' },
  ];

  const filteredTemplates = filter === 'all'
    ? templates
    : templates.filter(t => t.category === filter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              filter === f.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
        {filteredTemplates.map(template => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={onSelectTemplate}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;
