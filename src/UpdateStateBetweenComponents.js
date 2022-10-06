import { useState } from "react";

function MyButton({ count, onClick }) {
	return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function UpdateStateBetweenComponents() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>3. Update State Between Components</h1>
			<MyButton count={count} onClick={handleClick} /> &nbsp;
			<MyButton count={count} onClick={handleClick} />
		</div>
	);
}
