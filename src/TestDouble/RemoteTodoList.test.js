import { render, screen, waitFor } from "@testing-library/react";
import * as http from "use-http";
import RemoteTodoList from "./RemoteTodoList";

describe("Todo List", () => {
	describe("Loading Todos", () => {
		describe("On Error", () => {
			it("renders 'Error!'", async () => {
				// Arrange
				jest.spyOn(http, "useFetch").mockImplementation(() => ({
					error: true,
					response: { ok: false },
					get: () => Promise.resolve([]),
				}));
				render(<RemoteTodoList />);
				const expected = "Error!";

				// Act
				const label = await screen.findByTestId("error-label");
				const actual = label.textContent;

				// Assert
				expect(actual).toEqual(expected);
			});
			it("skips assinging todos", async () => {
				// Arrange
				jest.spyOn(http, "useFetch").mockImplementation(() => ({
					error: true,
					response: { ok: false },
					get: () => Promise.resolve([{ title: "Shouldn't Appear" }]),
				}));
				render(<RemoteTodoList />);
				const expected = 0;

				// Act
				const actual = await waitFor(() => {
					const labels = screen.queryAllByTestId("todo-label");
					return labels.length;
				});

				// Assert
				expect(actual).toEqual(expected);
			});
		});
		it.todo("renders 'Loading...' while data is fetching");
	});
	describe("Add Todo", () => {
		it.todo("Adds todo");
		xit("Ignores adding empty todo", () => {
			// There's a bug in the code.
			// Make this test case find it for you.
		});
		xit("resets enter todo input value", () => {
			// There's a bug in the code.
			// Make this test case find it for you.
		});
	});

	describe("Todo List", () => {
		it.todo("renders todo");
		it.todo("removes todo");
	});

	// Can you think of other test cases?
});
