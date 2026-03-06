export default function CeartInput({ search, setSearch }) {
  return (
    <div className="balizInput">
      <input
        id="inputSearch"
        type="text"
        placeholder="🔍 Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}