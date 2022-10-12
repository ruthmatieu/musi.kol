import { render, screen } from "@testing-library/react";
import Home from "../index";

describe("Home", () => {
    it("shoulder render the Spotify login page for authentication", () => {
        render(<Home />);
        const buttonCTA = screen.getByText(/Login to Spotify/i);
        expect(buttonCTA).toBeInTheDocument();
    })
})