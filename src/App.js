import React, { Component, useState } from 'react';
import './style.css';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: 'p1',
      price: 150,
      img: 'https://th.bing.com/th?id=ORMS.a1290f48c166cc6d06cebdc3968061eb&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=0.8999999761581421&p=0',
    },
    {
      id: 1,
      name: 'p2',
      price: 150,
      img: 'https://th.bing.com/th?id=ORMS.a1290f48c166cc6d06cebdc3968061eb&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=0.8999999761581421&p=0',
    },
  ]);
  const [itemsCart, setItemsCart] = useState([]);

  const addCart = (product) => {
    if (itemsCart.some((cartItem) => cartItem.id == product.id)) {
      const carrito = [...itemsCart].forEach((itemCart) => {
        if (product.id === itemCart.id) {
          itemCart.quantity++;
        }
      })
      setItemsCart(carrito)
    } else {
      setItemsCart([...itemsCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div>
          <h2 key={product.id}> {product.name}</h2>

          <p> {product.price}</p>
          <button onClick={() => addCart(product)}>COMPRAR</button>
        </div>
      ))}
      <hr />
      <h2>Carrito Cliente</h2>
      <div>
        {itemsCart.map((itemCart) => (
          <div key={itemCart.id}>
            <h3>{itemCart.name}</h3>
            <p>
              <strong>Quantidade</strong>: {itemCart.quantity}
              <strong>Preco Total</strong> :{' '}
              {itemCart.quantity * itemCart.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
