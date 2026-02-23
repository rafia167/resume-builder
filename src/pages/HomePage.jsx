import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ResumeForm from '../components/Home/ResumeForm';
import DownloadButton from '../components/Shared/DownloadButton';
import PhotoUpload from '../components/Home/PhotoUpload';
import { TEMPLATE_MAP } from '../templates';
import { Eye } from "lucide-react";
import HeroSection from '../components/Home/Hero';

// Mobile/Tablet preview ko screen width ke hisaab se scale karta hai
const PreviewScaler = ({ children }) => {
  const outerRef = React.useRef(null);
  const scalerRef = React.useRef(null);

  React.useEffect(() => {
    const scale = () => {
      const outer = outerRef.current;
      const scaler = scalerRef.current;
      if (!outer || !scaler) return;
      const containerWidth = outer.clientWidth;
      const resumeWidth = scaler.scrollWidth;
      if (resumeWidth > containerWidth) {
        const ratio = containerWidth / resumeWidth;
        scaler.style.transform = `scale(${ratio})`;
        scaler.style.transformOrigin = 'top left';
        outer.style.height = `${scaler.scrollHeight * ratio}px`;
      } else {
        scaler.style.transform = 'scale(1)';
        outer.style.height = 'auto';
      }
    };

    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, [children]);

  return (
    <div ref={outerRef} className="w-full overflow-hidden bg-white rounded-lg">
      <div ref={scalerRef} style={{ width: 'fit-content' }}>
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  const { resumeData, sectionsEnabled, photo, t, selectedTemplate } = useResume();
  const navigate = useNavigate();

  const filteredData = {
    ...resumeData,
    education: sectionsEnabled.education ? resumeData.education : [],
    experience: sectionsEnabled.experience ? resumeData.experience : [],
    skills: sectionsEnabled.skills ? resumeData.skills : [],
    projects: sectionsEnabled.projects ? resumeData.projects : [],
    certifications: sectionsEnabled.certifications ? resumeData.certifications : [],
    languages: sectionsEnabled.languages ? resumeData.languages : [],
  };

  const SelectedTemplate = TEMPLATE_MAP[selectedTemplate] || TEMPLATE_MAP.modern;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <HeroSection />

      <div id="resume-form" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

          {/* Left Column - Form */}
          <div className="space-y-3 sm:space-y-4 md:space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                {t.title}
              </h2>
              <button
                onClick={() => navigate('/templates')}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
                           bg-[#F39F0E] text-white text-sm sm:text-base rounded-lg 
                          hover:bg-[#e08c00] transition-all transform hover:scale-105
                          shadow-md hover:shadow-lg"
              >
                {t.chooseTemplate}
              </button>
            </div>

            <PhotoUpload />
            <ResumeForm />
            <DownloadButton />
          </div>

          {/* Right Column - Desktop/Laptop Live Preview (lg aur upar) */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <h3 className="text-lg xl:text-xl font-bold text-gray-800 mb-3 lg:mb-4">
              {t.preview}
            </h3>
            {/* Desktop pe bhi scale hoga agar screen chhoti ho */}
            <div className="bg-gray-100 rounded-xl p-3 lg:p-4 xl:p-5 shadow-lg overflow-hidden">
              <PreviewScaler>
                <SelectedTemplate data={filteredData} photo={photo} />
              </PreviewScaler>
            </div>
          </div>

          {/* Mobile/Tablet: Collapsible preview (lg se neeche) */}
          <div className="lg:hidden mt-6 sm:mt-8">
            <details className="bg-white rounded-xl shadow-lg overflow-hidden">
              <summary className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600
                                text-white font-bold text-base sm:text-lg cursor-pointer
                                hover:from-blue-700 hover:to-purple-700 transition-all
                                flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Eye size={20} className="sm:w-6 sm:h-6" />
                  {t.preview || 'Preview Resume'}
                </span>
                <span className="text-sm sm:text-base">▼</span>
              </summary>
              <div className="p-3 sm:p-4 bg-gray-50">
                <PreviewScaler>
                  <SelectedTemplate data={filteredData} photo={photo} />
                </PreviewScaler>
              </div>
            </details>
          </div>

        </div>
      </div>

      {/* Hidden div — sirf download ke liye, screen pe nahi dikhta */}
      <div
        className="resume-preview-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: -1,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <SelectedTemplate data={filteredData} photo={photo} />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;