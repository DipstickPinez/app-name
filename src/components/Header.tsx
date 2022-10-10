import React from 'react';
import logo from './logo.svg';
import './styles.css';
import './github.png';
import './location.png';
import './mail.png';
import './phone.png';

interface HeaderParts {
    userName: string;
    githubUsername: string;
    locationName: string;
    emailName: string;
    phoneNumber: string;
}

const HeaderObject = (headerParts: HeaderParts) => {
    return (
        <header>
            <h1>{headerParts.userName}</h1>
            <ul className="header-info">
                <li>
                    <img src="github.png"/>
                    <span>{headerParts.githubUsername}</span>
                </li>
                <li>
                    <img src="location.png"/>
                    <span>{headerParts.locationName}</span>
                </li>
                <li>
                    <img src="mail.png"/>
                    <span>{headerParts.emailName}</span>
                </li>
                <li>
                    <img src="phone.png"/>
                    <span>{headerParts.phoneNumber}</span>
                </li>
            </ul>
        </header>
    );
}

export default HeaderObject;