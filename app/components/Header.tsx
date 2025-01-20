import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import resumeData from '../data/resume.json';

interface ContactItemProps {
  icon: any;
  href?: string;
  text: string;
}

const iconMap = {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
  faLinkedin,
  faGithub,
};

function ContactItem({ icon, href, text }: ContactItemProps) {
  const content = (
    <div className="flex items-center">
      <span className="mr-2 flex h-5 w-5 items-center justify-center">
        <FontAwesomeIcon
          icon={iconMap[icon as keyof typeof iconMap]}
          className="text-white"
          size="sm"
        />
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
  const { header } = resumeData;
  const contactItems = [
    {
      icon: 'faEnvelope',
      href: `mailto:${header.contact.email}`,
      text: header.contact.email,
    },
    {
      icon: 'faPhone',
      text: header.contact.phone,
    },
    {
      icon: 'faLocationDot',
      text: header.contact.location,
    },
    {
      icon: 'faGlobe',
      href: 'https://www.ishangirdhar.com',
      text: 'www.ishangirdhar.com',
    },
    {
      icon: 'faLinkedin',
      href: `https://${header.contact.linkedin}`,
      text: header.contact.linkedin,
    },
    {
      icon: 'faGithub',
      href: `https://${header.contact.github}`,
      text: header.contact.github,
    },
  ];

  const leftColumnItems = contactItems.slice(0, 3);
  const rightColumnItems = contactItems.slice(3);

  return (
    <header className="shadow-3xl bg-gray-900 p-6 pb-0 text-white">
      <div className="mb-2 flex justify-between gap-6">
        <div className="mt-6 flex-shrink-0">
          <Image
            src="/ishangirdhar.png"
            alt="Profile"
            width={180}
            height={180}
            className="ring-offset- rounded-full ring-2 ring-white ring-offset-gray-900"
          />
        </div>
        <div>
          <h1 className="font-display text-5xl font-bold tracking-tight">{header.name}</h1>
          <h2 className="mt-1.5 font-display text-xl font-medium tracking-wide text-indigo-300">
            {header.title}
          </h2>
          <p className="mt-1.5 max-w-5xl font-sans leading-relaxed text-gray-300">
            {header.summary}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="-mx-6 mt-4 rounded-t-3xl border-t border-white bg-black px-6 py-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            {leftColumnItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {rightColumnItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
