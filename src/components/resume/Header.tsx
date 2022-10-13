import React from 'react';

export interface HeaderProps {
  name: string;
  github: string;
  location: string;
  email: string;
  phoneNumber: string;
}

const Header = (props: { header: HeaderProps }) => {
  const { name, github, location, email, phoneNumber } = props.header;
  return (
    <header>
      <h1>{name}</h1>
      <ul className="header-info">
        <li>
          <img src="img/github.png" alt="github" />
          <span>{github}</span>
        </li>
        <li>
          <img src="img/location.png" alt="location" />
          <span>{location}</span>
        </li>
        <li>
          <img src="img/mail.png" alt="email" />
          <span>{email}</span>
        </li>
        <li>
          <img src="img/phone.png" alt="phone number" />
          <span>{phoneNumber}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;