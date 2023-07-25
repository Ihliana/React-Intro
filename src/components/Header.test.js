import {render, screen} from "@testing-library/react"

import Header from "./Header"


describe("Header component testing suite", () => {
    test('renders header elements', () => {
        render(<Header />)

        //specific elements 

        const h3Heading = screen.getByRole('heading', {
            level: 3
        })
        const h4Heading = screen.getByRole("heading", {
            level: 4
        })
        const reactLogo = screen.getByAltText("React Logo")
        const reactLogoText = screen.getByText(/React Facts/i)
        const reactCourseTitle = screen.getByText(/React Course - Project 1/i)
    

        //assertions 
        expect(h3Heading).toBeInTheDocument()
        expect(h4Heading).toBeInTheDocument()
        expect(reactLogo).toBeInTheDocument();
        expect(reactLogoText).toBeInTheDocument();
        expect(reactCourseTitle).toBeInTheDocument();

    })

    test("header's CSS classes", () => {
        const {container} = render(<Header />)

        expect(container.querySelector('.nav')).toHaveClass('nav')
        expect(container.querySelector('.nav--icon')).toHaveClass('nav--icon')
        expect(container.querySelector('.nav--title')).toHaveClass('nav--title')
    })



})