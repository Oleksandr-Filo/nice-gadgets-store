import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './AccountbarLink.module.scss';

interface Props {
  to: string;
  title: string;
};

export const AccountbarLink: React.FC<Props> = React.memo(
  ({ to, title }) => (
    <NavLink to={to} className={({ isActive }) => cn(
      `${s.accbar__link}`,
      { [s.active]: isActive },
    )} >
      {title}
    </NavLink>
  ),
);
