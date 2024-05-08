import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
function Addcart() {

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
    <div className="mx-auto my-4 max-w-4xl md:my-6">
      <div className="overflow-hidden  rounded-xl shadow gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 py-6 text-white md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-white"
                        >
                          Contact information
                        </h3>
                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                          />
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Payment details
                        </h3>
                        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              for="cardNum"
                              className="block text-sm font-medium text-white"
                            >
                              Card number
                            </label>
                            <div className="mt-1">
                              <input
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                id="cardNum"
                              />
                            </div>
                          </div>
                          <div className="col-span-2 sm:col-span-3">
                            <label
                              for="expiration-date"
                              className="block text-sm font-medium text-white"
                            >
                              Expiration date (MM/YY)
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="expiration-date"
                                id="expiration-date"
                                autoComplete="cc-exp"
                                className="block h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="cvc"
                              className="block text-sm font-medium text-white"
                            >
                              CVC
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                autoComplete="csc"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Shipping address
                        </h3>
                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              for="address"
                              className="block text-sm font-medium text-white"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="city"
                              className="block text-sm font-medium text-white"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="region"
                              className="block text-sm font-medium text-white"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="postal-code"
                              className="block text-sm font-medium text-white"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white">
                          Billing information
                        </h3>
                        <div className="mt-6 flex items-center">
                          <input
                            id="same-as-shipping"
                            name="same-as-shipping"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            checked=""
                          />
                          <div className="ml-2">
                            <label
                              for="same-as-shipping"
                              className="text-sm font-medium text-white"
                            >
                              Same as shipping information
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex justify-center border-t border-gray-200 pt-6">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <Link to="/payment">Make Payment</Link>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    <section>
    <div className=' '>
      <h1 className='text-white text-xl hover:text-cyan-500'>Cart  : {totalUniqueItems} </h1>
      <h1 className='text-white text-xl pb-4 hover:text-cyan-500'>Total Items: {totalItems}</h1>
      <table className='table table-light table-hover m-0 text-white'>
        <tbody>
        {
            items.map((item,index)=>{
                return(
                <tr key={index}>
                    <td>
                        <img src={item.img} style={{height:'5rem',width:'30rem'}}/>
                    </td>
                    <td className='pr-2 hover:text-cyan-500 '>{item.name}</td>
                    <td className='pr-2 hover:text-cyan-500'>{item.price}</td>
                    <td className='pr-2 hover:text-cyan-500'>Quantity={item.quantity}</td>
                    <td>
                        <button className='btn btn-info ms-2 bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-4 border border-red-700 rounded' 
                                onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}>
                            -
                        </button>

                        <button className='btn btn-info ms-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded'
                                 onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>
                            +
                        </button>

                        <button className='btn btn-info ms-2  bg-blue-500 hover:bg-blue-400 text-white font-serif py-1 px-2 border border-blue-700 rounded pt-2 text-center'
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
    <div  className='col-auto ms-auto pt-10'>
            <h1 className='text-white text-3xl hover:text-cyan-500'>Total Price = $ {cartTotal}</h1>
    </div>
    <div className='col-auto text-white'>
        
        <button className=' btn btn-primary m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
        <Link to="/customer">Food Page </Link>
        </button>
        <button className='btn btn-danger m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={()=>emptyCart()}>
            Clear Cart
        </button>
    </div>

    </section>
        </div>
      </div>
    </div>

  )
}

export default Addcart
