import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">Shopi</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">All</Link>
        <Link to="/category/clothes" className="hover:underline">Clothes</Link>
        <Link to="/category/electronics" className="hover:underline">Electronics</Link>
        <Link to="/category/furnitures" className="hover:underline">Furnitures</Link>
        <Link to="/category/toys" className="hover:underline">Toys</Link>
      </div>
      <div className="flex items-center space-x-4">
        <span>userintheapp@test.com</span>
        <Link to="/orders">My Orders</Link>
        <Link to="/account">My Account</Link>
        <Link to="/cart"><FiShoppingCart size={20} /></Link>
      </div>
    </nav>
  );
};

export default Navbar;