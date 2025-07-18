import '../styles/BoxVisualizer.css';

function BoxVisualizer({ boxes, stringLength, onDoubleClick }) {
  return (
    <div className="box-container">
      {boxes.map((box, boxIdx) => {
        const matrix = box;
        const totalLength = matrix.reduce((sum, item) => sum + item.length, 0);
        const isLastTooBig = totalLength > stringLength;

        return (
          <div className="box" key={boxIdx}>
            {matrix.map((item, itemIdx) => {
              const isLast = itemIdx === matrix.length - 1;
              const isRed = isLast && isLastTooBig;
              const style = { width: `${(item.length * 100) / stringLength}%` };

              return (
                <div
                  key={itemIdx}
                  className={`item ${isRed ? 'item-red' : 'item-green'}`}
                  style={style}
                  title={`ID: ${item.ID}, length: ${item.length}`}
                  onDoubleClick={() => onDoubleClick?.(item, itemIdx, boxIdx)}
                >
                  ID: {item.ID}, length: {item.length}
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
