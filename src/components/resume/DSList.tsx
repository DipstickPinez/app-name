import React from 'react';

export interface DSListProps {
  title: string;
  items: string[];
}

const DSList = (props: DSListProps) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <ul className="inline-list">
        {props.items.map(
          (description, n) => <li key={description + n}>{description}</li>
        )}
      </ul>
    </section>
  );
};

export default DSList;
