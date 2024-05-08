import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
        const {
                isEmpty,
                totalUniqueItems,
                items,
                totalItems,
                cartTotal,
                updateItemQuantity,
                removeItem,
                emptyCart
        }=useCart();
        if(isEmpty) return <h1 className='text-center text-white'>your Cart is Empty</h1>
  return (
    <section>
    <div>
      <h1>Cart({totalUniqueItems}) total Items: ({totalItems})</h1>
      <table className='table table-light table-hover m-0 text-white'>
        <tbody>
        {
            items.map((item,index)=>{
                return(
                <tr key={index}>
                    <td>
                        <img src={item.img} style={{height:'8rem',width:'15rem'}}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                        <button className='btn btn-info ms-2 bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-4 border border-red-700 rounded' 
                                onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}>
                            -
                        </button>

                        <button className='btn btn-info ms-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded'
                                 onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>
                            +
                        </button>

                        <button className='btn btn-info ms-2 bg-blue-500 hover:bg-blue-700 text-white font-serif py-2 px-4 border border-blue-700 rounded'
                                 onClick={()=>removeItem(item.id)}>
                            Remove Item
                        </button>
                    </td>
                </tr>
                )
            })
        }
        </tbody>
      </table>
    </div>
    <div  className='col-auto ms-auto'>
            <h1>Total Price:${cartTotal}</h1>
    </div>
    <div className='col-auto'>
        <button className='btn btn-danger m-2 ' onClick={()=>emptyCart()}>
            Clear Cart
        </button>
        <button className='btn border-t-zinc-200 m-2 flex'>
            Buy Now
        </button>
    </div>

    </section>
  )
}

export default Cart

