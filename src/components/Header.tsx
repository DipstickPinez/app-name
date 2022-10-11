import React from 'react';

interface HeaderProps {
  name: string;
  github: string;
  location: string;
  email: string;
  phoneNumber: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <h1>{props.name}</h1>
      <ul className="header-info">
        <li>
          <img src="img/github.png" alt="github" />
          <span>{props.github}</span>
        </li>
        <li>
          <img src="img/location.png" alt="location" />
          <span>{props.location}</span>
        </li>
        <li>
          <img src="img/mail.png" alt="email" />
          <span>{props.email}</span>
        </li>
        <li>
          <img src="img/phone.png" alt="phone number" />
          <span>{props.phoneNumber}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;