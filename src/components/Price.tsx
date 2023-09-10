"use client"

import { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options? : {title: string; additionalPrice: number}[];
}

const Price = ({price, id, options}: Props) => {
  
  const stateDef = {
    totalPrice: price,
    quantity: 1,
    selected: 0
  }
  const [state, setState] = useState(stateDef)
  // const [totalPrice, setTotalPrice] = useState(price)
  // const [quantity, setQuantity] = useState(1)
  // const [selected, setSelected] = useState(0)
  useEffect(()=>{
    setState((prev)=> (
      options ? {...prev,totalPrice: price * prev.quantity + options[prev.selected].additionalPrice}:{...prev}
    ))
  }, [state.quantity, state.selected, options, price])
  return ( 
    <div className=" flex flex-col gap-4">
      <h2 className=" text-2xl font-bold">{state.totalPrice.toFixed(2)}</h2>
      {/* Options Conteiner */}
      <div className=" flex gap-4">
        {options?.map((option, index)=>(
          <button key={option.title} className=" min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
          style={{background: state.selected === index? "rgb(248 113 113)" : "white",
          color: state.selected === index? "white": "red"}}
          onClick={()=>setState((prev)=> ({...prev, selected: index}))}
          >{option.title}
          </button>
        ))}
      </div>
       {/* Quantity and add button Conteiner */}
       <div className=" flex justify-between items-center">
        {/* Quantity */}
        <div className=" flex justify-between w-full p-3 ring-1 ring-red-500">
          <span className="">Quantity</span>
          <div className="flex gap-4 items-center">
            <button 
            className=""
            onClick={()=>setState((prev)=> (prev.quantity>1? {...prev, quantity: prev.quantity-1}: {...prev, quantity:1}))}
            >
            {'<'}</button>
            <span>{state.quantity}</span>
            <button 
            className=""
            onClick={()=> setState((prev)=> (prev.quantity<9 ? {...prev, quantity: prev.quantity+1} : {...prev, quantity:9}))}
            >
              {'>'}</button>
          </div>
        </div>
        {/* Cart Button */}
        <button className=" uppercase bg-red-500 text-white p-3   ring-1 ring-red-500 w-56">Add to Cart</button>
       </div>
    </div>
   );
}
 
export default Price;