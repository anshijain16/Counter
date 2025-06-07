import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <div className="counter-container">
          <h2>Count: {count}</h2>
          <div className="button-container">
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
