import { WorkExperienceItem } from '../types/resume';
import Image from 'next/image';

function WorkExperienceEntry({
  company,
  title,
  period,
  location,
  description,
  achievements,
  contact,
  logoUrl,
}: WorkExperienceItem) {
  return (
    <div className="mb-6 border-b border-gray-900 pb-6 last:mb-0 last:border-b-0 last:pb-0">
      <div className="flex items-center justify-between rounded-lg">
        <div className="flex items-center gap-3">
          {logoUrl && (
            <div className="relative h-5 w-5 overflow-hidden rounded-full">
              <Image src={logoUrl} alt={`${company} logo`} fill className="object-cover" />
            </div>
          )}
          <h3 className="font-display text-xl font-bold tracking-tight">{company}</h3>
        </div>
        <span className="font-medium">{period}</span>
      </div>
      <div className="mt-1 flex items-baseline justify-between">
        <h4 className="font-display text-lg font-semibold">{title}</h4>
        <span className="text-indigo-900">{location}</span>
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

export function WorkExperience({ experiences }: { experiences: WorkExperienceItem[] }) {
  return (
    <section>
      <h2 className="mb-4 rounded-lg bg-gray-900 px-4 py-2 font-display text-2xl font-bold uppercase tracking-wide text-white shadow-md">
        Work Experience
      </h2>
      {experiences.map((experience, index) => (
        <WorkExperienceEntry key={index} {...experience} />
      ))}
    </section>
  );
}
