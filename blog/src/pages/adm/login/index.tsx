import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';
import isLoged from '../../../services/isLoged';

import { Container } from './styles';

const PanelLogin = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const verifyLogin = async () => {
      if(await isLoged()) history.push('/adm/panel')
    };
    verifyLogin();
    // eslint-disable-next-line
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    api
      .post('/database/login', {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem('Authorization', 'Bearer ' + res.data.token);
        return history.push('/adm/panel');
      })
      .catch(() => alert('Erro'));
  };

  return (
    <Container>
      <h1>Painel de Administrador</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="username-log"
          placeholder="Insira o usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Insira a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <Link to="/adm/panel/register" className="register-button">
          Registrar
        </Link>
      </form>
    </Container>
  );
};

export default PanelLogin;
