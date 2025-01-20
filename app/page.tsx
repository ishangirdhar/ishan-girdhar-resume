import { 
  GithubIcon, 
  PhoneIcon, 
  Mail as EmailIcon, 
  MapPin as LocationIcon, 
  Linkedin as LinkedInIcon 
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { WorkExperience, workExperienceData } from './components/WorkExperience';

export default function Resume() {
  return (
    <div className="bg-zinc-300 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-3xl">
        {/* Header Section */}
        <header className="bg-gray-900 text-white p-6 pb-0 shadow-3xl">
          <div className="flex justify-between gap-6 mb-2">
            <div className="flex-shrink-0">
              <Image
                src="/ishangirdhar.png"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full ring-2 ring-indigo-600 ring-offset- ring-offset-gray-900"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold font-display tracking-tight">Ishan Girdhar</h1>
              <h2 className="text-xl text-indigo-300 mt-1.5 font-display font-medium tracking-wide">Cyber Security Leader with 15+ years of experience</h2>
              <p className="mt-1.5 text-gray-300 max-w-5xl font-sans leading-relaxed">
                Seasoned Information Security Leader with 15 years of experience, including CISO roles at Funding Societies and Zai. 
                Proven expertise in designing and executing platform application security and Bug Bounty programs, aligning security 
                with core business goals. Success in mitigating risks, optimizing security investments, and driving scalable 
                solutions that support business growth—all while maintaining budget discipline. Skilled at fostering a security 
                culture without compromising innovation.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black -mx-6 px-6 py-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <ContactItem
                  icon={<EmailIcon />}
                  href="mailto:ishan@ishangirdhar.com"
                  text="ishan@ishangirdhar.com"
                />
                <ContactItem
                  icon={<LocationIcon />}
                  text="Singapore, Singapore"
                />
                <ContactItem
                  icon={<GithubIcon />}
                  href="https://github.com/ishangirdhar"
                  text="github.com/ishangirdhar"
                />
              </div>
              <div className="space-y-1.5">
                <ContactItem
                  icon={<PhoneIcon />}
                  text="+65-97528696"
                />
                <ContactItem
                  icon={<LinkedInIcon />}
                  href="https://linkedin.com/in/ishangirdhar"
                  text="linkedin.com/in/ishangirdhar"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Work Experience Section */}
            <section className="col-span-2">
              <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
                Work Experience
              </h2>
              {workExperienceData.map((experience, index) => (
                <WorkExperience key={index} {...experience} />
              ))}
            </section>

            {/* Right Column */}
            <div className="space-y-6">
              <SkillsSection />
              <EducationSection />
              <PublicationsSection />
              <CertificationsSection />
              <TechnicalSkillsSection />
            </div>
          </div>
        </main>

        <footer className="p-3 text-center text-gray-500 text-sm">
          <p>Page 1 of 3</p>
        </footer>
      </div>
    </div>
  );
}

// Components
interface ContactItemProps {
  icon: React.ReactNode;
  href?: string;
  text: string;
}

function ContactItem({ icon, href, text }: ContactItemProps) {
  const content = (
    <div className="flex items-center">
      <span className="w-5 h-5 mr-2 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, {
          size: 18,
          strokeWidth: 1.5,
          className: "text-white"
        })}
      </span>
      <span className="hover:text-indigo-300 transition-colors">{text}</span>
    </div>
  );

  return href ? (
    <Link href={href} className="hover:text-indigo-300 transition-colors">
      {content}
    </Link>
  ) : (
    content
  );
}

// Icons components would go here
// EmailIcon, LocationIcon, GithubIcon, PhoneIcon, LinkedInIcon components...

function SkillsSection() {
  const skills = [
    "Communication",
    "Cross-functional Collaboration",
    "Leadership & Team Development"
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Soft Skills
      </h2>
      <div className="space-y-1.5">
        {skills.map((skill, index) => (
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

function TechnicalSkillsSection() {
  const skills = [
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

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Technical Skills
      </h2>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-bold font-display">{skill.title}</h3>
            <p className="text-gray-700 leading-relaxed mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Security Speciality SCS-C01",
      period: "(06/2020 - 06/2023)",
      issuer: "Amazon Web Services, USA",
      license: "31EMYHZCM21QQG59"
    },
    {
      title: "AWS Certified Developer Associate DVA-C02",
      period: "(08/2020 - 08/2023)",
      issuer: "Amazon Web Services USA",
      license: "6HGFNE21FJRQ1JKM"
    },
    {
      title: "AWS Certified SysOps Administrator Associate SOA-C01",
      period: "(09/2020 - 09/2023)",
      issuer: "Amazon Web Services, USA",
      license: "6HGFNE21FJRQ1JKM"
    },
    {
      title: "AWS Solutions Architect Associate SAAC01",
      period: "(02/2020 - 02/2023)",
      issuer: "Amazon Web Services, USA",
      license: "76KY3TD1HBQQ143"
    },
    {
      title: "ISC2 Certified Cloud Security Professional",
      period: "(01/2023 - 12/2025)",
      license: "841568",
      licenseLabel: "Certificate Number"
    },
    {
      title: "Certified Data Privacy Solutions Engineer™ (CPDSE)",
      period: "(08/2022 - 07/2025)"
    },
    {
      title: "Project Management Professional (PMP)®",
      period: "(01/2023 - 01/2026)",
      license: "3416286",
      licenseLabel: "PMP Number"
    },
    {
      title: "Offensive Security Certified Professional",
      period: "(07/2013 - 06/2015)"
    },
    {
      title: "ISACA Certified Information Security Manager (CISM)",
      period: "(12/2020 - 02/2023)"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Certifications
      </h2>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
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

function EducationSection() {
  const education = [
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

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => (
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

function PublicationsSection() {
  const publications = [
    {
      title: "Kali Linux Intrusion and Exploitation Cookbook",
      authors: ["Ishan Girdhar", "Dhruv Shah"],
      date: "April 21, 2017",
      publisher: "Packt Publishing",
      formats: ["Hardcopy", "Paperback", "Kindle"],
      description: "Authored 'Kali Linux Intrusion and Exploitation Cookbook' ideal for system administrators and system architects. Published by Packt Pub, Available on Amazon."
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Publications
      </h2>
      <div className="space-y-3">
        {publications.map((pub, index) => (
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
