import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="w-64 h-64 object-cover" />
      <p className="text-lg mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
