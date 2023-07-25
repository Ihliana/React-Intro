import {screen, render} from "@testing-library/react"

import Footer from './Footer'


describe("renders Footer component correctly", () => {
    test('renders footer element', () => {
        render(<Footer />)

        //check if the footer element is present
        const footerElement = screen.getByRole('contentinfo')
        expect(footerElement).toBeInTheDocument()

        //check if the footer contains the correct text content
        const year = new Date().getFullYear();
        const expectedText = `@ ${year} Scrimba`
        expect(footerElement).toHaveTextContent(expectedText)
    })
})