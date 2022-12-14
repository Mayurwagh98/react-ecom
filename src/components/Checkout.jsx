import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let Checkout = () => {
  let [checkoutData, setCheckoutData] = useState({
    firstName: "",
    mobile: "",
    address: "",
  });
  let navigate = useNavigate()
 
  let submitCheckout = (event) => {
    event.preventDefault();
    localStorage.setItem("checkoutDetails", JSON.stringify(checkoutData));
    setCheckoutData({
      firstName: "",
      mobile: "",
      address: "",
    });
    navigate("/payment")
  };

  let handleSubmitform = (event) => {
    let { name, value } = event.target;

    setCheckoutData({
      ...checkoutData,
      [name]: value,
    });
  };



  return (
    <>
      <h1>Checkout</h1>
      <div>
        <form onSubmit={submitCheckout}>
          <input
            type="text"
            name="firstName"
            value={checkoutData.firstName}
            onChange={handleSubmitform}
            placeholder="Enter name"
          />
          <input
            type="text"
            name="mobile"
            value={checkoutData.mobile}
            onChange={handleSubmitform}
            placeholder="Enter moblie"
          />
          <input
            type="text"
            name="address"
            value={checkoutData.address}
            onChange={handleSubmitform}
            placeholder="Enter address"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export { Checkout };
