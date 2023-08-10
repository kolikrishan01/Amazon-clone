import React from 'react'
import ForMens from './ForMens'
import "../Style/Formens.css"
import "../Style/Product.css"
import banner2 from "../assats/banne2.jpg"
import Jewelery from './Jewelery'
import Forwomen from './Forwomen'
import Electronics from './Electronics'
import Carousel from './Carousel'

const Product = ({print, handlClick}) => {

  const Formens = print.filter((item)=>(
    item.category === "men's clothing"
  ))
  const jewelery = print.filter((item)=>(
item.category === "jewelery"
  ))
  const ForWomen = print.filter((item)=>(
    item.category === "women's clothing"
  ))
  const electronics = print.filter((item)=>(
    item.category === "electronics"
  ))
  return (
    <div>
    <ForMens Formens={Formens} handlClick={handlClick}/>
    <div className="Product_banner2">
            <img src={banner2} alt="Banner" />
          </div>
          <Jewelery jewelery={jewelery} handlClick={handlClick}/>

          <Carousel print={print}/>
          <Forwomen  ForWomen={ForWomen} handlClick={handlClick}/>

         
          <Electronics electronics={electronics} handlClick={handlClick}/>

    </div>
  )
}

export default Product
