import { Header } from "./components/Header";

import { Tasks } from "./components/Tasks";

import "./global.css";

export function App() {
	return (
		<div className="App">
			<>
				<Header />
				<Tasks />
			</>
		</div>
	);
}
