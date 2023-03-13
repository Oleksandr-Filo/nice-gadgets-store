import React from 'react';
import s from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = React.memo(() => (
  <main className={s.notFoundPage}>
    <div className="container">
      <h1 className={s.notFoundPage__title}>Page not found</h1>
    </div>
  </main>
));
