
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Zap, CheckCircle } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const HeroSection = () => {
  const { t } = useResume();
  const navigate = useNavigate();

  const scrollToForm = () => {
    const formElement = document.getElementById('resume-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Quick Resume<br />
              Creation Using<br />
              <span className="text-[#F39F0E]">Smart Tools</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Empower yourself to create intelligent, fast, and scalable resumes using cutting-edge tools designed for modern web development.
            </p>

            {/* Features with hover */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1665CD]/10 rounded-full
                            hover:bg-[#1665CD]/20 hover:scale-105 transition-all cursor-default">
                <Zap className="w-4 h-4 text-[#F39F0E]" />
                <span className="text-sm font-medium text-gray-700">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1665CD]/10 rounded-full
                            hover:bg-[#1665CD]/20 hover:scale-105 transition-all cursor-default">
                <CheckCircle className="w-4 h-4 text-[#F39F0E]" />
                <span className="text-sm font-medium text-gray-700">Professional</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1665CD]/10 rounded-full
                            hover:bg-[#1665CD]/20 hover:scale-105 transition-all cursor-default">
                <FileText className="w-4 h-4 text-[#F39F0E]" />
                <span className="text-sm font-medium text-gray-700">Automated Writing</span>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="px-7 py-3 bg-[#1665CD] text-white font-bold text-base rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/templates')}
                className="px-7 py-3 bg-white text-gray-800 font-semibold text-base rounded-lg border-2 border-gray-200 hover:border-[#1665CD] hover:text-[#1665CD] transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Play Demo
              </button>
            </div>
          </div>

          {/* Right: Cards with hover effects */}
          <div className="hidden lg:block space-y-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-lg 
                          hover:shadow-xl hover:scale-105 hover:border-[#1665CD]/30 
                          transition-all duration-300 cursor-default">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1665CD] rounded-lg flex items-center justify-center flex-shrink-0
                              hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Create Your Perfect Resume</h3>
                  <p className="text-sm text-gray-600">in Minutes with Smart Tools</p>
                  <button 
                    onClick={scrollToForm}
                    className="mt-3 px-4 py-2 bg-[#F39F0E] text-white rounded-lg text-sm font-medium 
                              hover:bg-[#F39F0E]/90 transition-all hover:scale-105 active:scale-95"
                  >
                    Start for Free
                  </button>
                </div>
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-lg 
                          hover:shadow-xl hover:scale-105 hover:border-[#1665CD]/30 
                          transition-all duration-300 ml-8 cursor-default">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">My Documents</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Resume Jordan Blake</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Progress</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[100px]">
                      <div className="h-full bg-[#F39F0E] w-4/5 transition-all duration-500"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-700">80% Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-4 border-2 border-gray-100 shadow-lg 
                          hover:shadow-xl hover:scale-105 hover:border-[#1665CD]/30 
                          transition-all duration-300 flex items-center justify-between cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1665CD]/10 rounded-lg flex items-center justify-center
                              hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-[#1665CD]" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Smart Tool-Powered</span>
              </div>
              <button 
                onClick={() => navigate('/templates')}
                className="px-4 py-2 bg-[#1665CD] text-white rounded-lg text-sm font-medium 
                          hover:bg-[#1665CD]/90 transition-all hover:scale-105 active:scale-95"
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-200"></div>
    </div>
  );
};

export default HeroSection;