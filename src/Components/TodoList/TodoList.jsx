import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import './TodoList.css'; // Import the CSS file for styling

function TodoList() {
  const { list, setList } = useContext(TodoContext);

  return (
    <div className="todo-list-container" role="region" aria-label="Todo list">
      {list.length > 0 ? (
        <ul className="todo-list" role="list">
          {list.map((todo) => (
            <li key={todo.id} role="listitem">
              <Todo
                todoData={todo.todoData}
                isFinished={todo.finished}
                id={todo.id}
                changeFinished={(isFinished) => {
                  const updatedList = list.map((t) => {
                    if (t.id === todo.id) {
                      t.finished = isFinished;
                    }
                    return t;
                  });
                  setList(updatedList);
                }}
                onDelete={() => {
                  const updatedList = list.filter((t) => t.id !== todo.id);
                  setList(updatedList);
                }}
                onEdit={(todoText) => {
                  const updatedList = list.map((t) => {
                    if (t.id === todo.id) {
                      t.todoData = todoText;
                    }
                    return t;
                  });
                  setList(updatedList);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-todos" role="alert">No todos available</div>
      )}
    </div>
  );
}

export default TodoList;