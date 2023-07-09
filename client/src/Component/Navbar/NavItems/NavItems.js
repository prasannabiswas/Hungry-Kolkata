import React from 'react';
import { navlist } from './NavbarList';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavItems = (props) => {
  return (
    <li>
        <Link to={props.link} className='navItemContainer'>
            <span className='navItemLogo'>{props.image}</span>
            <p className='navItemText'>{props.name}</p>
        </Link>        
    </li>
  )
}

export default NavItems;