import { useState } from "react";
import "./Todo.css";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="input"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Write Something"
      />
      <button
        className="inputbtn"
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};
