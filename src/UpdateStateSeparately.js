import { useState } from "react";

function MyButton() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default function UpdateStateSeparately() {
	return (
		<div>
			<h1>2. Update Component State Separately</h1>
			<MyButton /> &nbsp;
			<MyButton />
		</div>
	);
}
