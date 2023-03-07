import React from 'react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import s from './Header.module.scss';

export const Header: React.FC = React.memo(() => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Logo />
      </div>

      <Navbar />

      <ul>
        <li>
          <a href="">Account</a>
        </li>

        <li>
          <a href="">Sign in</a>
        </li>

        <li>
          <a href="">Sign up</a>
        </li>
      </ul>
    </header>
  );
});