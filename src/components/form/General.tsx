import React, { useState } from 'react';
import { ResumeObject } from 'App';

interface Props {
  resume: ResumeObject;
  setResume: (res: ResumeObject) => void;
  setPage: (page: number) => void;
}
function General(props: Props) {
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
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="github">Github</label>
        <input id="github" type="text" value={github} onChange={e => setGithub(e.target.value)} />
        <label htmlFor="location">Location</label>
        <input id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" value={phoneNumber} onChange={e => setPhone(e.target.value)} />

        <button type="submit" onClick={e => { e.preventDefault(); onSubmit(); setPage(1); }}>
          Next
        </button>
      </form>
    </>
  );
}

export default General;
