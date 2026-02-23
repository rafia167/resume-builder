import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import modernImg from '../assets/templates/modern.png';
import minimalImg from '../assets/templates/minimal.png';
import professionalImg from '../assets/templates/professional.png';
import creativeImg from '../assets/templates/creative.png';
import studentImg from '../assets/templates/student.png';
import teacherImg from '../assets/templates/teacher.png';
import developerImg from '../assets/templates/developer.png';
import designerImg from '../assets/templates/designer.png';

const TemplatesPage = () => {
  const { t, setSelectedTemplate } = useResume();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const templates = [
    { id: 'modern', name: 'Modern', category: 'professional', image: modernImg, description: 'Gradient header with colorful design' },
    { id: 'minimal', name: 'Minimal', category: 'minimal', image: minimalImg, description: 'Clean and simple layout' },
    { id: 'professional', name: 'Professional', category: 'professional', image: professionalImg, description: 'Two-column sidebar design' },
    { id: 'creative', name: 'Creative', category: 'creative', image: creativeImg, description: 'Artistic and colorful' },
    { id: 'student', name: 'Student', category: 'professional', image: studentImg, description: 'Perfect for students' },
    { id: 'teacher', name: 'Teacher', category: 'professional', image: teacherImg, description: 'Ideal for educators' },
    { id: 'developer', name: 'Developer', category: 'creative', image: developerImg, description: 'Terminal style for developers' },
    { id: 'designer', name: 'Designer', category: 'creative', image: designerImg, description: 'Portfolio focused' },
  ];

  const filters = [
    { id: 'all', label: t.allTemplates || 'All Templates' },
    { id: 'professional', label: t.professionalTemplates || 'Professional' },
    { id: 'minimal', label: t.minimalTemplates || 'Minimal' },
    { id: 'creative', label: t.creativeTemplates || 'Creative' },
  ];

  const filteredTemplates = filter === 'all' ? templates : templates.filter(tp => tp.category === filter);

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div style={{ backgroundColor: '#1665CD' }} className="py-10 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Select Your Resume Template
            </h1>
          </div>
          <p className="text-blue-100 text-base sm:text-lg mt-2">
            Choose from professional designs crafted for success
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-7 text-center">
          Templates
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all transform hover:scale-105 active:scale-95
                ${filter === f.id
                  ? 'text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                }`}
              style={filter === f.id ? { backgroundColor: '#1665CD' } : {}}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 animate-fadeIn">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer flex flex-col overflow-hidden border-2 border-transparent hover:border-[#1665CD]"
            >
              <div className="h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-100 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1 text-center">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {template.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2 mb-3 sm:mb-4 line-clamp-2">
                    {template.description}
                  </p>
                </div>
                <button
                  className="mt-auto w-full px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: '#1665CD' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1254b0'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1665CD'}
                >
                  {t.useTemplate || 'Use Template'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TemplatesPage;
