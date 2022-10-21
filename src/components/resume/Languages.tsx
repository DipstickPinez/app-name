import React from 'react';

export interface LanguageProps {
  title: string;
  items: string[];
}

const Languages = (props: LanguageProps) => {
  return (
    <>
      <h4>{props.title}</h4>
      <ul className="inline-list">
        {props.items.map(
          description => <li key={description}>{description}</li>
        )}
      </ul>
    </>
  );
};

export default Languages;
