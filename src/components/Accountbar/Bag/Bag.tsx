import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import bag from '../../../icons/Bag.svg';
import s from './Bag.module.scss';

export const Bag: React.FC = React.memo(() => (
  <NavLink to="/bag" className={({ isActive }) => cn(
    `${s.bag}`,
    { [s.active]: isActive },
  )} >
    <img src={bag} className={s.bag__image} alt="bag" />
  </NavLink>
));
