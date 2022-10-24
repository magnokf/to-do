import { useState } from "react";
import { Header } from "./components/Header";

import { Tasks } from "./components/Tasks";

import "./global.css";

export interface ITask {
	id: number;
	title: string;
	isCompleted: boolean;
}

export function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [newTaskTitle, setNewTaskTitle] = useState("");

	function createNewTask(taskTitle: string) {
		if (!newTaskTitle) return;

		setTasks(oldState => [
			...oldState,
			{
				id: Math.random(),
				title: newTaskTitle,
				isCompleted: false,
			},
		]);
		setNewTaskTitle("");
	}

	function handleCreateNewTask() {
		if (!newTaskTitle) return;

		const newTask = {
			id: Math.random(),
			title: newTaskTitle,
			isCompleted: false,
		};

		setTasks(oldState => [...oldState, newTask]);
		setNewTaskTitle("");
	}

	function handleToggleTaskCompletion(id: number) {
		const updatedTasks = tasks.map(task =>
			task.id === id
				? {
						...task,
						isCompleted: !task.isCompleted,
				  }
				: task
		);

		setTasks(updatedTasks);
	}

	function handleRemoveTask(id: number) {
		const filteredTasks = tasks.filter(task => task.id !== id);

		setTasks(filteredTasks);
	}

	return (
		<div className="App">
			<>
				<Header
					setNewTaskTitle={createNewTask}
					newTaskTitle={""}
					handleCreateNewTask={handleCreateNewTask}
				/>
				<Tasks tasks={tasks} />
			</>
		</div>
	);
}
