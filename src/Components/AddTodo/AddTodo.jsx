import { useState } from "react";
import './AddTodo.css'; // Import the CSS file for styling
import './AddTodo.validation.css'; // Import validation styles

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={inputText}
        className="add-todo-input"
        placeholder="Add your next todo..."
        required
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