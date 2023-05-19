import { FaTrash } from 'react-icons/fa';
import s from '../styles.module.css';
const TodoBody = ({ todos, editTodo, deleteTodo, completedTodo }) => {
  return (
    <>
      {todos && todos.length ? (
        todos.map((todo) => {
          return (
            <div className={s.listItems} key={todo.id}>
              <p>
                <span>
                  <input
                    className={s.span}
                    type="checkbox"
                    onChange={() => completedTodo(todo.id)}
                  />
                </span>
              </p>
              &nbsp;
              <p>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    border: '0px',
                    fontSize: '24px',
                    outline: 'none'
                  }}
                  className={todo.complited ? 'done' : ''}
                  type="text"
                  value={todo.text}
                  onChange={(e) => editTodo(e.target.value, todo.id)}
                />
              </p>
              &nbsp;&nbsp;
              <p>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash />
                </span>
              </p>
            </div>
          );
        })
      ) : (
        <div>
          <h2>Задач нет</h2>
        </div>
      )}
    </>
  );
};

export default TodoBody;
