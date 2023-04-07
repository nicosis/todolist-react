import React, { useState } from "react";
import "../../styles/ToDoList.css";
import { FiDelete } from "react-icons/fi";

const ToDoList = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container my-2">
      <h1>to do list</h1>
      <input
        className="form-control mb-3"
        type="text"
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentTask.trim()) {
            setTasks([...tasks, currentTask], setCurrentTask(""));
          }
        }}
        value={currentTask}
        maxLength={120}
      />
      <ul className="list-group">
        {tasks.map((item, index) => (
          <li id='li' className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {item}
            <span>
              <FiDelete
                className="trash-icon"
                onClick={() =>
                  setTasks(
                    tasks.filter((_, filterIndex) => index !== filterIndex)
                  )
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <p>{tasks.length} Items left</p>
    </div>
  );
};

export default ToDoList;
