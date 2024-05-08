import React from 'react'
import Footer from '../Component/Footer'
import Card from '../Component/Card'
import Customernavbar from '../Component/Customernavbar'
import data from "./data"

function Customer() {
  return (
    <div>
      <div><Customernavbar /></div>
      
      <div className='grid grid-cols-4 ml-10 mr-5 gap-10 mt-24 mb-24'>

        {
          data.productData.map((item,index)=>{
            return(
                <Card name={item.name} price={item.price} img={item.img} item={item} key={index} />
          )}
          )
        }
      </div>
      
      <div><Footer /></div>
    </div>
  )
}

export default Customer

