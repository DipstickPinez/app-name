import React, { useState } from 'react';
import DSList, { DSListProps } from './components/resume/DSList';
import Education, { EducationProps } from './components/resume/Education';
import Experience, { ExperienceProps } from './components/resume/Experience';
import Header, { HeaderProps } from './components/resume/Header';
import Languages, { LanguageProps } from './components/resume/Languages';

export interface ResumeObject {
  general?: HeaderProps;
  experience?: ExperienceProps[];
  projects?: ExperienceProps[];
  skills?: LanguageProps[];
  education?: EducationProps[];
  coursework?: DSListProps[];
  interests?: DSListProps[];
}

function App() {

  const [edit, setEdit] = useState<boolean>(false);

  const [header, setHeader] = useState<HeaderProps>({
    name: "James Raynor",
    github: "jimmyu",
    location: "Joeyray's Bar, Mar Sara",
    email: "jim.raynor@gmail.com",
    phone: "+1 (800) 444-4444",
  });
  const defaultExperience = {
    org: "Raynor's Raiders",
    title: "Commander",
    description:
      [
        "Lead an organization of freedom fighters against the Terran dominion",
        "Overturned a galactic dictatorship over the course of only five years",
        "Launched dozens of successful tactical strikes on highly defended targets",
      ],
    date: "March 2500 - Current",
  }
  const [experience, setExperience] = useState<ExperienceProps[]>([]);
  const addExperience = () => {
    const copy = [...experience];
    copy.push(defaultExperience);
    setExperience(copy);
  }
  const defaultProject = {
    org: "Xel'naga Artifact",
    href: "https://www.xelnaga.com/",
    link: "xelnaga.com",
    description:
      [
        "Reconstructed an ancient artifact of unknown origins from several fragments",
        "Repurposed the artifact to extract foreign essence from an infested body",
        "Successfully purified the Queen of Blades, who was restored to her original form",
      ],
    date: "October - December 2504",
}
  const [projects, setProjects] = useState<ExperienceProps[]>([]);
  const addProject = () => {
    const copy = [...projects];
    copy.push(defaultProject);
    setProjects(copy);
  }
  const [skills, setSkills] = useState<DSListProps[]>([
    {
      title: "Languages",
      items: [
        {
          subtitle: "Experienced",
          items: ["Javascript", "Typescript",]
        },
        {
          subtitle: "Familiar",
          items: ["C#", "Java",]
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          items: ["Git", "GitHub",]
        },
      ],
    }
  ]);
  const [courses, setCourses] = useState<DSListProps[]>([
    {
      title: "Coursework",
      items: [
        {
          subtitle: "Computer Science",
          items: ["Object Oriented Design", "Algorithms & Data",]
        },
        {
          subtitle: "Mathematics",
          items: ["Linear Algebra", "Group Theory",]
        },
      ],
    },
  ]);
  const [interests, setInterests] = useState<DSListProps[]>([
    {
      title: "Professional",
      items: [
        {
          items: ["Accessibility", "UX Design", "SEO",]
        },
      ],
    },
    {
      title: "Personal",
      items: [
        {
          items: ["Baking", "Video Games", "Music", "Manga"]
        },
      ],
    },
  ]);

  return (
    <main>
      <Header header={header} />
      <div className="main">
        <div>
          <section>
            <h2>Experience
              {edit && <button className="button-add" onClick={addExperience}>
                +
              </button>}
            </h2>
            {experience.map((exp, n) =>
              <Experience key={exp.org + n} exp={exp} />
            )}
          </section>
          <section>
            <h2>Projects
              {edit && <button className="button-add" onClick={addProject}>
              +
            </button>}
            </h2>
            {projects.map((exp, n) =>
              <Experience key={exp.org + n} exp={exp} />
            )}
          </section>
        </div>
        <div>
          <section>
            <h2>Skills</h2>
            {skills.map(dsl =>
              <DSList key={dsl.title} title={dsl.title} items={dsl.items} />
            )}
          </section>
          <section>
            <h2>Education</h2>
            <Education
              university="Northeastern University"
              degree="Computer Science and Mathematics, BS"
              date="September 2018 - December 2021"
              college="Khoury College of Computer and Informational Sciences"
            />
            {courses.map(dsl =>
              <DSList key={dsl.title} title={dsl.title} items={dsl.items} />
            )}
          </section>
          <section>
            <h2>Interests</h2>
            {interests.map(dsl =>
              <DSList key={dsl.title} title={dsl.title} items={dsl.items} />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}



export default App;
