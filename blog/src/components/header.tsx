import React from "react";
import { Link } from "react-router-dom";

import { HeaderStylled } from "./styles";

const Header = () => (
  <HeaderStylled>
    <div>
      <Link to="/">
        <h1>Blog do<br/>Francisco</h1>
      </Link>
    </div>
  </HeaderStylled>
);

export default Header;
