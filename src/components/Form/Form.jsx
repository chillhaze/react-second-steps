import css from './Form.module.css';

export const Form = ({ label, name, tag, onChange }) => (
  <div className={css.container}>
    <h2 className={css.title}>FORM</h2>

    <form action="" type="text" label={label} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name={name}
          onChange={onChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Tag
        <input
          type="text"
          name={tag}
          onChange={onChange}
          className={css.input}
        />
      </label>
    </form>
  </div>
);
