import React from 'react';
import s from './ProductsCatalog.module.scss';

import phones from '../../api/phones.json';
import { ProductCard } from '../ProductCard';

console.log(phones);


export const ProductsCatalog: React.FC = React.memo(() => {
  return (
    <section className={s.catalog}>
      {phones.map(phone => (
        <div className={s.catalog__item} key={phone.id}>
          <ProductCard
            phone={phone}
          />
        </div>
      ))}
    </section>
  );
});
