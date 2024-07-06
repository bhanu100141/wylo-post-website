import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link className='Nav-Posts' to="/">Posts</Link>
    <Link className='Nav-Create' to="/create">Create</Link>
  </nav>
);

export default Navbar;
