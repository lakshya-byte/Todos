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
        aria-label={isFinished ? "Mark as incomplete" : "Mark as complete"}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          className="todo-edit-input"
          onChange={(e) => setEditText(e.target.value)}
          aria-label="Edit todo"
        />
      ) : (
        <span className="todo-text">{todoData}</span>
      )}

      <button className="todo-delete-btn" onClick={onDelete} aria-label="Delete todo">
        Delete
      </button>

      <button
        className={`todo-edit-btn ${isEditing ? 'save' : ''}`}
        onClick={() => {
          setIsEditing(!isEditing);
          onEdit(editText);
        }}
        aria-label={isEditing ? "Save todo" : "Edit todo"}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
    </div>
  );
}

export default Todo;