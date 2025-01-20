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
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { SoftSkills } from './components/SoftSkills';
import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { TechnicalSkills } from './components/TechnicalSkills';
import resumeData from './data/resume.json';

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
              {resumeData.workExperience.map((experience, index) => (
                <WorkExperience key={index} {...experience} />
              ))}
            </section>

            {/* Right Column */}
            <div className="space-y-6">
              <SoftSkills />
              <Education />
              <Publications />
              <Certifications />
              <TechnicalSkills />
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
