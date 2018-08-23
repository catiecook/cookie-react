import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './nav.css';

export const Nav = () => (
  <section className="nav__container">
    <nav className="nav__items">

      <ul className="nav__logo">
        <li>
          <Link to="/about">Cookie</Link>
        </li>
      </ul>

      <ul className="nav__links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

    </nav>
  </section>

)
