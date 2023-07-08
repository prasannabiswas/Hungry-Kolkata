import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

const NavBarPage = () => {
  return (
    <>
        <div className='container-sm navPage1'>
            <div className='navContainer row'>
                <div className='logo-img col' />
                <div className='col'> 
                    <ul className='navLinks'>
                        <li>Home</li>
                        <li>Link1</li>
                        <li>Link2</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default NavBarPage;
