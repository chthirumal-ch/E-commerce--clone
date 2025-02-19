import React from "react";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold">Home</h1>
        <input
          type="text"
          placeholder="Search a product"
          className="border px-4 py-2 rounded w-1/3 mt-4"
        />
      </div>
      <ProductList />
    </div>
  );
};

export default Home;