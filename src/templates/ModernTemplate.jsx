import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ModernTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white p-8 shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 -m-8 mb-6 rounded-b-3xl">
        <div className="flex items-center gap-6">
          {photo && (
            <img src={photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover" />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
            <p className="text-xl text-blue-100">{personalInfo.jobTitle || 'Your Job Title'}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                </div>
                <span className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Certifications</h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">Languages</h2>
          <div className="grid grid-cols-2 gap-2">
            {data.languages.map((lang, index) => (
              <div key={index}>
                <span className="font-semibold text-gray-800">{lang.name}</span>
                <span className="text-gray-600 text-sm ml-2">- {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
