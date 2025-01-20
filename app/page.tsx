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

export default function Resume() {
  return (
    <div className="bg-zinc-300 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-3xl">
        {/* Header Section */}
        <header className="bg-gray-900 text-white p-8 pb-0 shadow-3xl">
          <div className="flex justify-between gap-8 mb-3">
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
              <h1 className="text-5xl font-bold">Ishan Girdhar</h1>
              <h2 className="text-xl text-indigo-300 mt-2">Cyber Security Leader with 15+ years of experience</h2>
              <p className="mt-2 text-gray-300 max-w-5xl">
                Seasoned Information Security Leader with 15 years of experience, including CISO roles at Funding Societies and Zai. 
                Proven expertise in designing and executing platform application security and Bug Bounty programs, aligning security 
                with core business goals. Success in mitigating risks, optimizing security investments, and driving scalable 
                solutions that support business growth—all while maintaining budget discipline. Skilled at fostering a security 
                culture without compromising innovation.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black -mx-8 px-8 py-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
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
              <div className="space-y-2">
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

        <main className="p-8">
          <div className="grid grid-cols-3 gap-4">
            {/* Work Experience Section */}
            <section className="col-span-2">
              <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
                Work Experience
              </h2>
              <WorkExperience
                company="Accenture"
                title="Senior Manager, Security Consulting"

                period="08/2022 - Present"
                location="Singapore"
                description="Accenture is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting."
                achievements={[
                  "Financial Services industry in SEA Region by delivering security services, including security strategy, Identity Access & Management, Application Security, Threat Modeling",
                  "Provide subject matter expertise in application security, focusing on risk assessment, compliance, and secure digital transformation.",
                  "Collaborated with business leaders for security strategy, compliance, and various security practices for supporting Business Goals."
                ]}
                contact="Shelesh Gupta, Managing Director, Accenture Security SEA - shelesh.gupta@accenture.com"
              />

              <WorkExperience
                title="Head of Information Security"
                company="Zai Australia Pty. Ltd."
                period="02/2021 - 07/2022"
                location="Singapore"
                description="Zai helps customers build automated payment workflows & payment gateways through APIs."
                achievements={[
                  "Lead global security strategy for B2B hellozai.com and B2C CurrencyFair.com, aligning security initiatives with business objectives.",
                  "Achieved annual PCI DSS and ISO 27001 certifications, ensuring compliance with industry standards and regulatory requirements.",
                  "Spearheaded platform security across web, mobile applications, and SDKs, strengthening Zai's security framework and safeguarding user data for B2B and B2C."
                ]}
                contact="Rimal Gokani - rgokani@assemblypayments.com"
              />

              <WorkExperience
                title="Head of Information Security"
                company="Funding Societies Pte. Ltd."
                period="09/2019 - 02/2021"
                location="Singapore"
                description="Peer-to-peer lending, Capital Market Services operating in Singapore, Malaysia and Indonesia."
                achievements={[
                  "Led security strategy for the crowdsourcing and digital financing platform across Singapore, Malaysia, and Indonesia.",
                  "Developed frameworks compliant with MAS TRM, Securities' Commission, and OJK regulations.",
                  "Built a 14+ member InfoSec team focused on Incident Response, Security Engineering, Product Security, GRC, Infrastructure Security, and IT Security."
                ]}
                contact="Matt Lambie - matt.lambie@fundingsocieties.com"
              />

              <WorkExperience
                title="Information Security Engineering Manager (Product Security)"
                company="Grabtaxi Holding Pte. Ltd."
                period="11/2016 - 07/2019"
                location="Singapore"
                description="Grab is Southeast Asia's #1 ride-hailing app for private cars & taxis."
                achievements={[
                  "Built and led Grab's offensive security team, overseeing Product Security, Bug Bounty Program, and Red Team (12 ICs, 2 leads).",
                  "Managed Grab's Bug Bounty Program, achieving top hacker engagement and industry-leading metrics with the lowest SLAs on HackerOne.",
                  "Managed AWS infrastructure security, addressing challenges in secrets' management, service identity, and authentication.",
                  "Developed in-house tools for detecting, alerting, and resolving security misconfigurations across 70+ AWS accounts and API gateways."
                ]}
                contact="Sreekanth Narayanan - sreekanth.narayanan@grab.com"
              />

              <WorkExperience
                title="Senior Security Engineer"
                company="InMobi"
                period="06/2015 - 06/2016"
                location="Bangalore, India"
                achievements={[
                  "Strategized application security solutions, including security libraries and automated code reviews for CI/CD.",
                  "Promoted security awareness through training sessions, documentation, and live demonstrations.",
                  "Developed standards and policies for secure coding, data handling, networking, and cryptography."
                ]}
                contact="Kartikeya Puri - kartikeya.puri@inmobi.com"
              />

              <WorkExperience
                title="Information Security Engineer - Level 3"
                company="eBay PayPal"
                period="11/2013 - 02/2015"
                location="Bangalore, India"
                description="PayPal is a safer payment method recommended by eBay."
                achievements={[
                  "Led PayPal's Bug Bounty Program, developed security processes and internal tools to automate workflows.",
                  "Managed web and mobile application security for PayPal and its subsidiaries."
                ]}
                contact="Sumanta Dey - sudey@paypal.com"
              />

              <WorkExperience
                title="Consultant"
                company="Aujas Networks Pvt Ltd"
                period="11/2012 - 11/2013"
                location="Gurugram"
                description="Aujas specializes in building and transforming cybersecurity postures for businesses, focusing on mitigating risks through Identity and Access Management, Risk Advisory, and Managed Detection and Response services."
                achievements={[
                  "Conducted penetration testing for web and mobile applications, delivering comprehensive security assessments for high-profile clients such as Airtel.",
                  "Facilitated Confidentiality, Integrity, and Availability (CIA) ratings for new applications and major Change Requests (CR's) on asset registers, enhancing organizational risk management.",
                  "Reviewed and implemented best practices for securing and hardening systems and network devices, ensuring alignment with industry standards.",
                  "Evaluated third-party applications and maintained a security evaluation repository, assisting in formulating and executing Third-Party Security Audit calendars for vulnerability testing.",
                  "Delivered comprehensive vulnerability assessments and security audits to align with industry best practices and improve client security postures."
                ]}
                contact="narang.rishi@gmail.com - +852 6463 0505"
              />

              <WorkExperience
                title="Infosec Consultant"
                company="AKS Information Technology Services"
                period="11/2010 - 11/2012"
                location="Noida, India"
                description="AKS IT delivers a diverse portfolio of IT security services, including Information Risk Management, Cyber Forensics, Incident Response, and SOC design and implementation. With a client base of over 110 organizations, including government and PSUs, AKS IT serves high-impact sectors such as manufacturing, banking, telecom, and pharmaceuticals."
                achievements={[
                  "Conducted penetration testing for over 200 web applications, APIs, and mobile applications, including Android, Blackberry, and Windows platforms, ensuring robust security measures.",
                  "Performed network penetration testing and Red Teaming exercises for critical clients such as the Government of India, Indian Army, Indian Air Force, NTPC, NIC, West Central Railways, and Delhi Police.",
                  "Collaborated with clients to provide actionable recommendations, strengthening their defenses against evolving cybersecurity threats."
                ]}
                contact="vivek.verma@aksitservices.co.in - Vivek Verma (Manager)"
              />

              <WorkExperience
                title="Security Researcher & Trainer"
                company="Innobuzz Knowledge Solutions"
                period="05/2010 - 11/2010"
                location="Delhi, India"
                description="Responsible for developing and implementing security training programs, and security education learning modules."
                achievements={[
                  "Designed and implemented security training programs and learning modules, enhancing organizational awareness and readiness against cyber threats.",
                  "Conducted penetration testing on web and mobile applications to support the development and delivery of hands-on training programs."
                ]}
                contact="atul@innobuzz.in - Atul Gupta"
              />
            </section>

            {/* Right Column */}
            <div className="space-y-8">
              <SkillsSection />
              <TechnicalSkillsSection />
              <CertificationsSection />
            </div>
          </div>
        </main>

        <footer className="p-4 text-center text-gray-500 text-sm">
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

interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
  contact?: string;
}

function WorkExperience({
  title,
  company,
  period,
  location,
  description,
  achievements,
  contact
}: WorkExperienceProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-gray-600">{period}</span>
      </div>
      <div className="flex justify-between items-baseline">
        <h4 className="text-lg text-gray-700">{company}</h4>
        <span className="text-gray-600">{location}</span>
      </div>
      {description && (
        <p className="text-gray-600 italic mt-2">{description}</p>
      )}
      <div className="mt-4">
        <h5 className="font-semibold">Achievements/Tasks</h5>
        <ul className="list-disc ml-5 mt-2 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {contact && (
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold">Contact:</span> {contact}
          </p>
        </div>
      )}
    </div>
  );
}

function SkillsSection() {
  const skills = [
    "Communication",
    "Cross-functional Collaboration",
    "Leadership & Team Development"
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Soft Skills
      </h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
      <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Technical Skills
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-bold">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
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
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index}>
            <h3 className="font-bold">{`${index + 1}. ${cert.title}`}</h3>
            <p className="text-gray-600">{cert.period}</p>
            <p className="text-gray-500 text-sm">
              {cert.issuer} (License: {cert.license})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
