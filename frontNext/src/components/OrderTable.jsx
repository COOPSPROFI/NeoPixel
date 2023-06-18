import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders")
      .then((result) => {
        setOrders(result.data.orders);
        console.log(result);
      });
  }, []);

  const handleStatusChange = (orderId, status) => {
    axios.put(`http://localhost:3000/api/orders/${orderId}/status`, { status })
      .then((result) => {
        console.log(result);
        // Update the order status in the local state
        const updatedOrders = orders.map(order => {
          if (order.id === orderId) {
            return {
              ...order,
              status: status
            };
          }
          return order;
        });
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (orders.length === 0) {
    return <div>Нет доступных заказов.</div>;
  }

  return (
    <div>
      <h2>Заказы</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Название принтера</th>
            <th>Описание</th>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.tel}</td>
              <td>{order.printername}</td>
              <td>{order.desc}</td>
              <td>{order.date}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="ожидание">Ожидание</option>
                  <option value="в работе">В работе</option>
                  <option value="готов">Готов</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
