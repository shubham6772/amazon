import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

const Checkout = () => {

  const{state, dispatch} = useStateValue();
  const{basket}= state;
  console.log(basket);
  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://g-ecx.images-amazon.com/images/G/01/productads-help/process/Product-Ads-75-Clicks_728x90._V174189179_.gif"
          alt="ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>

        {basket.map((item, i)=> {
          return <CheckoutProduct key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        })}

        

      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
