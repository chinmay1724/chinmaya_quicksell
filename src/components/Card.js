import React from "react";
import "./Card.css";

// Importing icons
import urgentIcon from "../assets/icons/SVG - Urgent Priority colour.svg";
import highPriorityIcon from "../assets/icons/Img - High Priority.svg";
import mediumPriorityIcon from "../assets/icons/Img - Medium Priority.svg";
import lowPriorityIcon from "../assets/icons/Img - Low Priority.svg";
import noPriorityIcon from "../assets/icons/No-priority.svg";
import todoIcon from "../assets/icons/To-do.svg";
import inProgressIcon from "../assets/icons/in-progress.svg";
import doneIcon from "../assets/icons/Done.svg";
import backlogIcon from "../assets/icons/Backlog.svg";
import cancelledIcon from "../assets/icons/Cancelled.svg";

const Card = ({ ticket }) => {
  // Priority label mapping
  const priorityIcons = {
    4: urgentIcon,
    3: highPriorityIcon,
    2: mediumPriorityIcon,
    1: lowPriorityIcon,
    0: noPriorityIcon,
  };

  // Status icon mapping
  const statusIcons = {
    todo: todoIcon,
    "in-progress": inProgressIcon,
    done: doneIcon,
    backlog: backlogIcon,
    cancelled: cancelledIcon,
  };

  // Fallback icon if the status is not mapped
  const getStatusIcon = (status) => statusIcons[status] || todoIcon; // Default to 'todo' icon if not found

  return (
    <div className="ticket">
      {/* Top Row: ID and Username */}
      <div className="ticket-header">
        <span className="ticket-id">#{ticket.id}</span>
        <span className="ticket-user">{ticket.userName}</span>
      </div>

      {/* Middle Row: Status Icon and Title */}
      <div className="ticket-middle">
        <img
          className="ticket-status-icon"
          src={getStatusIcon(ticket.status)}
          alt={ticket.status}
        />
        <span className="ticket-title">{ticket.title}</span>
      </div>

      {/* Bottom Row: Priority Icon and Tag */}
      <div className="ticket-footer">
        <img
          className="ticket-priority-icon"
          src={priorityIcons[ticket.priority]}
          alt={`Priority: ${ticket.priority}`}
        />
        <span className="ticket-tag">{ticket.tag}</span>
      </div>
    </div>
  );
};

export default Card;
