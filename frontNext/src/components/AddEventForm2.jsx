import React, { useState } from 'react';

function AddEventForm2() {
  const [title, setName] = useState("");
  const [desc, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [img, setImgUrl] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = { title, desc, date, src };
    fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка отправки");
        }
        setSuccess(true); // Установить состояние success в true при успешной отправке
        return response.json();
      })
      .then(data => {
        console.log('Успешно отправлено:', data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  return (
    <div>
      {success && <p>Мероприятие успешно добавлено!</p>} {/* Отображать сообщение об успешной загрузке при success === true */}
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={title} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Описание:
          <textarea value={desc} onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Дата:
          <input type="text" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          URL изображения:
          <input type="text" value={img} onChange={e => setImgUrl(e.target.value)} />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default AddEventForm2;
