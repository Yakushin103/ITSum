import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <img alt="Logo" src="https://avatars.mds.yandex.net/get-pdb/2212586/6dda1a62-c391-4e13-b314-93ac53dafa89/s1200" />

      <div className="login-block">
        {
          props.isAuth ?
            props.login :
            <NavLink to={'/login'}>
              Login
            </NavLink>
        }

      </div>
    </header >
  );
}

export default Header;