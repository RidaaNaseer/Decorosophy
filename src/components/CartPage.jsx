import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  const handleContinueShopping = () => {
    navigate("/explore-collection");
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const displayTotalPrice = Number(totalPrice).toFixed(2);

  return (
    <div className="cart-page container mt-5">
      <h2>Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "80px" }}
                      />
                      {item.name}
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-3">
            <button
              className="btn btn-secondary"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="col-md-4">
          <h3>Order Summary</h3>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label">
              Add Notes
            </label>
            <textarea
              id="notes"
              className="form-control"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="4"
              placeholder="Add any special instructions for your order"
            ></textarea>
          </div>

          <div className="order-summary mt-4">
            <p className="h5">Total: ${displayTotalPrice}</p>
            <Link to="/checkout" className="btn btn-primary mt-3">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
