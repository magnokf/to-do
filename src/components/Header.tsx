import styles from "./Header.module.css";

import todoLogo from "../assets/rocket.svg";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

interface IHeaderProps {
	newTaskTitle: string;
	setNewTaskTitle: (value: string) => void;
	handleCreateNewTask: () => void;
}

export function Header({ newTaskTitle }: IHeaderProps) {
	const [title, setTitle] = useState(newTaskTitle);

	function handleCreateNewTask(event: React.FormEvent) {
		event.preventDefault();
		if (!newTaskTitle) return;

		const newTask = {
			id: Math.random(),
			title: newTaskTitle,
			isCompleted: false,
		};

		setTasks(oldState => [...oldState, newTask]);
		setTitle("");
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value);
	}

	return (
		<>
			<header className={styles.header}>
				<img
					className={styles.logo}
					src={todoLogo}
					alt=""
				/>
				<strong className={styles.logoText}>
					<span>to</span>
					<span>do</span>
				</strong>
				<form
					className={styles.newTaskForm}
					action="">
					<input
						type="text"
						placeholder="Criar nova tarefa"
						value={title}
						onChange={handleInputChange}
					/>
					<button
						type="submit"
						onSubmit={handleCreateNewTask}>
						Criar
						<BsPlusCircle size={20} />
					</button>
				</form>
			</header>
		</>
	);
}
function setTasks(arg0: (oldState: any) => any[]) {
	throw new Error("Function not implemented.");
}
