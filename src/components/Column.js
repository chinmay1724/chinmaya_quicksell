import React from "react";
import Card from "./Card";
import "./Column.css";

const Column = ({ group, tickets, userMapping }) => {
  return (
    <div className="column">
      <h2 className="column-title">{group}</h2>
      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          ticket={ticket}
          userName={userMapping[ticket.userId] || "Unknown User"}
        />
      ))}
    </div>
  );
};

export default Column;
