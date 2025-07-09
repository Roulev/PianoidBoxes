import '../styles/BoxStorage.css';

function BoxStorage({ items }) {
  return (
    <div className="box-storage">
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        items.map(([stringNumber, point], index) => (
          <div key={index} className="stored-item">
            string: {stringNumber}, point: {point}
          </div>
        ))
      )}
    </div>
  );
}

export default BoxStorage;
