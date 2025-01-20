import { WorkExperienceItem } from '../types/resume';

export function WorkExperience({
  company,
  title,
  period,
  location,
  description,
  achievements,
  contact
}: WorkExperienceItem) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-bold font-display tracking-tight">{company}</h3>
        <span className="text-gray-600 font-medium">{period}</span>
      </div>
      <div className="flex justify-between items-baseline mt-1">
        <h4 className="text-lg text-gray-700 font-display">{title}</h4>
        <span className="text-gray-600">{location}</span>
      </div>
      {description && (
        <p className="text-gray-600 italic mt-1.5 font-serif leading-relaxed">{description}</p>
      )}
      <div className="mt-3">
        <h5 className="font-semibold font-display">Achievements/Tasks</h5>
        <ul className="list-disc ml-5 mt-1.5 space-y-1.5 leading-relaxed">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {contact && (
        <div className="mt-3">
          <p className="text-gray-700">
            <span className="font-semibold font-display">Contact:</span> {contact}
          </p>
        </div>
      )}
    </div>
  );
} 