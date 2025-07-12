// BoxVisualizer.jsx
import '../styles/BoxVisualizer.css';

function BoxVisualizer({ boxes, stringLength, onDoubleClick }) {
  return (
    <div className="box-container">
      {boxes.map((box, boxIdx) => {
        const matrix      = box;
        const totalLength = matrix.reduce((s, [, p]) => s + p, 0);
        const isLastTooBig = totalLength > stringLength;

        return (
          <div className="box" key={boxIdx}>
            {matrix.map(([stringNumber, point], itemIdx) => {
              const isLast = itemIdx === matrix.length - 1;
              const isRed  = isLast && isLastTooBig;

              const style = { width: `${(point * 100) / stringLength}%` };

              return (
                <div
                  key={itemIdx}
                  className={`item ${isRed ? 'item-red' : 'item-green'}`}
                  style={style}
                  title={`string: ${stringNumber}, point: ${point}`}
                  onDoubleClick={() =>
                    onDoubleClick?.([stringNumber, point], itemIdx, boxIdx)
                  }
                >
                  string: {stringNumber}, point: {point}
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
