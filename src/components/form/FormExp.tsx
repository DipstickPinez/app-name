import React, { useState } from 'react';

interface Props {
  setPage: (page: number) => void;
}
function FormExp(props: Props) {

  const [name, setName] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <>
      <form>
        Experience
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="github">Github</label>
        <input id="github" type="text" value={github} onChange={e => setGithub(e.target.value)} />
        <label htmlFor="location">Location</label>
        <input id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} />

        Projects
      </form>
    </>
  );
}

export default FormExp;
