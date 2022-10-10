import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface LanguageParts {
  title: string;
  experiencedList: string[];
  familiarList: string[];
}

const LanguageObject = (languageParts: LanguageParts) => {
  const experiencedListLi = languageParts.experiencedList.map(
    description1 => <li>{description1}</li>
  );
  const familiarListLi = languageParts.familiarList.map(
    description2 => <li>{description2}</li>
  );
  return (
    <section>
      <h3>{languageParts.title}</h3>
        <section>
          <h4>Experienced</h4>
          <ul className="inline-list">
            {experiencedListLi}
          </ul>
        </section>
        <section>
          <h4>Familiar</h4>
          <ul className="inline-list">
            {familiarListLi}
          </ul>
        </section>
    </section>
  );
};

export default LanguageObject;
