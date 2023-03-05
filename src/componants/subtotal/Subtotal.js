import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Subtotal() {

  const{state, dispatch} = useStateValue();
  const{basket} = state;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return <>
            <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
          </>;
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
