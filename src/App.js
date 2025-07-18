import './styles/App.css';
import BoxVisualizer from './components/BoxVisualizer.jsx';
import BoxStorage from './components/BoxStorage.jsx';
import { useState } from 'react';

// Новая генерация данных
function generateTestData() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const totalMatrices = 16;
  const itemsPerMatrix = 4;
  const usedIDs = new Set();

  const generateUniqueID = () => {
    let id;
    do {
      id = rand(0, 999);
    } while (usedIDs.has(id));
    usedIDs.add(id);
    return id;
  };

  return Array.from({ length: totalMatrices }, () =>
    Array.from({ length: itemsPerMatrix }, () => ({
      ID: generateUniqueID(),
      length: rand(10, 350),
    }))
  );
}

function App() {
  const [data] = useState(generateTestData);
  const [boxes, setBoxes] = useState(data);
  const [storage, setStorage] = useState([]);

  const [selectedStorageBox, setSelectedStorageBox] = useState(null);
  const [sumLength, setSumLength] = useState(384);

  const handleMoveToStorage = (item, itemIdx, boxIdx) => {
    setStorage((prev) => [...prev, item]);

    setBoxes((prevBoxes) =>
      prevBoxes.map((box, idx) => {
        if (idx !== boxIdx) return box;
        const newMatrix = box.filter((_, i) => i !== itemIdx);
        return newMatrix;
      })
    );
  };

  const handleStorageClick = (index) => {
    setSelectedStorageBox((prev) => (prev === index ? null : index));
  };

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
          <BoxStorage
            items={storage}
            selectedStorageBox={selectedStorageBox}
            onClickItem={handleStorageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
