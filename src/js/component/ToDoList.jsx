import React, { useState } from "react";
import "../../styles/ToDoList.css";
import { FaBeer } from "react-icons/fa";

const ToDoList = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <h1>to do list</h1>
      <input
        type="text"
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentTask.trim()) {
            setTasks([...tasks, currentTask], setCurrentTask(""));
          }
        }}
        value={currentTask}
        maxLength={120}
        className="form-control"
      />
      <ul className="list-group">
        {tasks.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}{" "}
            <FaBeer className="text-end"
              onClick={() =>
                setTasks(
                  tasks.filter((_, filterIndex) => index !== filterIndex)
                )
              }
            />
          </li>
        ))}
      </ul>
      <p>{tasks.length} Item left</p>
    </div>
  );
};

export default ToDoList;
