import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Produtos Disponíveis</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div>{product.name}</div>
            <img src={product.image} alt={product.name} />
           <div>R${product.price}</div> 
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
