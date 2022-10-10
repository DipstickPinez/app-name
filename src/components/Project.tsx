import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface ProjectParts {
  title: string;
  link: string;
  bulletedList: string[];
  itemDate: string;
}

const ProjectObject = (projectParts: ProjectParts) => {
  const bulletedListLi = projectParts.bulletedList.map(
    description => <li>{description}</li>
  );
  return (
    <section className="item">
      <div>
          <h3>{projectParts.title}</h3>
          |
          <a href={projectParts.link}>{projectParts.link}</a>
      </div>
      <div className="item-date">{projectParts.itemDate}</div>
      <ul>
          {bulletedListLi}
      </ul>
    </section>
  );
};

export default ProjectObject;
