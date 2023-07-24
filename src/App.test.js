import { render, screen } from '@testing-library/react';
import App from './App';




describe("App renders corretly", () =>{

  test('renders page heading', () => {
    render(<App />);
    
    const pageHeading = screen.getByRole('heading', {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();


    const headingContent = screen.getByText("Fun facts about React")
    expect(headingContent).toBeInTheDocument();

  });





})
