import React from 'react';

export default function MainContent() {
  return (
    <main className="main-content">
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="bullet-points">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <svg className="main-bg-icon" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.1" fill="#33373E"/>
        <g stroke="#33373E" strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    </main>
  );
}