import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import DownloadButton from '../components/Shared/DownloadButton';
import { TEMPLATE_MAP } from '../templates';

const PreviewPage = () => {
  const { resumeData, sectionsEnabled, photo, t, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const scalerRef = useRef(null);
  const outerRef = useRef(null);

  const filteredData = {
    ...resumeData,
    education: sectionsEnabled.education ? resumeData.education : [],
    experience: sectionsEnabled.experience ? resumeData.experience : [],
    skills: sectionsEnabled.skills ? resumeData.skills : [],
    projects: sectionsEnabled.projects ? resumeData.projects : [],
    languages: sectionsEnabled.languages ? resumeData.languages : [],
  };

  const SelectedTemplate = TEMPLATE_MAP[selectedTemplate] || TEMPLATE_MAP.modern;

  useEffect(() => {
    const scaleResume = () => {
      const scaler = scalerRef.current;
      const outer = outerRef.current;
      if (!scaler || !outer) return;

      const containerWidth = outer.clientWidth;
      const resumeWidth = scaler.scrollWidth;

      if (resumeWidth > containerWidth) {
        const scale = containerWidth / resumeWidth;
        scaler.style.transform = `scale(${scale})`;
        scaler.style.transformOrigin = 'top left';
        outer.style.height = `${scaler.scrollHeight * scale}px`;
      } else {
        scaler.style.transform = 'scale(1)';
        outer.style.height = 'auto';
      }
    };

    scaleResume();
    window.addEventListener('resize', scaleResume);
    return () => window.removeEventListener('resize', scaleResume);
  }, [filteredData, selectedTemplate, photo]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {t.preview || 'Preview'}
          </h1> 
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-white rounded-lg font-semibold transition-colors bg-[#F39F0E] hover:bg-[#e08c00]"
          >
            {t.backToEdit || 'Back to Edit'}
          </button>
        </div>

        <div
          ref={outerRef}
          className="w-full overflow-hidden bg-white shadow-xl rounded-xl mb-6"
        >
          <div ref={scalerRef} style={{ width: 'fit-content' }}>
            <div className="resume-preview-content">
              <SelectedTemplate data={filteredData} photo={photo} />
            </div>
          </div>
        </div>

        <DownloadButton />
      </div>

      <Footer />
    </div>
  );
};

export default PreviewPage;