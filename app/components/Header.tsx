import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ContactItemProps {
  icon: any;
  href?: string;
  text: string;
}

function ContactItem({ icon, href, text }: ContactItemProps) {
  const content = (
    <div className="flex items-center">
      <span className="mr-2 flex h-5 w-5 items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-white" size="sm" />
      </span>
      <span className="transition-colors hover:text-indigo-300">{text}</span>
    </div>
  );

  return href ? (
    <Link href={href} className="transition-colors hover:text-indigo-300">
      {content}
    </Link>
  ) : (
    content
  );
}

export function Header() {
  return (
    <header className="shadow-3xl bg-gray-900 p-6 pb-0 text-white">
      <div className="mb-2 flex justify-between gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/ishangirdhar.png"
            alt="Profile"
            width={128}
            height={128}
            className="ring-offset- rounded-full ring-2 ring-indigo-600 ring-offset-gray-900"
          />
        </div>
        <div>
          <h1 className="font-display text-5xl font-bold tracking-tight">Ishan Girdhar</h1>
          <h2 className="mt-1.5 font-display text-xl font-medium tracking-wide text-indigo-300">
            Cyber Security Leader with 15+ years of experience
          </h2>
          <p className="mt-1.5 max-w-5xl font-sans leading-relaxed text-gray-300">
            Seasoned Information Security Leader with 15 years of experience, including CISO roles
            at Funding Societies and Zai. Proven expertise in designing and executing platform
            application security and Bug Bounty programs, aligning security with core business
            goals. Success in mitigating risks, optimizing security investments, and driving
            scalable solutions that support business growth—all while maintaining budget discipline.
            Skilled at fostering a security culture without compromising innovation.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="-mx-6 mt-4 rounded-t-3xl border-t border-white bg-black px-6 py-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <ContactItem
              icon={faEnvelope}
              href="mailto:ishan@ishangirdhar.com"
              text="ishan@ishangirdhar.com"
            />
            <ContactItem icon={faPhone} text="+65-97528696" />
            <ContactItem icon={faLocationDot} text="Singapore" />
          </div>
          <div className="flex flex-col gap-2">
            <ContactItem
              icon={faGlobe}
              href="https://www.ishangirdhar.com"
              text="https://www.ishangirdhar.com"
            />
            <ContactItem
              icon={faLinkedin}
              href="https://linkedin.com/in/ishangirdhar"
              text="linkedin.com/in/ishangirdhar"
            />
            <ContactItem
              icon={faGithub}
              href="https://github.com/ishangirdhar"
              text="github.com/ishangirdhar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
