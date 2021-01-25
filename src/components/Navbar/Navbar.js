import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiBox, FiDollarSign, FiGrid } from 'react-icons/fi';

const MenuItem = styled(Link)`
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
    background-color: #111;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  margin: 0;
`;
const Menu = styled.nav`
  width: 10vw;
  background-color: #333;
  position: fixed;
  height: 100vh;
`;

export default function Navbar() {
  const links = [
    {
      route: '/',
      title: 'Dashboard',
      icon: <FiGrid />,
    },
    {
      route: '/sales',
      title: 'Sales',
      icon: <FiDollarSign />,
    },
    {
      route: '/products',
      title: 'Products',
      icon: <FiBox />,
    },
  ];

  const navLinks = links.map((link) => {
    return (
      <li>
        <MenuItem to={link.route}>
          {link.icon}
          {link.title}
        </MenuItem>
      </li>
    );
  });

  return (
    <Menu>
      <MenuList>{navLinks}</MenuList>
    </Menu>
  );
}
