import { useState } from "react";

export function Counter() {
	const [counter, setCounter] = useState(0);
	const [increaseBy, setIncreaseBy] = useState(1);

	return (
		<>
			<input
				placeholder="Increase By"
				value={increaseBy}
				onChange={(event) => setIncreaseBy(+event.target.value)}
			/>
			<div data-testid="increase-label">{counter}</div>
			<button
				data-testid="increase-button"
				onClick={() => setCounter(counter + 1)}
			>
				Increase
			</button>
		</>
	);
}
