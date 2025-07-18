import '../styles/BoxStorage.css';

function BoxStorage({ items, selectedStorageBox, onClickItem }) {
  return (
    <div className="storage-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`storage-item ${index === selectedStorageBox ? 'selected' : ''}`}
          onClick={() => onClickItem(index)}
          title={`ID: ${item.ID}, length: ${item.length}`}
        >
          ID: {item.ID}, length: {item.length}
        </div>
      ))}
    </div>
  );
}

export default BoxStorage;
