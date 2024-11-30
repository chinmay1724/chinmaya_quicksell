import React from "react";
import Column from "./Column";
import "./KanbanBoard.css";

// Group tickets based on the selected criterion
const groupTickets = (tickets, groupBy, userMapping) => {
    if (!Array.isArray(tickets)) return {}; // Ensure tickets is an array
  
    const groups = {};
  
    tickets.forEach((ticket) => {
      let key;
  
      // Check groupBy type
      if (groupBy === "user") {
        key = userMapping[ticket.userId] || "Unknown User"; // Map userId to userName
      } else {
        key = ticket[groupBy] || "No Group"; // Default behavior
      }
  
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
    });
  
    return groups;
  };
  

  const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
    // Create user mapping
    const userMapping = users.reduce((map, user) => {
      map[user.id] = user.name;
      return map;
    }, {});
  
    // Group tickets
    const groupedTickets = groupTickets(tickets, groupBy, userMapping);
  
    // Sort tickets within each group
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority; // Descending priority
        if (sortBy === "title") return a.title.localeCompare(b.title); // Ascending title
        return 0;
      });
    });
  
    return (
      <div className="kanban-board">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <Column key={group} group={group} tickets={tickets} userMapping={userMapping} />
        ))}
      </div>
    );
  };
  
export default KanbanBoard;
