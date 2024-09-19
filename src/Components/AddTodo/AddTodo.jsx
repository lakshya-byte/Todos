import { useState } from "react";
import './AddTodo.css'; // Import the CSS file for styling

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={inputText}
        className="add-todo-input"
        placeholder="Add your next todo..."
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className={`add-todo-button ${inputText.length === 0 ? 'disabled' : ''}`}
        disabled={inputText.length === 0}
        onClick={() => {
          updateList(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
