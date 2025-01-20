import resumeData from '../data/resume.json';
import { TechnicalSkillItem } from '../types/resume';

export function TechnicalSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Technical Skills
      </h2>
      <div className="space-y-3">
        {resumeData.technicalSkills.map((skill: TechnicalSkillItem, index: number) => (
          <div key={index}>
            <h3 className="font-bold font-display">{skill.title}</h3>
            <p className="text-gray-700 leading-relaxed mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 