import './styles/App.css';
import BoxVisualizer from './components/BoxVisualizer.jsx';
import BoxStorage from './components/BoxStorage.jsx';
import { useState, useEffect } from 'react';

function generateTestData() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return Array.from({ length: 5 }, () =>
    Array.from({ length: 4 }, () => [rand(1, 88), rand(35, 150)])
  );
}

function App() {
  const [data] = useState(generateTestData);
  const [boxes, setBoxes] = useState(data); // Initialize with test data
  const [storage, setStorage] = useState([]); // Storage for moved items

  const [sumLength, setSumLength] = useState(384);

  const handleMoveToStorage = (item, itemIdx, boxIdx) => {
    // Add item in Storage
    setStorage((prev) => [...prev, item]);

    // Updating boxes
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box, idx) => {
        if (idx !== boxIdx) return box;

        // Delete item by index
        const newMatrix = box.filter((_, i) => i !== itemIdx);
        return newMatrix;
      });
    });
  };

  useEffect(() => {
    console.log('Boxes:', boxes);
  }, [boxes]);

  return (
    <div className="App">
      <div className="topBar">
        <h1>Header</h1>
      </div>

      <div className="container">
        <div className="leftField">
          <h2>The Boxes</h2>
          <BoxVisualizer
            boxes={boxes}
            stringLength={sumLength}
            onDoubleClick={handleMoveToStorage}
          />
        </div>

        <div className="rightField">
          <h2>Storage</h2>
          <BoxStorage items={storage} />
        </div>
      </div>
    </div>
  );
}

export default App;
