import React from 'react';
import s from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = React.memo(() => (
  <h1 className={s.notFoundPage}>Page not found</h1>
));
