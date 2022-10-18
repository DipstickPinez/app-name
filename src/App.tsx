import React, { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import { DSListProps } from './components/resume/DSList';
import { EducationProps } from './components/resume/Education';
import { ExperienceProps } from './components/resume/Experience';image.png
import { HeaderProps } from './components/resume/Header';
import { LanguageProps } from './components/resume/TList';

export interface ResumeObject {
  general?: HeaderProps;
  experience?: ExperienceProps;
  projects?: ExperienceProps;
  skills?: LanguageProps;
  education?: EducationProps;
  coursework?: DSListProps;
  interests?: DSListProps;
}

function App() {

  const [resume, setResume] = useState<ResumeObject>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  console.log(resume?.general?.name);
  return (
    <main>
      {submitted
        ? <Resume resume={resume} />
        : <Form resume={resume} setResume={setResume} />
      }
    </main>
  );
}


//name = "James Raynor"
//github = "jimmyray"
//location = "Joeyray's Bar, Mar Sara"
//email = "jim.raynor@gmail.com"
//phoneNumber = "+1 (800) 444-4444"


export default App;
