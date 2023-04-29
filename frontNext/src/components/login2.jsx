import React, { useCallback, useRef, useEffect, useState } from "react";

export default function Login2() {
// получаем форму и ее элементы
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// обработчик отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяем стандартное поведение формы

  // получаем значения полей username и password
  const username = usernameInput.value;
  const password = passwordInput.value;

  // отправляем POST-запрос на сервер
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json()) // получаем ответ от сервера в формате JSON
    .then(data => {
      const token = data.token; // получаем токен из ответа сервера
      console.log(token); // выводим токен в консоль (для проверки)
    })
    .catch(error => console.error(error));
});
  
    return (
      <div>
          <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/><br/>
                <input type="submit" id="submit" value="Login"/>
          </form>
      </div>
      
    );
  };