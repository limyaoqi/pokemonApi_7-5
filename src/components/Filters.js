import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by name */}
      <input
        placeholder="Search By Name"
        onChange={(e) => onSearchChange(e.target.value)}
        value={search}
      />

      {/* INSTRUCTION: Add a select field for filtering by type */}
      <select onChange={(e) => onTypeChange(e.target.value)} value={type}>
        <option value={"all"}>All types</option>
        {types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
