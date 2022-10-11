import React from 'react';

interface ExperienceProps {
  org: string;
  title?: string;
  href?: string;
  link?: string;
  description: string[];
  date: string;
  location?: string;
}

const Experience = (props: ExperienceProps) => {
  return (
    <section className="item">
      <div className="item-header">
        <h3>{props.org}</h3>
        {props.title && <span className="vert-bar" />}
        {props.title}
        {props.href && <span className="vert-bar" />}
        <span>
          <a href={props.href}>{props.link ?? props.href}</a>
        </span>
      </div>
      <div className="item-date">
        {props.date}
        {props.location && <span className="vert-bar" />}
        {props.location}
      </div>
      <ul>
        {props.description.map(
          description => <li>{description}</li>
        )}
      </ul>
    </section>
  );
};

export default Experience;