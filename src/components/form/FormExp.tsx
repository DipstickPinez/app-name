import React, { useState } from 'react';
import { ResumeObject } from 'App';

interface Props {
  resume: ResumeObject;
  setResume: (res: ResumeObject) => void;
  setPage: (page: number) => void;
}
function FormExp(props: Props) {
  const { resume, setResume, setPage } = props;
  const experience = resume?.experience ?? undefined;

  const [org, setOrg] = useState<string>(experience?.org ?? "");
  const [title, setTitle] = useState<string>(experience?.title ?? "");
  const [href, setHref] = useState<string>(experience?.href ?? "");
  const [link, setLink] = useState<string>(experience?.link ?? "");
  const [description, setDescription] = useState<string[]>(experience?.description ?? [""]);
  const [date, setDate] = useState<string>(experience?.date ?? "");
  const [location, setLocation] = useState<string>(experience?.location ?? "");

  const onSubmit = () => {
    const newResume = { ...resume };
    newResume.experience = { org, title, href, link, description, date, location };
    setResume(newResume);
  }

  const changeDescription = (val: string, index?: number) => {
    const newDescription = [...description];
    newDescription[index ?? newDescription.length] = val;
    setDescription(newDescription);
  }

  const removeDescriptionLine = () => {
    const newDescription = [...description];
    newDescription.pop();
    setDescription(newDescription);
  }

  return (
    <>
    <h2>Prior Experience and Organizations</h2>
      <form>
        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="org">Organization</label>
            <input className="textInput" id="org" type="text" value={org} onChange={e => setOrg(e.target.value)} />
          </div>
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="title">Title</label>
            <input className="textInput" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>

        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="date">Date</label>
            <input className="textInput" id="date" type="text" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="location">Location</label>
            <input className="textInput" id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
          </div>
        </div>

        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="description">Description</label>
            {(description.map((s, index) => <input className="textInput" type="text" value={description[index]} onChange={e => changeDescription(e.target.value, index)} />))}
            <button onClick={e => { e.preventDefault(); changeDescription(""); }}>Add Line</button>
            <button disabled={!(description.length > 1)} onClick={e => { e.preventDefault(); removeDescriptionLine();}}>Remove Line</button>
          </div>
        </div>
      </form>
    <h2> Prior Projects </h2>
      <form>
        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="org">Organization</label>
            <input className="textInput" id="org" type="text" value={org} onChange={e => setOrg(e.target.value)} />
          </div>
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="title">Title</label>
            <input className="textInput" id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>

        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="date">Date</label>
            <input className="textInput" id="date" type="text" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="location">Location</label>
            <input className="textInput" id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} />
          </div>
        </div>

        <div className="inputGroup">
          <div className="inputBlock">
            <label className="inputLabel" htmlFor="description">Description</label>
            {(description.map((s, index) => <input className="textInput" type="text" value={description[index]} onChange={e => changeDescription(e.target.value, index)} />))}
            <button onClick={e => { e.preventDefault(); changeDescription(""); }}>Add Line</button>
            <button disabled={!(description.length > 1)} onClick={e => { e.preventDefault(); removeDescriptionLine();}}>Remove Line</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormExp;
