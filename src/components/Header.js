import React from "react";
import "./Header.css";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <header className="header">
      <div className="grouping">
        <label>Group By:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="sorting">
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
