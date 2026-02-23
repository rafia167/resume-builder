import React from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const DesignerTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white shadow-2xl overflow-hidden" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Creative asymmetric header */}
      <div className="relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-30 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-300 to-orange-300 rounded-full opacity-30 -ml-24 -mb-24"></div>
        
        <div className="relative p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {personalInfo.fullName || 'Your Name'}
              </h1>
              <p className="text-2xl text-gray-700 italic mb-4">{personalInfo.jobTitle || 'Creative Designer'}</p>
              
              <div className="space-y-1 text-sm text-gray-600">
                {personalInfo.email && <div className="flex items-center gap-2"><Mail size={14}/> {personalInfo.email}</div>}
                {personalInfo.phone && <div className="flex items-center gap-2"><Phone size={14}/> {personalInfo.phone}</div>}
                {personalInfo.website && <div className="flex items-center gap-2"><Globe size={14}/> {personalInfo.website}</div>}
                {personalInfo.location && <div className="flex items-center gap-2"><MapPin size={14}/> {personalInfo.location}</div>}
              </div>
            </div>
            
            {photo && (
              <div className="ml-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl transform rotate-6"></div>
                  <img src={photo} alt="Profile" className="relative w-40 h-40 rounded-2xl object-cover border-4 border-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Creative Summary */}
        {data.summary && (
          <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Creative Philosophy</h2>
            <p className="text-gray-700 leading-relaxed italic">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6 relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-pink-200 to-purple-200"></div>
                <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-purple-600 font-semibold">{exp.company}</p>
                  <span className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects - Important for designers */}
        {data.projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Portfolio Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              {data.projects.map((project, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-orange-400">
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => {
                const colors = [
                  'from-pink-400 to-purple-400',
                  'from-yellow-400 to-orange-400',
                  'from-green-400 to-blue-400',
                  'from-red-400 to-pink-400',
                ];
                const colorClass = colors[index % colors.length];
                return (
                  <span 
                    key={index} 
                    className={`px-4 py-2 bg-gradient-to-r ${colorClass} text-white rounded-full font-semibold shadow-lg`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                <div className="flex justify-between">
                  <p className="text-purple-600">{edu.institution}</p>
                  <span className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Certifications</h2>
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
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Languages</h2>
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
    </div>
  );
};

export default DesignerTemplate;
