import css from './Input.module.css';

export const Input = ({ label, value, onChange }) => (
  <div className={css.container}>
    <h2 className={css.title}>INPUT</h2>
    <input
      type="text"
      label={label}
      className={css.input}
      value={value}
      onChange={onChange}
    />
  </div>
);
