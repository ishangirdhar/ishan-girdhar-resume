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
              <h2 className="mb-4 rounded-lg bg-gray-900 px-4 py-2 font-display text-2xl font-bold uppercase tracking-wide text-white shadow-md">
                Work Experience
              </h2>
              {resumeData.workExperience.map((experience, index) => (
                <WorkExperience key={index} {...experience} />
              ))}
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
