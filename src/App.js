import './styles/App.css';
import BoxVisualizer from './components/BoxVisualizer.jsx';
import BoxStorage from './components/BoxStorage.jsx';
import { useState } from 'react';

function generateTestData() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const data = [];

  let id = 0;
  for (let i = 0; i < 16; i++) {
    const group = [];
    for (let j = 0; j < 4; j++) {
      group.push({ ID: id++, length: rand(10, 100) });
    }
    data.push(group);
  }

  return data;
}

function App() {
  const [data] = useState(generateTestData);
  const [boxes, setBoxes] = useState(data);
  const [storage, setStorage] = useState([]);
  const [selectedStorageBox, setSelectedStorageBox] = useState(null);
  const [sumLength] = useState(384);

  // drop from box to storage
  const handleMoveToStorage = (item, itemIdx, boxIdx) => {
    setStorage((prev) => [...prev, item]);

    setBoxes((prevBoxes) =>
      prevBoxes.map((box, idx) =>
        idx === boxIdx ? box.filter((_, i) => i !== itemIdx) : box
      )
    );
  };

  // Select box in storage
  const handleStorageClick = (index) => {
    setSelectedStorageBox((prev) => (prev === index ? null : index));
  };

  // removal from storage to box
  const handleBoxDoubleClick = (boxIdx) => {
    if (selectedStorageBox === null) return;

    const itemToMove = storage[selectedStorageBox];

    setBoxes((prevBoxes) =>
      prevBoxes.map((box, idx) =>
        idx === boxIdx ? [...box, itemToMove] : box
      )
    );

    setStorage((prevStorage) =>
      prevStorage.filter((_, idx) => idx !== selectedStorageBox)
    );

    setSelectedStorageBox(null);
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
            onBoxDoubleClick={handleBoxDoubleClick}
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
