import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const Navbar: React.FC = React.memo(() => (
  <nav>
    <ul>
      <li>
        <PageNavLink to="/" navTitle="Home" />
      </li>

      <li>
        <PageNavLink to="/gadgets" navTitle="Gadgets" />
      </li>
    </ul>
  </nav>
));
