import { useCallback, useState } from "react";
import "./App.css";
import "./index.css";
import CloseButton from 'react-bootstrap/CloseButton';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const removeTask = useCallback((taskIndex: number) => {
    setTasks(tasks => tasks.filter((_, index) => index !== taskIndex));
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <CloseButton onClick={() => removeTask(index)}/>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default App;