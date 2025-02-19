import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md relative">
      <span className="absolute top-2 left-2 bg-gray-200 px-2 py-1 text-xs rounded">
        {product.category?.name || "Unknown"}
      </span>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-md font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600 font-bold">${product.price}</p>
      <button className="absolute top-2 right-2 text-gray-600">
        <FiPlusCircle size={20} />
      </button>
    </div>
  );
};

export default ProductCard;
