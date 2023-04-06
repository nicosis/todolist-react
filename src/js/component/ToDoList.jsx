import React, { useState } from "react";

const ToDoList = () => {
  const [currentWord, setCurrentWord] = useState("");
  console.log(currentWord);
  const [words, setWords] = useState([]);
  console.log(words);

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      processInputText();
    }
  }

  return (
    <div className="container bg-light text-dark">
      <h1>todos</h1>
      <input
        type="text"
        onChange={(e) => setCurrentWord(e.target.value)}
        // onClick={() => {
        //   setWords([...words, currentWord]);
        // }}
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

/* 
function App() {
  const [inputText, setInputText] = useState('');

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      processInputText();
    }
  }

  function processInputText() {
    // Aquí puedes procesar el texto ingresado
    console.log('El texto ingresado es:', inputText);
    setInputText('');
  }

  return (
    <div>
      <input type="text" value={inputText} onKeyPress={handleKeyPress} onChange={(e) => setInputText(e.target.value)} />
    </div>
  );
}
 */
