import styles from "./Task.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { ITask } from "../App";

interface ITaskProps {
	task: ITask;
}

export function Task({ task }: ITaskProps) {
	return (
		<div className={styles.task}>
			<button className={styles.checkTask}>
				<span className={styles.check} />
			</button>
			<div className={styles.taskBody}>
				<p>{task.title}</p>
			</div>
			<button className={styles.trashButton}>
				<FaRegTrashAlt size={20} />
			</button>
		</div>
	);
}
