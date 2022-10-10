import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface InlineListParts {
  title: string;
  inlineList: string[];
}

const InlineListObject = (inlineListParts: InlineListParts) => {
  const inlineListLi = inlineListParts.inlineList.map(
    description => <li>{description}</li>
  );
  return (
    <section>
      <h3>{inlineListParts.title}</h3>
        <ul className="inline-list">
          {inlineListLi}
        </ul>
    </section>
  );
};

export default InlineListObject;
