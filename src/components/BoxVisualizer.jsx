import '../styles/BoxVisualizer.css';

function BoxVisualizer({ boxes, stringLength: maxTotal }) {
  return (
    <div className="box-container">
      {boxes.map((box, i) => {
        const matrix = box[0]; // 4x2 matrix
        const totalLength = matrix.reduce((sum, [, point]) => sum + point, 0);
        const isLastTooBig = totalLength > maxTotal;

        return (
          <div className="box" key={i}>
            {matrix.map(([stringNumber, point], j) => {
              const isLast = j === matrix.length - 1;
              const isRed = isLast && isLastTooBig;

              const style = {
                width: `${(point * 100) / maxTotal}%`,
              };

              return (
                <div
                  key={j}
                  className={`item ${isRed ? 'item-red' : 'item-green'}`}
                  style={style}
                  title={`string: ${stringNumber}, point: ${point}`}
                >
                  {point}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BoxVisualizer;
