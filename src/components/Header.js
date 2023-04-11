import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Acasă</Link></li>
          <li><Link to="/">Locații</Link></li>
          <li><Link to="/">Sporturi</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Sign Up</Link></li>
          <li><Link to="/">Log In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;