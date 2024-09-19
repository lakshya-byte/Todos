import { useState } from "react";
import './Todo.css'; // Import the CSS file for styling

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div className={`todo-item ${finished ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          className="todo-edit-input"
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="todo-text">{todoData}</span>
      )}

      <button className="todo-delete-btn" onClick={onDelete}>
        Delete
      </button>

      <button
        className={`todo-edit-btn ${isEditing ? 'save' : ''}`}
        onClick={() => {
          setIsEditing(!isEditing);
          onEdit(editText);
        }}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
    </div>
  );
}

export default Todo;
