import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get("http://localhost:3000/api/orders").then((response) => {
      setOrders(response.data.orders);
      console.log(response);
    });
  };

  const updateOrderStatus = (orderId, status) => {
    axios
      .put(`http://localhost:3000/api/orders/${orderId}/status/${status}`)
      .then((response) => {
        console.log(response);
        fetchOrders(); // Refresh orders after updating status
      })
      .catch((error) => {
        console.log(error);
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
            <th>Изменить статус</th> {/* Добавлено новое поле */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.tel}</td>
              <td>{order.printername}</td>
              <td>{order.desc}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => updateOrderStatus(order.id, "в работе")}
                >
                  В работе
                </button>
                <button
                  onClick={() => updateOrderStatus(order.id, "готов")}
                >
                  Готов
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
