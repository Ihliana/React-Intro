import {render, screen} from "@testing-library/react"

import MainContent from "./MainContent"


describe("renders MainContent correctly", ()=> {
    test("renders MainContent elements", () => {
        render(<MainContent />)

        const mainElement = screen.getByRole("main")
        expect(mainElement).toBeInTheDocument()

        const headingElement = screen.getByRole("heading", {
            level: 1
        })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement).toHaveClass("main--title")
    })

    test('renders list of facts', () => {
        render(<MainContent />)

        //check if the list is in the document and has the correct class
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
        expect(listElement).toHaveClass("main--facts")

        //chekc if there are five list items
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(5)
    })

    test('each list item contains the correct text content', () => {
        render(<MainContent />)

        //define the expected text content for each list item
        const facts = [
            'Was first released in 2013',
            'Was originally created by Jordan Walke',
            'Has well over 100K stars on Github',
            'Is maintained by Facebook',
            'Powers thousands of enterprise apps, including mobile apps'
        ]

        //check their text content 
        const listItems = screen.getAllByRole('listitem')
        listItems.forEach((item, idx) => {
            expect(item).toHaveTextContent(facts[idx])
        })
    })
})