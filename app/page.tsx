import React from 'react';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { SoftSkills } from './components/SoftSkills';
import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Header } from './components/Header';
import resumeData from './data/resume.json';

export default function Resume() {
  return (
    <div className="bg-zinc-300 p-8">
      <div className="shadow-3xl mx-auto max-w-7xl bg-white">
        <Header />

        <main className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Work Experience Section */}
            <section className="col-span-2">
              <WorkExperience experiences={resumeData.workExperience} />
            </section>

            {/* Right Column */}
            <div className="space-y-6">
              {/* <SoftSkills /> */}
              <Education />
              <Certifications />
              <Publications />
              <TechnicalSkills />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
