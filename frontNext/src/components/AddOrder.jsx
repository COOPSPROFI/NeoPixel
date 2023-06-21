import React, { Component } from 'react';

export default function AddOrder() {
  const [state, setState] = React.useState({
    email: '',
    name: '',
    tel: '',
    printername: '',
    description: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, tel, printername, description } = state;

    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify({ email, name, tel, printername, description }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await response.json();
      console.log(data);
      // Обработка успешного создания заказа
    } catch (err) {
      console.error(err);
      // Обработка ошибки
    }
  };

  const { email, name, tel, printername, description } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label>Tel:</label>
        <input type="text" name="tel" value={tel} onChange={handleChange} />
      </div>
      <div>
        <label>Printer Name:</label>
        <input type="text" name="printername" value={printername} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={description} onChange={handleChange} />
      </div>
      <button type="submit">Add Order</button>
    </form>
  );
}


