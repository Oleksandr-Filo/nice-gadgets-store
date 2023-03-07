import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './PageNavLink.module.scss';

type Props = {
  to: string;
  navTitle: string;
};

export const PageNavLink: React.FC<Props> = React.memo(
  ({ to, navTitle }) => (
    <NavLink to={to} className={({ isActive }) => cn(
      `${s.nav__link}`,
      { [s.active]: isActive },
    )} >
      {navTitle}
    </NavLink>
  ),
);
