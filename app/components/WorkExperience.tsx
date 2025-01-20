import { WorkExperienceItem } from '../types/resume';

export function WorkExperience({
  company,
  title,
  period,
  location,
  description,
  achievements,
  contact,
}: WorkExperienceItem) {
  return (
    <div className="mb-6 border-b border-gray-200 pb-6 last:mb-0 last:border-b-0 last:pb-0">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-xl font-bold tracking-tight">{company}</h3>
        <span className="font-medium text-gray-600">{period}</span>
      </div>
      <div className="mt-1 flex items-baseline justify-between">
        <h4 className="font-display text-lg font-semibold">{title}</h4>
        <span className="text-gray-600">{location}</span>
      </div>
      {description && (
        <p className="mt-1.5 font-serif italic leading-relaxed text-gray-600">{description}</p>
      )}
      <div className="mt-3">
        <h5 className="font-display font-semibold">Achievements/Tasks</h5>
        <ul className="ml-5 mt-1.5 list-disc space-y-1.5 leading-relaxed">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {contact && (
        <div className="mt-3">
          <p className="text-gray-700">
            <span className="font-display font-semibold">Contact:</span> {contact}
          </p>
        </div>
      )}
    </div>
  );
}
