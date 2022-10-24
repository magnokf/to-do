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
	return (
		<div className="App">
			<>
				<Header />
				<Tasks tasks={tasks} />
			</>
		</div>
	);
}
