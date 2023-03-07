import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  navTitle: string;
};

export const PageNavLink: React.FC<Props> = React.memo(
  ({ to, navTitle }) => (
    <NavLink to={to} >
      {navTitle}
    </NavLink>
  ),
);
