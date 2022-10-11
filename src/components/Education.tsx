import React from 'react';

interface EducationProps {
  university: string;
  degree: string;
  date: string;
  college: string;
}

const Education = (educationParts: EducationProps) => {
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

export default Education;
