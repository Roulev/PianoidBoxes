// src/components/BoxVisualizer.jsx


import '../styles/BoxVisualizer.css';

function BoxVisualizer({ boxes }) {
  return (
    <div className="box-container">
      {boxes.map((box, i) => {
        // box[0] — one matrix, which is an array of arrays
        const flat = box[0].flat();          // 9 elements in one matrix
        return (
          <div className="box" key={i}>
            {flat.map(([stringNumber, point], j) => (
              <div
                key={j}
                className="item"
                style={{ width: `${(point / 130) * 100}%` }}  /* width 0–100% */
                title={`string: ${stringNumber}, point: ${point}`}
              >
                {stringNumber}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default BoxVisualizer;
