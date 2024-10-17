import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, updateQuantity } from '../Redux/Cartslice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartItems.length === 0 ? (
          <h4>Your cart is empty.</h4>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cartCard">
              <img src={item.image} alt="img" style={{ width: '100px' }} />
              <h5>{item.title}</h5>
              <h5>${item.price}</h5>
              <div>
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="total">
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
