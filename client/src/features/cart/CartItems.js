import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import "../../Component/Navbar/Navbar.css";
import { useDispatch } from 'react-redux';
import { updateAsync } from './cartSlice';

const CartItems = (props) => {

    const dispatch = useDispatch();

    // const handleChange = (e,id) => {
    //     dispatch(updateAsync({id, change:{quantity:+e.target.value}}));
    // }

    

  return (
    <div className='container-fluid cartItemContainer'>
        <div className='row' style={{width:"100%", height:"100%", backgroundColor:"", margin:"0", padding:"0"}}>
            <div className='col-7' style={{width:"40%", height:"100%", backgroundColor:"", margin:"0", padding:"0",}} >
                <img className='cartItemImage' src={props.image} alt={props.title} />
            </div>
            <div className='col-3' style={{width:"60%", height:"100%", backgroundColor:"", margin:"0", padding:"0",}} >
                <div style={{textAlign:"center", letterSpacing:"2px", fontSize:"1.2rem", marginTop:"2%", fontWeight:"bold"}}>$ {props.price}</div>
                <div className='container' style={{fontSize:"1.3rem", fontWeight:"bolder"}} >{props.title}</div>
                <div className='container' style={{fontSize:"0.9rem", padding:"1%", position:"relative", backgroundColor:"", width:"20rem", height:"4.5rem", fontWeight:"bold"}} >{props.description}</div>
                <div className='container row' style={{width:"100%", backgroundColor:"", height:"3rem", position:"relative", marginTop:"0rem"}}>
                    <span className='col' style={{marginTop:"2%"}}>

                        {/* <span className='col'><MinusIcon onClick={props.decreaseItem} className='cartItemButton' style={{marginRight:"1rem"}} /></span>
                        <input className='col' value={props.quantity} onChange={props.handleChange} style={{textAlign:"center", borderRadius:"5px", width:"3rem"}} />
                        <span className='col'><PlusIcon onClick={props.increaseItem} className='cartItemButton' style={{marginLeft:"1rem"}} /></span>    */}
                        <select className='col' value={props.quantity} onChange={props.handleChange} style={{textAlign:"center", borderRadius:"5px", width:"3rem"}} >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                        </select>     

                        <span className='col-sm-5'><TrashIcon onClick={props.deleteItem} className='cartItemButton' style={{marginLeft:"5rem"}} /></span>
                    </span>
                </div>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default CartItems;
