import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

export const Nav = () => (
  <section>
    <nav>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/explained">Explained</Link>
        </li>
      </ul>
    </nav>
  </section>

)
