import React from 'react';
import { FileText } from 'lucide-react';

const TemplateCard = ({ template, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(template.id)}
      className="template-card group"
    >
      {/* Template Preview Image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
        {template.preview ? (
          <img 
            src={template.preview} 
            alt={template.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <FileText size={64} className="text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-semibold text-gray-700">{template.name}</p>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{template.description}</p>
        
        {template.category && (
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
            {template.category}
          </span>
        )}
        
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Use Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
