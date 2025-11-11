import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';

describe('BugList Component', () => {
  it('renders a list of bugs when provided via props', async () => {
    const mockBugs = [
      { _id: '1', title: 'Bug One', description: 'First bug' },
      { _id: '2', title: 'Bug Two', description: 'Second bug' }
    ];

    // Provide bugs via props and a dummy setBugs function
    render(<BugList bugs={mockBugs} setBugs={jest.fn()} />);

    for (let bug of mockBugs) {
      expect(screen.getByText(bug.title)).toBeInTheDocument();
      expect(screen.getByText(bug.description)).toBeInTheDocument();
    }
  });
});
