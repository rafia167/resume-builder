import React, { useState } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useResume } from '../../context/ResumeContext';

const DownloadButton = () => {
  const { t } = useResume();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Pehle hidden capture div dhundho (HomePage ka)
      // Agar nahi mila to PreviewPage wala use karo
      let templateEl = null;

      const allPreviews = document.querySelectorAll('.resume-preview-content');

      // Hidden capture div prefer karo (left: -9999px wala)
      allPreviews.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.position === 'absolute' && style.visibility === 'hidden') {
          templateEl = el.firstElementChild || el;
        }
      });

      // Agar hidden nahi mila (PreviewPage pe hain) to wahan se lo
      if (!templateEl) {
        const previewContent = document.querySelector('.resume-preview-content');
        if (previewContent) {
          // Remove scaler transform temporarily
          const scaler = previewContent.closest('[style*="fit-content"]');
          if (scaler) {
            const savedTransform = scaler.style.transform;
            const savedHeight = scaler.parentElement?.style.height;
            scaler.style.transform = 'scale(1)';
            if (scaler.parentElement) scaler.parentElement.style.height = 'auto';
            await new Promise(r => setTimeout(r, 300));
            templateEl = previewContent.firstElementChild || previewContent;

            const canvas = await captureCanvas(templateEl);
            scaler.style.transform = savedTransform;
            if (scaler.parentElement) scaler.parentElement.style.height = savedHeight;
            generatePDF(canvas);
            setIsDownloading(false);
            return;
          }
          templateEl = previewContent.firstElementChild || previewContent;
        }
      }

      if (!templateEl) {
        alert('Resume content not found. Please try again.');
        setIsDownloading(false);
        return;
      }

      // Make hidden element temporarily visible for capture
      const parent = templateEl.closest('.resume-preview-content') || templateEl.parentElement;
      const savedVisibility = parent.style.visibility;
      parent.style.visibility = 'visible';
      await new Promise(r => setTimeout(r, 200));

      const canvas = await captureCanvas(templateEl);
      parent.style.visibility = savedVisibility;

      generatePDF(canvas);
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const captureCanvas = (el) => {
    return html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
      width: el.scrollWidth,
      height: el.scrollHeight,
      windowWidth: el.scrollWidth,
      windowHeight: el.scrollHeight,
    });
  };

  const generatePDF = (canvas) => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidthMm = 210;
    const pageHeightMm = 297;

    const imgWidthMm = pageWidthMm;
    const imgHeightMm = (canvas.height * imgWidthMm) / canvas.width;

    if (imgHeightMm <= pageHeightMm) {
      // Single page — direct fit
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.98),
        'JPEG',
        0, 0,
        imgWidthMm,
        imgHeightMm
      );
    } else {
      // Thoda lamba — ek page pe shrink kar do, kuch cut na ho
      const scale = pageHeightMm / imgHeightMm;
      const scaledWidth = imgWidthMm * scale;
      const xOffset = (pageWidthMm - scaledWidth) / 2;

      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.98),
        'JPEG',
        xOffset, 0,
        scaledWidth,
        pageHeightMm
      );
    }

    pdf.save('resume.pdf');
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg text-white font-bold rounded-lg disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: '#F39F0E' }}
      onMouseEnter={e => { if (!isDownloading) e.currentTarget.style.backgroundColor = '#e08d00'; }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F39F0E'; }}
    >
      {isDownloading ? (
        <>
          <svg
            className="animate-spin w-5 h-5 text-white flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <span>Generating PDF...</span>
        </>
      ) : (
        <>
          <Download size={20} />
          <span>{t.downloadResume || 'Download Resume'}</span>
        </>
      )}
    </button>
  );
};

export default DownloadButton;