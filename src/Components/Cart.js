import React, { useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import "../Style/Cart.css"
import cartImg from "../assats/cart.jpg"
import { TbShoppingBag } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const Cart = ({cart, setCart}) => {
  const handleRemove = (id) =>{
    const remove = cart.filter((item)=>(
      item.id !== id
    ))
    setCart(remove)
  }

  const addItem = () => {
    cart.forEach((a) => {
      a.prod_qty = 1;
     
    });

  };
useEffect(()=>{
  addItem();
},[])
  const handleInc = (card_id) => {
    setCart((cart) =>
      cart.map((item) =>
        card_id === item.id
          ? { ...item, prod_qty: item.prod_qty + (item.prod_qty < 5 ? 1 : 0) }
          : item
      )
    );

  };
  const handleDec = (card_id) => {
    setCart((cart) =>
      cart.map((item) =>
        card_id === item.id
          ? { ...item, prod_qty: item.prod_qty - (item.prod_qty > 1 ? 1 : 0) }
          : item
      )
    );
  };
  return (
    <div>
  {
    cart.length  === 0 && (
      <>
    <div className="cart_empty">
      <img src={cartImg} alt="cart" />
      <div className="cart_empty_warning">
      <h1>Your Cart is <span>Empty!</span></h1>
      <p>Must add items on the cart before you proceed to check out.</p>
 
     <Link to={"/"} > <button>
      <TbShoppingBag />
      RETURN TO SHOP</button></Link>
      </div>
    </div>
      </>
    )
  }
  {
    cart.map((item)=>(
      <div key={item.id} className='cart_container'>
        <div className="cart_img_details">
       <Link to={`/singleProduct/${item.id}`}> <img src={item.image} alt="" /></Link>
   
        </div>
        <div className="cart_add_btn">
          <button onClick={()=> handleDec(item.id)}>-</button>
          <span>{item.prod_qty === undefined
                ? (item.prod_qty = 1)
                : item.prod_qty}
                </span>
          <button onClick={()=>handleInc(item.id)}>+</button>
        </div>
        <div className="cart_price_remove">
          <p>₹{item.price * item.prod_qty}</p>
          <AiFillDelete onClick={()=>handleRemove(item.id)}/>
        </div>
      </div>
    ))
  }

    </div>
  )
}

export default Cart
