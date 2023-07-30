import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import NavItems from './NavItems/NavItems';
import { navlist } from './NavItems/NavbarList';

import navLogo from "../../images/logo/HUNGRYLOGO.webp";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setOpenCart } from '../../features/cart/cartSlice';

import Cart from '../../features/cart/Cart';

const NavBarPage = () => {
    const [add, setAdd] = useState(0);
    const cart = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();

    const cartNavState = useSelector(selectCartState);

    const onToggleOpen = () => {
        dispatch(setOpenCart({cartState: true}));
    }

    const onToggleClose = () => {
        dispatch(setOpenCart({cartState: false}));
    }

  return (
    <>
        <div className='container-fluid navPage1'>
            <div className='navContainer row'>
                <div className='col' />
                <img src={navLogo} className='logo-img' />
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
                            <div onClick={()=>onToggleOpen()} className='navItemContainer'>
                                <span className='navItemLogo'><i class="bi bi-cart"></i></span>
                                <p className='navItemText'>Add-to-Cart</p>
                            </div>     
                            <div className='cartNumber'>{cart.length}</div>   
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </div>

        { cartNavState ? <Cart /> : null }

    </>
  )
}

export default NavBarPage;
 
// 