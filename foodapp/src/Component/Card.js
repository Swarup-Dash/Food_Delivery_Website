import React from 'react'
import { Link } from 'react-router-dom'
import {useCart} from "react-use-cart"

const Card = (props) => {

    const {addItem}  = useCart();

    return (
        <div className="w-full md:w-[300px] rounded-lg border bg-white text-center mx-auto mb-8 md:mb-0 md:mr-16">
            <img
                src={props.img}
                alt="foods"
                className="h-[200px] md:h-[300px] w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{props.name}</h1>
                <p className="mt-3 text-sm font-bold text-gray-600 ">
                    Price : ${props.price}
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={()=>addItem(props.item)}
                >
                    <Link to="/mycart">Add to Cart </Link>
                </button>
            </div>
        </div>
    )
}

export default Card
