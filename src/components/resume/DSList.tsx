import React from 'react';

export interface DSListProps {
  title: string;
  items: TitleList[];
}

export interface TitleList {
  subtitle?: string;
  items: string[];
}

const DSList = (props: DSListProps) => {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.items.map(tl =>
        <section key={props.title + tl.subtitle}>
          {tl.subtitle && <h4>{tl.subtitle}</h4>}
          <ul className="inline-list">
            {tl.items.map(
              s => <li key={s}>{s}</li>
            )}
          </ul>
        </section>
      )}
    </section>
  );
};

export default DSList;
