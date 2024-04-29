import { render, screen } from '@testing-library/react';
import Greet from "../../src/components/Greet";

describe("Component: Greet", () => {
    it('should render Hello with the name when name is provided', () => {
        const name = "Mosheh";
        render(<Greet name={name} />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/mosheh/i);
        // screen.debug()

    });
    it('should render login button when name is not provided', () => {
        render(<Greet />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
});
