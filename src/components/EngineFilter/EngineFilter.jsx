import React from 'react';
import '../Filter/Filter.css';

const EngineFilter = ({ selectedEngine, setSelectedEngine, engines }) => {
  return (
    <div className="filter">
      <h3>Engine</h3>
      <select
        value={selectedEngine}
        onChange={(e) => setSelectedEngine(e.target.value)}
      >
        <option value="">All Engines</option>
        {engines.map((engine, index) => (
          <option key={index} value={engine}>
            {engine}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EngineFilter;
