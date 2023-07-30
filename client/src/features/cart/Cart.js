import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAsync, setOpenCart, updateAsync } from './cartSlice';
import { ChevronDoubleLeftIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import CartItems from './CartItems';

import emptyCart from "../../images/logo/cartEmpty.png";
import "./Cart.css";
import { toast } from 'react-hot-toast';


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart.items);
  const length = cart.length;

  const handleChange = (e, id) => {
    const index = cart.findIndex(item=>item.id===id);
    // console.log(cart[index].title)
    toast.success(`${cart[index].title} increased to ${e.target.value}`);
    dispatch(updateAsync({id, change:{quantity:+e.target.value}}));
  }

  const onToggleClose = () => {
    dispatch(setOpenCart({cartState: false}));
}


  return (
    <div className='container-fluid cartFlexBox'>
        <div className='cartFlexBoxHead row'>    
            <div className='col'  style={{cursor: "pointer",width:"auto", height:"auto", margin:"0", padding:"0",backgroundColor:""}}  >
                
                <div className='row'>

                    <div className='col' style={{marginTop:"1rem"}}>
                        <ChevronDoubleLeftIcon className='col' onClick={()=>onToggleClose()} style={{width:"3rem", height:"2rem", backgroundColor:""}} />
                        <span>Close {length}</span>                         
                    </div>

                    <div className='col' style={{marginTop:"1rem", textAlign:"left", fontSize:"1.2rem",}}>
                      {!length==0 &&
                        <span style={{backgroundColor:"black", color:"white", padding:".8rem", borderRadius:"5px", boxShadow:"0 2px 6px rgba(0,0,0,0.7)"}}>
                            <ArrowRightOnRectangleIcon style={{width:"3rem", height:"2rem", backgroundColor:""}} />
                            <span>Checkout</span>
                        </span>
                      }
                                                
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
                                handleChange={(e)=>handleChange(e,item.id)}
                                // increaseItem={()=>setItemQuantity(itemQuantity++)}
                                // decreaseItem={()=>setItemQuantity(itemQuantity--)}
                            />
                        );
                    })}

                    <div style={{width:"100%", height:"11rem", position:"relative", marginTop:"80px", alignContent:"center", justifyContent:"center", textAlign:"center", backgroundColor:""}}>
                        
                          {!length==0 ? 
                            <div style={{backgroundColor:"black",boxShadow:"0 2px 6px rgba(0,0,0,0.7)",borderRadius:"5px",padding:".8rem", textAlign:"center", margin:"0 30% 0 30%", color:"white" }}>
                              <ArrowRightOnRectangleIcon style={{width:"3rem", height:"2rem", backgroundColor:""}} />
                              <span>Checkout</span>
                            </div> : 
                            <span> <img src={emptyCart} /> </span>}
                            
                        
                    </div>

                </div>                
            </div>                    
        </div>  
    </div>
  );
}

export default Cart;