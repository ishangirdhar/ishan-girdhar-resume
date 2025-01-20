import resumeData from '../data/resume.json';
import { EducationItem } from '../types/resume';

export function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Education
      </h2>
      <div className="space-y-3">
        {resumeData.education.map((edu: EducationItem, index: number) => (
          <div key={index}>
            <h3 className="font-bold font-display">{edu.degree}</h3>
            <p className="text-gray-700 mt-0.5">{edu.university}</p>
            <p className="text-gray-600 text-sm mt-0.5">
              {edu.period}, {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 