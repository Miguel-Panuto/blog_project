import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStylled } from './styles';

import AppBarWithDrawer from './app_bar_with_drawer';

const Header = () => {
  return (
    <HeaderStylled>
      <div className="header-content">
        <div>
          <Link to="/">
            <h1>
              Blog do
              <br />
              Francisco
            </h1>
          </Link>
        </div>
      </div>
      <AppBarWithDrawer />
    </HeaderStylled>
  );
};

export default Header;
