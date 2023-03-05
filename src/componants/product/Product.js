import React from 'react'
import './Product.css'
import { useStateValue } from "../../StateProvider";


const Product = ({id, title, image, price, rating}) => {
    
    const {state, dispatch} = useStateValue();
     
    const addToCart = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item: {
                id : id,
                title:title,
                image: image,
                price : price,
                rating: rating,
            },
        });
     }
   
  return (
    <div className='product' key={id} >
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => {
                    return <p key={i}>⭐</p>
                })}
                
            </div>
        </div>
 
         <img src={image} alt="book" />

         <button onClick={addToCart}>Add to Basket</button>

    </div>
  )
}

export default Product
