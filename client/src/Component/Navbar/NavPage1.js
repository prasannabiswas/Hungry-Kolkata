import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavItems from './NavItems/NavItems';
import { navlist } from './NavItems/NavbarList';

const NavBarPage = () => {
    const [add, setAdd] = useState(0);
  return (
    <>
        <div className='container-sm navPage1'>
            <div className='navContainer row'>
                <div className='logo-img col' />
                <div className='col'> 
                    <ul className='navLinks'>
                        {navlist.map((val,key)=>{
                            return (
                                <NavItems
                                    key={key}
                                    image = {val.logo}
                                    name = {val.name}
                                    link = {val.link}
                                />
                            );
                        })}
                        <li>
                            <Link onClick={()=>{
                                setAdd(add+1);
                            }} className='navItemContainer'>
                                <span className='navItemLogo'><i class="bi bi-cart"></i></span>
                                <p className='navItemText'>Add-to-Cart</p>
                            </Link>     
                            <div className='cartNumber'>{add}</div>   
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default NavBarPage;
