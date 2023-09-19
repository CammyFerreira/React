import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2><FaShoppingCart /> Carrinho de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div className="cart-item">
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => removeFromCart(product.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
