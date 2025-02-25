import React, { useContext,useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, promo,url } =
    useContext(StoreContext);

    const navigate = useNavigate()

    const [finalPromoCode, setFinalPromoCode] = useState("");
    const [promoCode, setPromoCode] = useState("");

    const handleChange = (e) => {
      setPromoCode(e.target.value);
      console.log("Current Promo Code:", e.target.value); // Captures instantly
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount() }</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary Fee</p>
              {getTotalCartAmount()>0?<p>${2}</p>:<p>${0}</p>}
              
            </div>
            <hr />
            {promoCode === "JEET50"?
            <><div className="cart-total-details">
            <p>Discount</p> 
            <p>- ${getTotalCartAmount()/2}</p>
          </div>
          <hr /></> : <></>
          }
            
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?<p>$0</p>:promoCode === "JEET50"? <p>${promo()+2}</p>:<p>${getTotalCartAmount()+2}</p> }</p>
             

            </div>
          </div>
        <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have Promocode, Enter It Here </p>
            <form id="myForm">
            <div className="cart-promocode-input">
                <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={handleChange} // Updates state in real-time
                />
                <button type="button" onClick={() => setPromoCode(promoCode)}>Submit</button>
            </div>
            
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart ;
