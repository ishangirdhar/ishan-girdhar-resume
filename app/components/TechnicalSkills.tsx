import resumeData from '../data/resume.json';
import { TechnicalSkillItem } from '../types/resume';

export function TechnicalSkills() {
  return (
    <section>
      <h2 className="mb-4 rounded-lg bg-gray-900 px-4 py-2 font-display text-2xl font-bold uppercase tracking-wide text-white shadow-md">
        Technical Skills
      </h2>
      <div className="space-y-3">
        {resumeData.technicalSkills.map((skill: TechnicalSkillItem, index: number) => (
          <div key={index}>
            <h3 className="font-display font-bold">{skill.title}</h3>
            <p className="mt-1 leading-relaxed text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
