import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from '../panel-login/styles';

const PanelRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecret] = useState('');
  const handleRegister = (e: any) => {
    e.preventDefault();
    api
      .post('/database/user', {
        username,
        password,
        secret,
      })
      .then((res) =>
        localStorage.setItem('Authorization', 'Bearer ' + res.data.token)
      );
  };
  return (
    <Container>
      <h1>Painel de Administrador</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          id="username-reg"
          placeholder="Insira o usuário que deseja cadastrar"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password-reg"
          placeholder="Insira a senha que deseja cadastrar"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Insira a senha para cadastro"
          id="secret"
          required
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
        <button type="submit">Registrar</button>
        <Link to="/adm/panel/login" className="register-button">
          Fazer login
        </Link>
      </form>
    </Container>
  );
};

export default PanelRegister;
