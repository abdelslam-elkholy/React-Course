export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Please Enter Some items on your list</em>
      </p>
    );

  const length = items.length;
  const packed = items.filter((item) => item.packed === true).length;
  const perecentage = Math.round((packed / length) * 100);
  return (
    <footer className="stats">
      {perecentage === 100 ? (
        <em>You Have Everything You need</em>
      ) : (
        <em>
          You Have {length} items on your list , and you already packed {packed}{" "}
          ({perecentage}%)
        </em>
      )}
    </footer>
  );
}
