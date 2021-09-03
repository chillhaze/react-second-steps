import css from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }) => (
  <ul className={css.Todolist}>
    {todos.map(({ id, text, complited }) => (
      <li key={id} className={css.Todolist__item}>
        <p className={css.Todolist__text}>{text}</p>
        <button onClick={() => deleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);
