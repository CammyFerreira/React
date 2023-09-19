import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const products = [
    { id: 1, image: 'https://cdn.awsli.com.br/300x300/1046/1046773/produto/145583122/950ee881f6.jpg', name: "Produto 1", price: 10 },
    { id: 2, image: 'https://cdn.awsli.com.br/300x300/1046/1046773/produto/145583122/950ee881f6.jpg', name: "Produto 2", price: 20 },
    { id: 3, image: 'https://cdn.awsli.com.br/300x300/1046/1046773/produto/145583122/950ee881f6.jpg', name: "Produto 3", price: 30 },
  ];

  return (
    <div className="App">
      <h1>Minha Loja</h1>
      <div className="nav">
        <button onClick={() => setShowCart(false)}>Produtos</button>
        <button onClick={() => setShowCart(true)}>Carrinho ({cart.length})</button>
      </div>
      {showCart ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
