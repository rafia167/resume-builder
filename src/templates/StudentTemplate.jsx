import React from 'react';

const StudentTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white p-8 shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      <div className="border-4 border-blue-500 rounded-2xl p-8 h-full">
        {/* Header */}
        <div className="text-center mb-8">
          {photo && (
            <img src={photo} alt="Profile" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500" />
          )}
          <h1 className="text-4xl font-bold text-blue-700 mb-2">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-xl text-gray-700 mb-3">{personalInfo.jobTitle || 'Student'}</p>
          <div className="flex justify-center gap-3 text-sm text-gray-600 flex-wrap">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>• {personalInfo.phone}</span>}
            {personalInfo.location && <span>• {personalInfo.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Objective</h2>
            <p className="text-gray-700">{data.summary}</p>
          </div>
        )}

        {/* Education - Primary focus for students */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-500">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600 font-semibold">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects - Important for students */}
        {data.projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-500">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-bold text-gray-800">{project.name}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-500">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience (if any) */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-500">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-bold text-gray-800">{exp.position}</h3>
                <p className="text-blue-600">{exp.company}</p>
                <p className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate}</p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b-2 border-blue-500">Certifications</h2>
            {data.certifications.map((cert, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentTemplate;
