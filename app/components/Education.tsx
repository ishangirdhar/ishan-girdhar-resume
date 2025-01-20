interface EducationItemProps {
  degree: string;
  university: string;
  period: string;
  location: string;
}

export function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Education
      </h2>
      <div className="space-y-3">
        {educationData.map((edu, index) => (
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

export const educationData: EducationItemProps[] = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    university: "Sikkim Manipal University",
    period: "08/2011 - 03/2013",
    location: "New Delhi, India"
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A)",
    university: "Guru Gobind Singh Indraprastha University",
    period: "08/2007 - 05/2010",
    location: "New Delhi, India"
  }
]; 