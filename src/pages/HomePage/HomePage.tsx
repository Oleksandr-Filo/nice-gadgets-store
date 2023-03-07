import React from 'react';
import s from './HomePage.module.scss';

export const HomePage: React.FC = React.memo(() => (
  <h1 className={s.homePage}>My future gadgets store home page</h1>
));
