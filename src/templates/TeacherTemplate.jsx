import React from 'react';
import { Mail, Phone, MapPin, Globe, User, Briefcase, GraduationCap, Award } from 'lucide-react';

const TeacherTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white p-8 shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Header with professional styling */}
      <div className="mb-6 pb-6 border-b-4 border-green-600">
        <div className="flex items-center gap-6">
          {photo && (
            <img src={photo} alt="Profile" className="w-32 h-32 rounded-lg object-cover border-4 border-green-600" />
          )}
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-1">{personalInfo.fullName || 'Your Name'}</h1>
            <p className="text-2xl text-gray-700 mb-3">{personalInfo.jobTitle || 'Educator'}</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              {personalInfo.email && <span className="flex items-center gap-1"><Mail size={14}/> {personalInfo.email}</span>}
              {personalInfo.phone && <span className="flex items-center gap-1"><Phone size={14}/> {personalInfo.phone}</span>}
              {personalInfo.location && <span className="flex items-center gap-1"><MapPin size={14}/> {personalInfo.location}</span>}
              {personalInfo.website && <span className="flex items-center gap-1"><Globe size={14}/> {personalInfo.website}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-2">
            <User size={24} />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed pl-8">{data.summary}</p>
        </div>
      )}

      {/* Teaching Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-2">
            <Briefcase size={24} />
            Teaching Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4 pl-8 border-l-4 border-green-200">
              <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
              <p className="text-green-700 font-semibold">{exp.company}</p>
              <p className="text-gray-600 text-sm mb-2">{exp.startDate} - {exp.endDate}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education & Qualifications */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-2">
            <GraduationCap size={24} />
            Education & Qualifications
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3 pl-8">
              <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-green-700">{edu.institution}</p>
              <p className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills & Expertise */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-2 pl-8">
            {data.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3 flex items-center gap-2">
            <Award size={24} />
            Certifications & Training
          </h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2 pl-8">
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
          <h2 className="text-2xl font-bold text-green-800 mb-3">Languages</h2>
          <div className="grid grid-cols-2 gap-2 pl-8">
            {data.languages.map((lang, index) => (
              <div key={index}>
                <span className="font-semibold text-gray-800">{lang.name}</span>
                <span className="text-gray-600 text-sm ml-2">- {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-3 pl-8">
              <h3 className="font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherTemplate;
