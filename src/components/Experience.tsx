import React from 'react';
import logo from './logo.svg';
import './styles.css';

interface ExperienceParts {
    title: string;
    subtitle: string;
    bulletedList: string[];
    itemDate: string;
}

const ExperienceObject = (experienceParts: ExperienceParts) => {
    const bulletedListLi = experienceParts.bulletedList.map(
        description => <li>{description}</li>
    );
    return (
        <section className="item">
            <div className="item-header">
                <h3>{experienceParts.title}</h3>
                <span>| {experienceParts.subtitle}</span>
            </div>
            <div className="item-date">{experienceParts.itemDate}</div>
            <ul>
                {bulletedListLi}
            </ul>
        </section>
    );
};

export default ExperienceObject;