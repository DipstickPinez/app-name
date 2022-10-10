import React from 'react';

interface DSListProps {
  title: string;
  items: string[];
}

const DSList = (props: DSListProps) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <ul className="inline-list">
        {props.items.map(
          description => <li>{description}</li>
        )}
      </ul>
    </section>
  );
};

export default DSList;
