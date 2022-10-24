import styles from "./Task.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

export function Task() {
	return (
		<div className={styles.task}>
			<button className={styles.checkTask}>
				<span className={styles.check} />
			</button>
			<div className={styles.taskBody}>
				<p>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
					Duis vel sed fames integer.
				</p>
			</div>
			<button className={styles.trashButton}>
				<FaRegTrashAlt size={20} />
			</button>
		</div>
	);
}
