import { useEffect, useState } from "react";
import * as http from "use-http";
export default function RemoteTodoList() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const { get, post, response, loading, error } = http.useFetch(
		"https://jsonplaceholder.typicode.com"
	);

	useEffect(() => {
		loadInitialTodos();
	}, []);

	async function loadInitialTodos() {
		const initialTodos = await get("/todos");
		if (response.ok) {
			setTodos(initialTodos.slice(0, 10));
		}
	}

	async function addTodo() {
		const newTodo = await post("/todos", { title: todo });
		if (response.ok) {
			setTodos([...todos, newTodo]);
		}
	}

	return (
		<>
			<input
				value={todo}
				placeholder="enter task"
				onChange={(event) => setTodo(event.target.value)}
			/>
			<button onClick={() => addTodo()}>Add Todo</button>
			{error && <span data-testid="error-label">Error!</span>}
			{loading && <span>Loading...</span>}
			{todos.map((todo, index) => (
				<div data-testid="todo-label" key={index}>
					{todo.title}
				</div>
			))}
		</>
	);
}
