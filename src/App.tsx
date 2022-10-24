import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSaveLocalStorage(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function createNewTask(taskTitle: string) {
    setTasksAndSaveLocalStorage([
      ...tasks,
      {
        //random id
        id: Math.random().toString(36).substr(2, 9),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function handleRemoveTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSaveLocalStorage(newTasks);
  }

  function handleToggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSaveLocalStorage(newTasks);
  }

  return (
    <>
      <Header oncreateNewTask={createNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={handleRemoveTaskById}
        onComplete={handleToggleTaskCompletedById}
      />
    </>
  );
}

export default App;
