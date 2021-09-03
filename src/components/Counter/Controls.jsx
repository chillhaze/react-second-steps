import React from 'react';
import css from './Controls.module.css';

export const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.btnWrapper}>
    <button type="button" className={css.btn} onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" className={css.btn} onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);
