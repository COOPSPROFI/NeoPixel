import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventTable() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get('http://localhost:3000/api/events')
      .then((response) => {
        setEvents(response.data.events);
        console.log(response);
      })
      .catch((error) => {
        console.error('Failed to fetch events:', error);
      });
  };

  const deleteEvent = (eventId) => {
    axios
      .delete(`http://localhost:3000/api/events/${eventId}`)
      .then((response) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
        console.log(response);
      })
      .catch((error) => {
        console.error('Failed to delete event:', error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Img</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.desc}</td>
            <td>{event.date}</td>
            <td>{event.src}</td>
            <td>
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
