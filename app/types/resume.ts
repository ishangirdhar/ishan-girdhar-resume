export interface ResumeData {
  header: {
    name: string;
    title: string;
    summary: string;
    contact: {
      email: string;
      location: string;
      github: string;
      phone: string;
      linkedin: string;
    };
  };
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  softSkills: string[];
  technicalSkills: TechnicalSkillItem[];
  certifications: CertificationItem[];
  publications: PublicationItem[];
}

export interface WorkExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
  contact?: string;
  logoUrl?: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  period: string;
  location: string;
}

export interface TechnicalSkillItem {
  title: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  period: string;
  issuer?: string;
  license?: string;
  licenseLabel?: string;
}

export interface PublicationItem {
  title: string;
  authors: string[];
  date: string;
  publisher: string;
  formats: string[];
  description: string;
} 