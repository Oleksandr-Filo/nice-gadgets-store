import React from 'react';
import { PageNavLink } from '../PageNavLink';
import s from './Navbar.module.scss';

export const Navbar: React.FC = React.memo(() => (
  <nav className={s.nav}>
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <PageNavLink to="/" navTitle="Home" />
      </li>

      <li>
        <PageNavLink to="/gadgets" navTitle="Gadgets" />
      </li>
    </ul>
  </nav>
));
