import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // Ensure users state is set
  const [groupBy, setGroupBy] = useState("status"); // Default grouping
  const [sortBy, setSortBy] = useState("priority"); // Default sorting
  const priorityMap = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No Priority",
  };

  useEffect(() => {
    const fetchTicketsAndUsers = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();

        // Set users in state
        setUsers(data.users);

        // Map userId to userName
        const userMap = {};
        data.users.forEach((user) => {
          userMap[user.id] = user.name;
        });

        // Add userName and priorityLabel to tickets
        const processedTickets = data.tickets.map((ticket) => ({
          ...ticket,
          userName: userMap[ticket.userId] || "Unknown User",
          priorityLabel: priorityMap[ticket.priority] || "Unknown Priority",
        }));

        setTickets(processedTickets);
      } catch (error) {
        console.error("Error fetching tickets and users:", error);
      }
    };

    fetchTicketsAndUsers();
  }, []);

  return (
    <div className="app">
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
