import React, { useState } from "react";
import "../../styles/ToDoList.css";
import { FiDelete } from "react-icons/fi";

const ToDoList = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTrash, setShowTrash] = useState("d-none");

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
          <li
            id="li"
            onMouseEnter={() => setShowTrash("")}
            onMouseLeave={() => setShowTrash("d-none")}
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item}
            <span>
              <FiDelete
                className={`trash-icon ${showTrash}`}
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
      <small>{tasks.length !== 0 && `${tasks.length} Items left`}</small>
    </div>
  );
};

export default ToDoList;
