// frontend/src/components/BugList.js
import { useEffect } from 'react';
import { getBugs, deleteBug, updateBug } from '../services/bugService';

function BugList({ bugs, setBugs }) {

  // Fetch bugs only if list is empty
  useEffect(() => {
    if (bugs.length === 0) {
      getBugs().then(res => setBugs(res.data));
    }
  }, [bugs, setBugs]);

  const handleDelete = async (id) => {
    await deleteBug(id);
    setBugs(bugs.filter(bug => bug._id !== id));
  };

  const handleStatusChange = async (bug, status) => {
    const updated = await updateBug(bug._id, { ...bug, status });
    setBugs(bugs.map(b => b._id === bug._id ? updated.data : b));
  };

  if (bugs.length === 0) return <p>No bugs reported yet.</p>;

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <button onClick={() => handleStatusChange(bug, 'resolved')} style={{ marginRight: '5px' }}>Resolve</button>
          <button onClick={() => handleDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BugList;
