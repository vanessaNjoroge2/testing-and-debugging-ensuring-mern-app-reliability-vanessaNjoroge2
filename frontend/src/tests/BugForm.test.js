import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BugForm from '../components/BugForm';
import axios from 'axios';

jest.mock('axios'); // Mock axios used by the service

describe('BugForm Component', () => {
  it('renders the form correctly', () => {
    render(<BugForm onBugCreated={jest.fn()} />);
    expect(screen.getByPlaceholderText(/Bug title/i)).toBeInTheDocument();
    expect(screen.getByText(/Report Bug/i)).toBeInTheDocument();
  });

  it('submits the form and calls API', async () => {
    const mockResponse = { data: { title: 'Test Bug', description: 'Bug description' } };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(<BugForm onBugCreated={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/Bug title/i), {
      target: { value: 'Test Bug' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Bug description/i), {
      target: { value: 'Bug description' }
    });

    fireEvent.click(screen.getByText(/Report Bug/i));

    // Check axios.post called with correct data (via service)
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/bugs', {
      title: 'Test Bug',
      description: 'Bug description'
    }));
  });
});
