import resumeData from '../data/resume.json';
import { CertificationItem } from '../types/resume';

export function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Certifications
      </h2>
      <div className="space-y-3">
        {resumeData.certifications.map((cert: CertificationItem, index: number) => (
          <div key={index}>
            <h3 className="font-bold font-display">{`${index + 1}. ${cert.title}`}</h3>
            <p className="text-gray-600 mt-0.5">{cert.period}</p>
            {(cert.issuer || cert.license) && (
              <p className="text-gray-500 text-sm leading-relaxed mt-0.5">
                {cert.issuer && `${cert.issuer} `}
                {cert.license && `(${cert.licenseLabel || 'License'}: ${cert.license})`}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 