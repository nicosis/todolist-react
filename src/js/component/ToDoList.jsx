import React, { useState } from "react";
import "../../styles/ToDoList.css";

const ToDoList = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [words, setWords] = useState([]);

  return (
    <div className="container">
      <h1>to do list</h1>
      <input
        type="text"
        onChange={(e) => setCurrentWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentWord.trim()) {
            setWords([...words, currentWord], setCurrentWord(""));
          }
        }}
        value={currentWord}
        maxLength={120}
        className="form-control"
      />
      <ul className="list-group">
        {words.map((w) => (
          <li className="list-group-item">{w}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

