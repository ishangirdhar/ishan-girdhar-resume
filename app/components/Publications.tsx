import resumeData from '../data/resume.json';
import { PublicationItem } from '../types/resume';

export function Publications() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Publications
      </h2>
      <div className="space-y-3">
        {resumeData.publications.map((pub: PublicationItem, index: number) => (
          <div key={index}>
            <h3 className="font-bold font-display">{pub.title}</h3>
            <p className="text-gray-700 mt-0.5">By {pub.authors.join(", ")}</p>
            <p className="text-gray-600 text-sm mt-0.5">{pub.date} • {pub.publisher}</p>
            <p className="text-gray-500 text-sm mt-0.5">Available in: {pub.formats.join(", ")}</p>
            <p className="text-gray-600 mt-1.5 text-sm leading-relaxed">{pub.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 