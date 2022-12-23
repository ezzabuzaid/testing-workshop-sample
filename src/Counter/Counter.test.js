import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
	it("increases the counter label by 1", () => {
		// Arrange
		render(<Counter />);
		const expected = "1";
		const button = screen.getByTestId("increase-button");

		// Act
		userEvent.click(button);
		const actual = screen.getByTestId("increase-label").textContent;

		// Assert
		expect(actual).toEqual(expected);
	});
});
