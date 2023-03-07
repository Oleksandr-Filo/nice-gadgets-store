import React from 'react';
import { AccountbarLink } from '../AccountbarLink';
import s from './Accountbar.module.scss';

export const Accountbar: React.FC = React.memo(() => (
  <ul className={s.accbar}>
    <li className={s.accbar__item}>
      <AccountbarLink to="./account" title="Account" />
    </li>

    <li className={s.accbar__item}>
      <AccountbarLink to="./login" title="Sign in" />
    </li>

    <li className={s.accbar__item}>
      <AccountbarLink to="./register" title="Sign up" />
    </li>
  </ul>
));
