// frontend/src/App.js
import { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
  const [bugs, setBugs] = useState([]); // now we actually use it

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={(bug) => setBugs(prev => [...prev, bug])} />
      <BugList bugs={bugs} setBugs={setBugs} /> {/* pass both state and setter */}
    </div>
  );
}

export default App;
