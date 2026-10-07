import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        {/* أيقونة الرياكت صغيرة للـ Navbar */}
        <svg className="nav-icon" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
        <h3 className="nav-title">ReactFacts</h3>
      </div>
    </nav>
  );
}