interface TechnicalSkillProps {
  title: string;
  description: string;
}

export function TechnicalSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Technical Skills
      </h2>
      <div className="space-y-3">
        {technicalSkillsData.map((skill, index) => (
          <div key={index}>
            <h3 className="font-bold font-display">{skill.title}</h3>
            <p className="text-gray-700 leading-relaxed mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const technicalSkillsData: TechnicalSkillProps[] = [
  {
    title: "Application Security",
    description: "Web & Mobile Application Security, Threat Modelling (STRIDE, MITRE ATT&CK Framework), Penetration Testing"
  },
  {
    title: "Threat Modeling",
    description: "Proficient in using STRIDE and MITRE ATT&CK frameworks to identify and mitigate security risks."
  },
  {
    title: "Penetration Testing",
    description: "Skilled in conducting penetration tests across applications and infrastructure, identifying vulnerabilities."
  },
  {
    title: "DevSecOps & Automation",
    description: "Experience in building Secure CI/CD Pipelines, automating code reviews, docker images, and Python"
  },
  {
    title: "AWS & Azure Cloud Security",
    description: "Experience in securing AWS and Azure environments, including managing identity, secrets' management, and API security."
  },
  {
    title: "Technology Risk Management & Compliance",
    description: "MAS TRM, PCI DSS, and IEC/ISO:27001 ISMS"
  }
]; 