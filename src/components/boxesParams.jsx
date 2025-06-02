import '../styles/BoxVisualizer.css';



function BoxVisualizer({ boxes }) {
    return (
      <div className="box-container">
        {boxes.map((box, i) => (
          <div className="box" key={i}>
            {box.map((item, j) => (
              <div
                key={j}
                className="item"
                style={{ width: `${item[3] * 10}%` }}
                title={`[${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}]`} 
              >
                {item[3]}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default BoxVisualizer;
