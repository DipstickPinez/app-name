import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface EducationParts {
  university: string;
  degree: string;
  date: string;
  college: string;
}

const EducationObject = (educationParts: EducationParts) => {
  return (
    <section>
      <h3>{educationParts.university}</h3>
      <section>
          <div className="degree">{educationParts.degree}</div>
          <div className="item-date">{educationParts.date}</div>
          <div>{educationParts.college}</div>
      </section>
    </section>
  );
};

export default EducationObject;
