import React, { Component } from 'react';

class AddOrder extends Component {
  state = {
    email: '',
    name: '',
    tel: '',
    printername: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, tel, printername, description } = this.state;

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

  render() {
    const { email, name, tel, printername, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </div>
        <div>
          <label>Tel:</label>
          <input type="text" name="tel" value={tel} onChange={this.handleChange} />
        </div>
        <div>
          <label>Printer Name:</label>
          <input type="text" name="printername" value={printername} onChange={this.handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={this.handleChange} />
        </div>
        <button type="submit">Add Order</button>
      </form>
    );
  }
}

export default AddOrder;
