import React from 'react';
import { Accountbar } from '../Accountbar';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import s from './Header.module.scss';
import { MobileMenuLinkItem } from './MobileMenuLinkItem';

export const Header: React.FC = React.memo(() => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Logo />
      </div>

      <Navbar />

      <Accountbar />

      <div className={s.header__menu}>
        <MobileMenuLinkItem />
      </div>
    </header>
  );
});
