import React from 'react';

interface LanguageProps {
  title: string;
  titleList: TitleList[];
}

interface TitleList {
  title: string;
  items: string[];
}

const TList = (props: LanguageProps) => {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.titleList.map(
        tl => <section>
          <h4>{tl.title}</h4>
          <ul className="inline-list">
            {tl.items.map(item => <li>{item}</li>)}
          </ul>
        </section>
      )}
    </section>
  );
};

export default TList;
