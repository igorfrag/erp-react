import React from 'react';
import './Navbar.css';

const links = [
  {
    route: '/',
    name: 'Dashboard',
    key: 1,
  },
  {
    route: '/sales',
    name: 'Sales',
    key: 2,
  },
  {
    route: '/products',
    name: 'Products',
    key: 3,
  },
  {
    route: '/',
    name: 'Logo',
    key: 4,
  },
];

const listLink = links.map((link) => {
  return (
    <li className='nav-item' key={link.key}>
      <a href={link.route} className='nav-link'>
        <span className='link-text'>{link.name}</span>
      </a>
    </li>
  );
});
function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{listLink}</ul>
    </nav>
  );
}

export default Navbar;
