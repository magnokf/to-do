import styles from "./Header.module.css";

import todoLogo from "../assets/rocket.svg";
import { BsPlusCircle } from "react-icons/bs";

export function Header() {
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
					/>
					<button type="submit">
						Criar
						<BsPlusCircle size={20} />
					</button>
				</form>
			</header>
		</>
	);
}
