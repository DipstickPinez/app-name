import React from 'react';
import { ExperienceProps } from './Experience';
import Experience from './Experience';

export interface ExperienceArrayProps {
  entries: ExperienceProps[];
}

const ExperienceArray = (props: { expArray: ExperienceArrayProps }) => {
  const { entries } = props.expArray;
  return (
    <div>
      {entries.map(
        (entry) =>
        <Experience
          exp = {entry}
        />
      )}
    </div>
  );
};

export default ExperienceArray;