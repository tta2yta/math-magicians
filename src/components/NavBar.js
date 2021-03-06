import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Qoutes',
      text: 'Qoute',
    },
  ];
  return (
    <div className="navBar">
      <h1 data-testid="heading">Math Magicians</h1>
      <ul>
        {links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            activeClassName="active-link"
            data-testid={item.text}
          >
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
