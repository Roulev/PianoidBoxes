import './styles/App.css';
import BoxVisualizer from './components/BoxVisualizer.jsx';
import { packIntoBoxes } from './utils/pack.js';
import { useState, useMemo } from 'react';

function generateTestData() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return Array.from({ length: 64 }, () =>
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => [rand(1, 88), rand(35, 50)])
    )
  );
}

function App() {
  const [data] = useState(generateTestData);        // генерируем один раз
  const boxes = useMemo(() => packIntoBoxes(data), [data]);

  return (
    <div className="App">
      <div className="topBar"><h1>Header</h1></div>

      <div className="container">
        <div className="leftField">
          <h2>Матрицы</h2>
          <BoxVisualizer boxes={boxes} />
        </div>

        <div className="rightField">
          <h2>Change Parameters</h2>          
        </div>
      </div>
    </div>
  );
}

export default App;
