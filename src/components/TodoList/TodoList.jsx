import css from './TodoList.module.css';

export const TodoList = ({
  todos,
  deleteTodo,
  totalTodoCount,
  comletedTodosCount,
}) => (
  <div className={css.wrapper}>
    <div>
      <p>Общее количество ToDo: {totalTodoCount}</p>
      <p>Кол-во выполненых ToDo: {comletedTodosCount}</p>
    </div>
    <ul className={css.Todolist}>
      {todos.map(({ id, text, complited }) => (
        <li key={id} className={css.Todolist__item}>
          <p className={css.Todolist__text}>{text}</p>
          <button onClick={() => deleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
);
