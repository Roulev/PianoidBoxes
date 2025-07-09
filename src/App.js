import './styles/App.css';
import BoxVisualizer from './components/BoxVisualizer.jsx';
import BoxStorage from './components/BoxStorage.jsx';
import { packIntoBoxes } from './utils/pack.js';
import { useState, useMemo, useEffect } from 'react';

function generateTestData() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return Array.from({ length: 64 }, () =>
    Array.from({ length: 4 }, () => [rand(1, 88), rand(35, 150)])
  );
}

function App() {
  const [data] = useState(generateTestData);
  const boxes = useMemo(() => packIntoBoxes(data), [data]);

  const [sumLength, setSumLength] = useState(384); // 384 is the sum of all points in the test data
  const [dataLength, setDataLength] = useState(64); // 64 is the number of items in the test data

  const [storage, setStorage] = useState([]); // Initialize storage

  const handleMoveToStorage = (item) => {
    setStorage((prev) => [...prev, item]);
  };

  useEffect(() => {
    console.log('Boxes packed:', boxes);
  }, [boxes]);

  return (
    <div className="App">
      <div className="topBar">
        <h1>Header</h1>
      </div>

      <div className="container">
        <div className="leftField">
          <h2>The Boxes</h2>
          <BoxVisualizer boxes={boxes} stringLength={sumLength} onDoubleClick={handleMoveToStorage} />
        </div>

        <div className="rightField">
          <h2>Starage</h2>
          <BoxStorage items={storage} />
        </div>
      </div>
    </div>
  );
}

export default App;
