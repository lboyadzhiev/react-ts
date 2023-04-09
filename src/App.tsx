import React from 'react';

// components
import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypeScript']} />
    </div>
  );
}

export default App;
