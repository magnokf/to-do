import styles from "./Header.module.css";

import todoLogo from "../assets/rocket.svg";

export function Header() {
	return (
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
		</header>
	);
}
