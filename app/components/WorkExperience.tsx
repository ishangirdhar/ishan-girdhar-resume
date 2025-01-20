interface WorkExperienceProps {
  company: string;
  title: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
  contact?: string;
}

export function WorkExperience({
  company,
  title,
  period,
  location,
  description,
  achievements,
  contact
}: WorkExperienceProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-bold font-display tracking-tight">{company}</h3>
        <span className="text-gray-600 font-medium">{period}</span>
      </div>
      <div className="flex justify-between items-baseline mt-1">
        <h4 className="text-lg text-gray-700 font-display">{title}</h4>
        <span className="text-gray-600">{location}</span>
      </div>
      {description && (
        <p className="text-gray-600 italic mt-1.5 font-serif leading-relaxed">{description}</p>
      )}
      <div className="mt-3">
        <h5 className="font-semibold font-display">Achievements/Tasks</h5>
        <ul className="list-disc ml-5 mt-1.5 space-y-1.5 leading-relaxed">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {contact && (
        <div className="mt-3">
          <p className="text-gray-700">
            <span className="font-semibold font-display">Contact:</span> {contact}
          </p>
        </div>
      )}
    </div>
  );
}

export const workExperienceData = [
  {
    company: "Accenture",
    title: "Senior Manager, Security Consulting",
    period: "08/2022 - Present",
    location: "Singapore",
    description: "Accenture is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting.",
    achievements: [
      "Financial Services industry in SEA Region by delivering security services, including security strategy, Identity Access & Management, Application Security, Threat Modeling",
      "Provide subject matter expertise in application security, focusing on risk assessment, compliance, and secure digital transformation.",
      "Collaborated with business leaders for security strategy, compliance, and various security practices for supporting Business Goals."
    ],
    contact: "Shelesh Gupta, Managing Director, Accenture Security SEA - shelesh.gupta@accenture.com"
  },
  {
    company: "Zai Australia Pty. Ltd.",
    title: "Head of Information Security",
    period: "02/2021 - 07/2022",
    location: "Singapore",
    description: "Zai helps customers build automated payment workflows & payment gateways through APIs.",
    achievements: [
      "Lead global security strategy for B2B hellozai.com and B2C CurrencyFair.com, aligning security initiatives with business objectives.",
      "Achieved annual PCI DSS and ISO 27001 certifications, ensuring compliance with industry standards and regulatory requirements.",
      "Spearheaded platform security across web, mobile applications, and SDKs, strengthening Zai's security framework and safeguarding user data for B2B and B2C."
    ],
    contact: "Rimal Gokani - rgokani@assemblypayments.com"
  },
  {
    company: "Funding Societies Pte. Ltd.",
    title: "Head of Information Security",
    period: "09/2019 - 02/2021",
    location: "Singapore",
    description: "Peer-to-peer lending, Capital Market Services operating in Singapore, Malaysia and Indonesia.",
    achievements: [
      "Led security strategy for the crowdsourcing and digital financing platform across Singapore, Malaysia, and Indonesia.",
      "Developed frameworks compliant with MAS TRM, Securities' Commission, and OJK regulations.",
      "Built a 14+ member InfoSec team focused on Incident Response, Security Engineering, Product Security, GRC, Infrastructure Security, and IT Security."
    ],
    contact: "Matt Lambie - matt.lambie@fundingsocieties.com"
  },
  {
    company: "Grabtaxi Holding Pte. Ltd.",
    title: "Information Security Engineering Manager (Product Security)",
    period: "11/2016 - 07/2019",
    location: "Singapore",
    description: "Grab is Southeast Asia's #1 ride-hailing app for private cars & taxis.",
    achievements: [
      "Built and led Grab's offensive security team, overseeing Product Security, Bug Bounty Program, and Red Team (12 ICs, 2 leads).",
      "Managed Grab's Bug Bounty Program, achieving top hacker engagement and industry-leading metrics with the lowest SLAs on HackerOne.",
      "Managed AWS infrastructure security, addressing challenges in secrets' management, service identity, and authentication.",
      "Developed in-house tools for detecting, alerting, and resolving security misconfigurations across 70+ AWS accounts and API gateways."
    ],
    contact: "Sreekanth Narayanan - sreekanth.narayanan@grab.com"
  },
  {
    company: "InMobi",
    title: "Senior Security Engineer",
    period: "06/2015 - 06/2016",
    location: "Bangalore, India",
    achievements: [
      "Strategized application security solutions, including security libraries and automated code reviews for CI/CD.",
      "Promoted security awareness through training sessions, documentation, and live demonstrations.",
      "Developed standards and policies for secure coding, data handling, networking, and cryptography."
    ],
    contact: "Kartikeya Puri - kartikeya.puri@inmobi.com"
  },
  {
    company: "eBay PayPal",
    title: "Information Security Engineer - Level 3",
    period: "11/2013 - 02/2015",
    location: "Bangalore, India",
    description: "PayPal is a safer payment method recommended by eBay.",
    achievements: [
      "Led PayPal's Bug Bounty Program, developed security processes and internal tools to automate workflows.",
      "Managed web and mobile application security for PayPal and its subsidiaries."
    ],
    contact: "Sumanta Dey - sudey@paypal.com"
  },
  {
    company: "Aujas Networks Pvt Ltd",
    title: "Consultant",
    period: "11/2012 - 11/2013",
    location: "Gurugram",
    description: "Aujas specializes in building and transforming cybersecurity postures for businesses, focusing on mitigating risks through Identity and Access Management, Risk Advisory, and Managed Detection and Response services.",
    achievements: [
      "Conducted penetration testing for web and mobile applications, delivering comprehensive security assessments for high-profile clients such as Airtel.",
      "Facilitated Confidentiality, Integrity, and Availability (CIA) ratings for new applications and major Change Requests (CR's) on asset registers, enhancing organizational risk management.",
      "Reviewed and implemented best practices for securing and hardening systems and network devices, ensuring alignment with industry standards.",
      "Evaluated third-party applications and maintained a security evaluation repository, assisting in formulating and executing Third-Party Security Audit calendars for vulnerability testing.",
      "Delivered comprehensive vulnerability assessments and security audits to align with industry best practices and improve client security postures."
    ],
    contact: "narang.rishi@gmail.com - +852 6463 0505"
  },
  {
    company: "AKS Information Technology Services",
    title: "Infosec Consultant",
    period: "11/2010 - 11/2012",
    location: "Noida, India",
    description: "AKS IT delivers a diverse portfolio of IT security services, including Information Risk Management, Cyber Forensics, Incident Response, and SOC design and implementation. With a client base of over 110 organizations, including government and PSUs, AKS IT serves high-impact sectors such as manufacturing, banking, telecom, and pharmaceuticals.",
    achievements: [
      "Conducted penetration testing for over 200 web applications, APIs, and mobile applications, including Android, Blackberry, and Windows platforms, ensuring robust security measures.",
      "Performed network penetration testing and Red Teaming exercises for critical clients such as the Government of India, Indian Army, Indian Air Force, NTPC, NIC, West Central Railways, and Delhi Police.",
      "Collaborated with clients to provide actionable recommendations, strengthening their defenses against evolving cybersecurity threats."
    ],
    contact: "vivek.verma@aksitservices.co.in - Vivek Verma (Manager)"
  },
  {
    company: "Innobuzz Knowledge Solutions",
    title: "Security Researcher & Trainer",
    period: "05/2010 - 11/2010",
    location: "Delhi, India",
    description: "Responsible for developing and implementing security training programs, and security education learning modules.",
    achievements: [
      "Designed and implemented security training programs and learning modules, enhancing organizational awareness and readiness against cyber threats.",
      "Conducted penetration testing on web and mobile applications to support the development and delivery of hands-on training programs."
    ],
    contact: "atul@innobuzz.in - Atul Gupta"
  }
]; 