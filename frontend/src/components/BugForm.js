// frontend/src/components/BugForm.js
import { useState } from 'react';
import { createBug } from '../services/bugService';

function BugForm({ onBugCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!title.trim() || !description.trim()) {
      setError('Both title and description are required.');
      return;
    }

    try {
      const res = await createBug({ title, description });
      onBugCreated(res.data); // update parent state
      setTitle('');           // clear form
      setDescription('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to create bug. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px', padding: '5px' }}
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px', height: '80px', padding: '5px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ padding: '5px 10px' }}>Report Bug</button>
    </form>
  );
}

export default BugForm;
