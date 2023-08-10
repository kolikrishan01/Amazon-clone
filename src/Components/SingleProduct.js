import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Style/SingleProduct.css"

const SingleProduct = ({handlClick}) => {
    const [single, setSingle] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    const fetchSingle = async () =>{
        try {
            const response = await axios.request(`https://fakestoreapi.com/products/${id}`);
            setSingle(response.data);
            setTimeout(() => {
              setLoading(false)
            }, 2000);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
        fetchSingle();
    },[])

  return (
    <>
    {
      loading? (
        <>
        
<div className="single_loader">
<div class="loader"></div>
</div>
        </>
      ): (
        <>
        <div className='single_container'>
  <div>
  <img src={single?.image} alt="" />
  </div>
  <div className="single_details">
    <h3>{single?.title}</h3><br/>
    <p>{single?.description }</p>
    <div className="single_price_rate">

  <p> <span>Category:-</span> {single?.category}</p>
  <p><span>Price:-</span> ₹{single?.price}</p>
  </div>
  <button className='button' onClick={()=>handlClick(single)}>Add to Cart</button>
  </div>
    </div>
 <div className='return_btn'>
<Link to={'/'}> <button>Return To Shop</button></Link>
 </div>
        </>
      )
    }
   
    </>
  )
}

export default SingleProduct
