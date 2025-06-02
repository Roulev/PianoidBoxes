import './styles/App.css';
import BoxVisualizer from './components/boxesParams';
import {packIntoBoxes} from './utils/pack.js';


function generateTestData() {
  return Array.from({ length: 10 }, () => {
    const len = Math.floor(Math.random() * 10) + 1;
    const val1 = Math.floor(Math.random() * 100);
    const val2 = Math.floor(Math.random() * 100);
    const val3 = Math.floor(Math.random() * 100);
    return [val1, val2, val3, len];
  });
}

function App() {
  const data = generateTestData();
  const boxes = packIntoBoxes(data);

  return (
    <div className="App">
      <div className="topBar">
        <h1>Header</h1>
      </div>
      <div className="container">
        <div className="leftField">
          <BoxVisualizer boxes={boxes} />
        </div>
        <div className="rightField">
          <h2>Change Parametrs</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
