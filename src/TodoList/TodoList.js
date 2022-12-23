import React, { useState } from "react";
export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	function addTodo() {
		if (todo === "") {
			return;
		}
		setTodos([...todos, todo]);
		setTodo("");
	}

	function removeTodo(todoIndex) {
		const newTodos = todos.filter((todo, index) => todoIndex !== index);
		setTodos(newTodos);
	}

	return (
		<>
			<input
				value={todo}
				placeholder="enter task"
				onChange={(event) => setTodo(event.target.value)}
			></input>
			<button onClick={() => addTodo()}>add</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{/* add data-testid */}
						<span>{todo}</span>
						<button onClick={() => removeTodo(index)}>Remove</button>
					</li>
				))}
			</ul>
		</>
	);
}
