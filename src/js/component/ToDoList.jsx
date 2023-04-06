import React, { useState } from "react";

const ToDoList = () => {
  const [currentWord, setCurrentWord] = useState("");
  console.log(currentWord);
  const [words, setWords] = useState([]);
  console.log(words);

  return (
    <div className="container bg-light text-dark">
      <h1>todos</h1>
      <input
        type="text"
        onChange={(e) => setCurrentWord(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" &&
            (setWords([...words, currentWord]), setCurrentWord(""));
        }}
        value={currentWord}
        maxLength={255}
        className="form-control fs-3 mt-2"
        id="word"
      ></input>
      <ul className="list-group">
        {words.map((w) => (
          <li className="list-group-item">{w}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
