import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavItems from './NavItems/NavItems';
import { navlist } from './NavItems/NavbarList';

import navLogo from "../../images/logo/HUNGRYLOGO.webp";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, selectCartState, setOpenCart } from '../../features/cart/cartSlice';

import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import CartItems from '../../features/cart/CartItems';

const NavBarPage = () => {
    const [add, setAdd] = useState(0);
    const cart = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();

    const totalAmount  = cart.i

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
        {cartNavState?         
            <div className='container-fluid cartFlexBox'>
                <div className='cartFlexBoxHead row'>    
                    <div className='col'  style={{cursor: "pointer",width:"auto", height:"auto", margin:"0", padding:"0",backgroundColor:""}}  >
                        <div className='row'>
                            <div className='col' style={{marginTop:"1rem"}}>
                                <ChevronDoubleLeftIcon className='col' onClick={()=>onToggleClose()} style={{width:"3rem", height:"2rem", backgroundColor:""}} />
                                <span>Close {cart.length}</span>
                            </div>
                            
                            <h5 className='col totalAmount'>$ {Math.round(cart.reduce((acc,item)=>item.price*item.quantity+acc, 0)*1000)/1000}</h5>
                        </div>
                      
                     
                        <div className='itemsList' style={{height:"100vh", backgroundColor:"rgba(255,255,255, 0.7)", width:""}}>
                            {cart.map((item, key)=>{
                                return(
                                    <CartItems
                                        key={key} 
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        image={item.image}
                                        quantity={item.quantity}
                                        deleteItem={()=>dispatch(deleteAsync(item.id))}
                                    />
                                );
                            })}
                        </div>
                        {/* <div className='conatiner row ' style={{position:"fixed", bottom:"0", backgroundColor: "white",width: "100%",height:"4rem", color: "black"}}></div>  */}
                    </div>                    
                </div>  
                

            </div> : null
        }

    </>
  )
}

export default NavBarPage;
 
// 