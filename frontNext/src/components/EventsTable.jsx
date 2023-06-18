import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventTable() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);

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
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventId)
        );
        console.log(response);
      })
      .catch((error) => {
        console.error('Failed to delete event:', error);
      });
  };

  const editEventClick = (event) => {
    setEditEvent(event);
  };

  const updateEvent = () => {
    axios
      .put(`http://localhost:3000/api/events/${editEvent.id}`, editEvent)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) => (event.id === editEvent.id ? editEvent : event))
        );
        setEditEvent(null);
        console.log(response);
      })
      .catch((error) => {
        console.error('Failed to update event:', error);
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
        {events.map((event) =>
          editEvent !== null && editEvent.id === event.id ? (
            <tr key={editEvent.id}>
              <td>{editEvent.id}</td>
              <td>
                <input
                  type="text"
                  value={editEvent.title}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, title: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editEvent.description}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, description: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editEvent.date}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, date: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editEvent.img}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, img: e.target.value })
                  }
                />
              </td>
              <td>
                <button onClick={updateEvent}>Save</button>
                <button onClick={() => setEditEvent(null)}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.img}</td>
              <td>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
                <button onClick={() => editEventClick(event)}>Edit</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
