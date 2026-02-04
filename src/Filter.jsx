function Filter({ setFilter }) {
  return (
    <div>
      <label>Room Type: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Single</option>
        <option>Double</option>
        <option>Suite</option>
      </select>
    </div>
  );
}

export default Filter;
