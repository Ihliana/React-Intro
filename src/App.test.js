import { render, screen } from '@testing-library/react';
import App from './App';




describe("App renders corretly", () =>{

  test('renders React logo with correct attributes', () => {
    render(<App />)

    const logoElement = screen.getByAltText("React Logo")

    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute("src", 'react-logo.png')
    expect(logoElement).toHaveAttribute('width', '40px')
  })

  test('renders page heading', () => {
    render(<App />);
    
    const pageHeading = screen.getByRole('heading', {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();
    expect(pageHeading).toHaveTextContent("Fun facts about React");

  });

  test('renders all the fun facts', () => {
    render(<App />)

    const funFacts = screen.getAllByRole("listitem")

    const expectedFacts = [
      'Was first released in 2013',
      'Was originally created by Jordan Walke',
      'Has well over 100K stars on Github',
      'Is maintained by Facebook',
      'Powers thousands of enterprise apps, including mobile apps',
    ];

    funFacts.forEach((fact, index) => {
      expect(fact).toHaveTextContent(expectedFacts[index])
    })
  })


})
