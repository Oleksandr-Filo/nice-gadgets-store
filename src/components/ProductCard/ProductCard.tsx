import React from 'react';
import { Phone } from '../../types/Phone';
import s from './ProductCard.module.scss';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = React.memo(({ phone }) => {
  const BASE_URL = 'https://raw.githubusercontent.com/Oleksandr-Filo/nice-gadgets-store/master/src/';

  return (
    <article className={s.card}>
      <img
        src={`${BASE_URL}${phone.image}`}
        className={s.card__image}
        alt={phone.name}
      />

      <h2 className={s.card__title}>{phone.name}</h2>

      <h3 className={s.card__price}>{`$${phone.price}`}</h3>

      <div className={s.card__separator}></div>

      <div className={s.card__screen_params}>
        <p className={s.card__screen_title}>Screen</p>

        <p className={s.card__screen_size}>{phone.screen}</p>
      </div>

      <div className={s.card__capacity_params}>
        <p className={s.card__capacity_title}>Capacity</p>

        <p className={s.card__capacity_size}>{phone.capacity}</p>
      </div>

      <div className={s.card__ram_params}>
        <p className={s.card__ram_title}>RAM</p>

        <p className={s.card__ram_size}>{phone.ram}</p>
      </div>

      <button
        type="button"
        className={s.card__buy_btn}
      >
        Buy
      </button>
    </article>
  );
});
