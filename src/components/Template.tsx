import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface TemplateParts {
  title: string;
  link: string;
  bulletedList: string[];
  itemDate: string;
}

const TemplateObject = (templateParts: TemplateParts) => {
  const bulletedListLi = templateParts.bulletedList.map(
    description => <li>{description}</li>
  );
  return (
    <section className="item">
      <div>
          <h3>{templateParts.title}</h3>
          |
      </div>
      <div className="item-date">{templateParts.itemDate}</div>
      <ul>
          {bulletedListLi}
      </ul>
    </section>
  );
};

export default TemplateObject;
