import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiBox, FiDollarSign, FiGrid } from 'react-icons/fi';
import SvgLogo from './SvgLogo';

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 14px 16px;
  text-decoration: none;
  :hover {
    background-color: #6200ee;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
const Menu = styled.nav`
  width: 10vw;
  background-color: #3700b3;
  position: fixed;
  height: 100vh;
`;
const ItemIcon = styled.div`
  & > svg {
    transform: scale(1.3);
    display: block;
  }
`;

const LinkText = styled.span`
  margin-left: 10px;
`;

export default function Navbar() {
  const links = [
    {
      key: 1,
      route: '/',
      title: 'Dashboard',
      icon: <FiGrid />,
    },
    {
      key: 2,
      route: '/sales',
      title: 'Sales',
      icon: <FiDollarSign />,
    },
    {
      key: 3,
      route: '/products',
      title: 'Products',
      icon: <FiBox />,
    },
  ];

  const navLinks = links.map((link) => {
    return (
      <li key={link.key}>
        <MenuItem to={link.route}>
          <ItemIcon>{link.icon}</ItemIcon>

          <LinkText>{link.title}</LinkText>
        </MenuItem>
      </li>
    );
  });

  return (
    <Menu>
      <SvgLogo></SvgLogo>
      <MenuList>{navLinks}</MenuList>
    </Menu>
  );
}
