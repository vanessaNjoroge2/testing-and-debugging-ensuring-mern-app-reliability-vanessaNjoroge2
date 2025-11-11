import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header or main content', () => {
  render(<App />);
  
  // Check if some text from your App is in the document
  const headerElement = screen.getByText(/Bug Tracker/i);
  expect(headerElement).toBeInTheDocument();
});
