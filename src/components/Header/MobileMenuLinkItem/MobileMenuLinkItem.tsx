import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../../icons/Menu.svg';
import s from './MobileMenuLinkItem.module.scss';

export const MobileMenuLinkItem: React.FC = React.memo(() => (
  <NavLink to="/menu" className={s.menu} >
    <img src={menu} className={s.menu__image} alt="menu" />
  </NavLink>
));
