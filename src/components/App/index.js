import Tasks from '../Tasks';

import Info from '../Info';

import './style.css';
import React from 'react';
import TaskList from '../TaskList';
function App() {
  return (
    <div className="App">
      <Info/>
      <Tasks/>
      <TaskList/>
    </div>
  );
}

export default App;
