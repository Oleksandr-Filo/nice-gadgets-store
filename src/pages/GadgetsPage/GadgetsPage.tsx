import React from 'react';
import { ProductsCatalog } from '../../components/ProductsCatalog';
import s from './GadgetsPage.module.scss';

export const GadgetsPage: React.FC = React.memo(() => (
  <main className={s.gadgetsPage}>
    <div className="container">
      <h1 className={s.gadgetsPage__title}>Gadgets page</h1>

      <ProductsCatalog />
    </div>
  </main>
));
