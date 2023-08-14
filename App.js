import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(
        'https://api.quicksell.co/v1/internal/frontend-assignment'
      );
      setTickets(response.data.tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  const groupedTickets = {}; // Group tickets based on selected grouping option

  // Sort tickets based on selected sorting option

  return (
    <div>
      <h1>Kanban Board</h1>
      <div>
        <button onClick={() => handleGroupingChange('status')}>Group by Status</button>
        <button onClick={() => handleGroupingChange('user')}>Group by User</button>
        <button onClick={() => handleGroupingChange('priority')}>Group by Priority</button>
        <select onChange={(e) => handleSortingChange(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div>
        {/* Render grouped and sorted tickets */}
      </div>
    </div>
  );
};

export default App; 