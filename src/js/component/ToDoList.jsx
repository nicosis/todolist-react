import React, { useState } from "react";
import "../../styles/ToDoList.css";
import { FiDelete } from "react-icons/fi";

const ToDoList = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [currentFilterTask, setCurrentFilterTask] = useState("");
  console.log(currentFilterTask);

  const filteredTasks = tasks.filter((item) => item.toLowerCase().includes(currentFilterTask.toLowerCase()))

  return (
    <div className="container my-5 w-50">
      <h1>to do list</h1>
      <input
        className="form-control mb-3"
        type="text"
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentTask.trim()) {
            setTasks([currentTask, ...tasks]), setCurrentTask("");
          }
        }}
        value={currentTask} // esto es solo para actualizar el input a ""?
        placeholder="Nueva tarea"
        maxLength={120}
      />
      <input
        className="form-control mb-3"
        type="text"
        onChange={(e) => {
          setCurrentFilterTask(e.target.value);
        }}
        placeholder="Filtrar tarea"
        maxLength={120}
      />
      <ul className="list-group">
        {filteredTasks.map((item, index) => (
          <li
            id="li"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item}
            <span>
              {hoveredIndex === index && (
                <FiDelete
                  className={`trash-icon`}
                  onClick={() =>
                    setTasks(
                      filteredTasks.filter((_, filterIndex) => index !== filterIndex)
                    )
                  }
                />
              )}
            </span>
          </li>
        ))}
      </ul>
      <small>{tasks.length !== 0 && `${filteredTasks.length} Items left`}</small>
    </div>
  );
};

export default ToDoList;
