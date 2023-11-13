import React from "react";
import { useNavigate } from "react-router-dom";
import CartList from "../../components/TamimCatagories/Cart.jsx/CartList";
import CartList2 from "./CartList";
const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <CartList /> */}
      <CartList2 />
    </div>
  );
};

export default Cart;
