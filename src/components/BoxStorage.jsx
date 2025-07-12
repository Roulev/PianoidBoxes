import '../styles/BoxStorage.css';

function BoxStorage({ items, selectedStorageBox, onClickItem }) {
  return (
    <div className="storage-container">
      {items.map(([stringNumber, point], index) => (
        <div
          key={index}
          className={`storage-item ${index === selectedStorageBox ? 'selected' : ''}`}
          onClick={() => onClickItem(index)}
          title={`string: ${stringNumber}, point: ${point}`}
        >
          {point}
        </div>
      ))}
    </div>
  );
}

export default BoxStorage;
