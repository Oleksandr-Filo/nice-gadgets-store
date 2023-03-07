import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo.svg';
import s from './Logo.module.scss';

export const Logo: React.FC = React.memo(() => {
  return (
    <NavLink to="/" className={s.logo}>
      <img src={logo} className={s.logo__image} alt="Nice Gadgets Logo" />
    </NavLink>
  );
});
