import React from 'react';

export interface ExperienceProps {
  org: string;
  title?: string;
  href?: string;
  link?: string;
  description: string[];
  date: string;
  location?: string;
}

const Experience = (props: { exp: ExperienceProps }) => {
  const { org, title, href, link, description, date, location } = props.exp;

  return (
    <section className="item">
      <div className="item-header">
        <h3>{org}</h3>
        {title && <span className="vert-bar" />}
        {title}
        {href && <span className="vert-bar" />}
        <span>
          <a href={href}>{link ?? href}</a>
        </span>
      </div>
      <div className="item-date">
        {date}
        {location && <span className="vert-bar" />}
        {location}
      </div>
      <ul>
        {description.map(
          description => <li key={description}>{description}</li>
        )}
      </ul>
    </section>
  );
};

export default Experience;