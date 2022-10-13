import React from 'react';

export interface LanguageProps {
  title: string;
  titleList: TitleList[];
}

export interface TitleList {
  title: string;
  items: string[];
}

const TList = (props: LanguageProps) => {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.titleList.map(
        (tl, i) => <section key={tl.title + i}>
          <h4>{tl.title}</h4>
          <ul className="inline-list">
            {tl.items.map((item, n) => <li key={item + n}>{item}</li>)}
          </ul>
        </section>
      )}
    </section>
  );
};

export default TList;
