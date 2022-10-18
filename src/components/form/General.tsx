import React, { useState } from 'react';
import { ResumeObject } from 'App';

interface Props {
  resume: ResumeObject;
  setResume: (res: ResumeObject) => void;
  setPage: (page: number) => void;
}

function FormGeneral(props: Props) {
  const { resume, setResume, setPage } = props;
  const general = resume?.general ?? undefined;
  
  const [name, setName] = useState<string>(general?.name ?? "");
  const [github, setGithub] = useState<string>(general?.github ?? "");
  const [location, setLocation] = useState<string>(general?.location ?? "");
  const [email, setEmail] = useState<string>(general?.email ?? "");
  const [phoneNumber, setPhone] = useState<string>(general?.phoneNumber ?? "");

  const onSubmit = () => {
    const newResume = { ...resume };
    newResume.general = { name, github, location, email, phoneNumber };
    setResume(newResume);
  }

  return (
    <>
      <h2>What’s the best way for employers to contact you?</h2>
      <form>
        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="name">Name</label>
            <input className="textInput" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>

        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="github">Github</label>
            <input className="textInput" id="github" type="text" value={github} onChange={e => setGithub(e.target.value)} />
          </div>

          <div className="inputBlock">
            <label className="inputLabel" htmlFor="location">Location</label>
            <input className="textInput" id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
          </div>
        </div>
        
        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="email">Email</label>
            <input className="textInput" id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="phone">Phone</label>
            <input className="textInput" id="phone" type="text" value={phoneNumber} onChange={e => setPhone(e.target.value)} />
          </div>
        </div>
        
        

        <button type="submit" onClick={e => { e.preventDefault(); onSubmit(); setPage(1); }}>
          Next
        </button>
      </form>
    </>
  );
}

export default FormGeneral;
