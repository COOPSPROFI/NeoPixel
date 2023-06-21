import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function ConsultsTable() {
  const [consults, setConsults] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [sortConsult, setSortConsult] = useState("asc");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/consults")
      .then((result) => {
        setConsults(result.data.consults);
        console.log(result);
      });
  }, []);

  const handleStatusChange = (consultId, status) => {
    axios.put(`http://localhost:3000/api/consults/${consultId}`, { status })
      .then((result) => {
        console.log(result);
        // Update the consult status in the local state
        const updatedConsults = consults.map(consult => {
          if (consult.id === consultId) {
            return {
              ...consult,
              status: status
            };
          }
          return consult;
        });
        setConsults(updatedConsults);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sortConsults = (consults) => {
    const sortedConsults = [...consults];
    switch (sortValue) {
      case "id":
        sortedConsults.sort((a, b) => a.id - b.id);
        break;
      case "status":
        sortedConsults.sort((a, b) => {
          const statusConsult = ["ожидание", "в работе", "готов"];
          const statusA = statusConsult.indexOf(a.status);
          const statusB = statusConsult.indexOf(b.status);
          return statusA - statusB;
        });
        break;
      case "date":
        sortedConsults.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      default:
        return consults;
    }

    if (sortConsult === "desc") {
      sortedConsults.reverse();
    }

    return sortedConsults;
  };

  const handleSortChange = (event) => {
    const selectedSortValue = event.target.value;
    if (selectedSortValue === sortValue) {
      // If the same sort value is selected, toggle the sort consult
      setSortConsult(sortConsult === "asc" ? "desc" : "asc");
    } else {
      // If a different sort value is selected, reset the sort consult to ascending
      setSortConsult("asc");
    }
    setSortValue(selectedSortValue);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterConsults = (consults) => {
    return consults.filter(consult => {
      const searchLower = searchValue.toLowerCase();
      return (
        consult.name.toLowerCase().includes(searchLower) ||
        consult.email.toLowerCase().includes(searchLower) ||
        consult.tel.toLowerCase().includes(searchLower)
      );
    });
  };

  if (consults.length === 0) {
    return <div>Нет доступных заказов.</div>;
  }

  const filteredConsults = filterConsults(consults);
  const sortedConsults = sortConsults(filteredConsults);

  return (
    <div>
      <h2>Заказы</h2>
      <div>
        <label htmlFor="search">Поиск: </label>
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label htmlFor="sort">Сортировка: </label>
        <select
          id="sort"
          value={sortValue}
          onChange={handleSortChange}
        >
          <option value="">Без сортировки</option>
          <option value="id">ID</option>
          <option value="status">Статус</option>
          <option value="date">Дата</option>
        </select>
        <button onClick={() => setSortConsult(sortConsult === "asc" ? "desc" : "asc")}>
          {sortConsult === "asc" ? "⬆" : "⬇"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {sortedConsults.map((consult, index) => (
            <tr key={index}>
              <td>{consult.id}</td>
              <td>{consult.email}</td>
              <td>{consult.name}</td>
              <td>{consult.tel}</td>
              <td>{consult.date}</td>
              <td>
                <select
                  value={consult.status}
                  onChange={(e) => handleStatusChange(consult.id, e.target.value)}
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
