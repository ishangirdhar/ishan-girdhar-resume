export function SoftSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Soft Skills
      </h2>
      <div className="space-y-1.5">
        {softSkillsData.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700 mr-2 mb-1.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export const softSkillsData = [
  "Communication",
  "Cross-functional Collaboration",
  "Leadership & Team Development"
]; 