import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Forwomen = ({ForWomen, handlClick}) => {
    return (
        <div>
        <div className='formens_heading'>
   
        </div>
        <div className='formens_flex_box'>
          {
            ForWomen.map((item)=>{
                return(
                    <div key={item.id} className='formens_container'>
                       <Link to={`/singleProduct/${item.id}`}> <img src={item.image} alt="formens" /></Link>
                        <div className="formens_details_price">
                            <p>{item.title}</p>
                            <span>₹{item.price}/-</span>
                        </div>
                        <div className="formens_icons">
                          <div className="icon">  <BsCart4 onClick={()=>handlClick(item)}/></div>
                    
                        </div>
                    </div>
                )
            })
          }
        </div>
        </div>
      )
}

export default Forwomen
