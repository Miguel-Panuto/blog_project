import React, { useState, useEffect } from 'react';

import { FiCornerLeftUp } from 'react-icons/fi';

import { Link, useLocation } from 'react-router-dom';

import { Header, NavButton } from './styles';

const Head = () => {
  const location = useLocation();
  const [isNewPost, setIsNewPost] = useState(false);

  useEffect(() => {
    if (location.pathname === '/adm/panel/new-post') {
      setIsNewPost(true);
    } 
  }, [location.pathname]);

  return (
    <Header>
      <Link to="/adm/panel">
        <h1>Painel Administrativo</h1>
      </Link>
      <div className="bar">
        <Link to="/">
          <NavButton>
            <FiCornerLeftUp size={18} color="#525252"/>
            Voltar ao blog
          </NavButton>
        </Link>
        <Link to="/adm/panel/new-post">
          <NavButton isActive={isNewPost}>Criar novo post</NavButton>
        </Link>
      </div>
    </Header>
  );
};

export default Head;
