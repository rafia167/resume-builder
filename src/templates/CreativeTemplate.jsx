import React from 'react';
import { Mail, Phone, Briefcase, GraduationCap, Code, Award, Globe } from 'lucide-react';

const CreativeTemplate = ({ data, photo }) => {
  const { personalInfo } = data;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-8 shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Header */}
      <div className="relative mb-8">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full opacity-20 -z-10"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-pink-300 rounded-full opacity-20 -z-10"></div>
        
        <div className="flex items-center gap-6">
          {photo && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-md"></div>
              <img src={photo} alt="Profile" className="relative w-32 h-32 rounded-full object-cover border-4 border-white" />
            </div>
          )}
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <p className="text-2xl text-gray-700">{personalInfo.jobTitle || 'Your Job Title'}</p>
            <div className="flex gap-3 mt-3 text-sm text-gray-600">
              {personalInfo.email && <span className="flex items-center gap-1"><Mail size={14}/> {personalInfo.email}</span>}
              {personalInfo.phone && <span className="flex items-center gap-1"><Phone size={14}/> {personalInfo.phone}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed pl-4">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase className="text-purple-600" size={24} />
            Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6 pl-8 border-l-2 border-purple-200">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-purple-700">{exp.position}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600 font-semibold">{exp.company}</p>
                  <span className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="text-pink-600" size={24} />
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 pl-8 border-l-2 border-pink-200">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold text-pink-700">{edu.degree}</h3>
                <div className="flex justify-between">
                  <p className="text-gray-600">{edu.institution}</p>
                  <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Code className="text-yellow-600" size={24} />
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Globe size={24} className="text-blue-600" />
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-400">
                <h3 className="font-bold text-gray-800 text-lg">{project.name}</h3>
                {project.description && <p className="text-gray-700 text-sm">{project.description}</p>}
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award size={24} className="text-yellow-500" />
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2 bg-white rounded-lg p-3 shadow-sm">
              <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Languages</h2>
          <div className="grid grid-cols-2 gap-3">
            {data.languages.map((lang, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
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

export default CreativeTemplate;
