import React, { useState } from 'react';
import { ResumeObject } from '../App';
import FormExp from './form/FormExp';
import General from './form/General';

interface Props {
  resume: ResumeObject;
  setResume: (res: ResumeObject) => void;
}
const Form = (props: Props) => {

  const [step, setStep] = useState<number>(0);
  // Header,
  // Experience, Projects,
  // Education, Coursework,
  // Skills, Interests,

  const getForm = () => {
    switch (step) {
      case 0:
        return <General resume={props.resume} setResume={props.setResume} setPage={setStep} />
      case 1:
        return <FormExp setPage={setStep} />
      default:
        break;
    }
  }

  return (
    <>
      {getForm()}
    </>
  );
}

export default Form;
