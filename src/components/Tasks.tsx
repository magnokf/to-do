import { ITask } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface ITasksProps {
	tasks: ITask[];
}

export function Tasks({ tasks }: ITasksProps) {
	const numberOfCompletedTasks = tasks.filter(task => task.isCompleted).length;
	const numberOfTasks = tasks.length;

	return (
		<section className={styles.tasks}>
			<header className={styles.header}>
				<div>
					<p>Minhas tarefas</p>
					<span>{tasks.length}</span>
				</div>
				<div>
					<p className={styles.textPurple}>Concluídas</p>
					<span>
						{numberOfCompletedTasks} de {numberOfTasks}
					</span>
				</div>
			</header>
			<div className={styles.list}>
				{tasks.map(task => (
					<Task
						key={task.id}
						task={task}
					/>
				))}
			</div>
		</section>
	);
}
