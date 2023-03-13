import React from 'react';
import s from './HomePage.module.scss';

export const HomePage: React.FC = React.memo(() => (
  <main className={s.homePage}>
    <div className="container">
      <h1 className={s.homePage__title}>
        My future gadgets store home page
      </h1>
    </div>
  </main>
));
