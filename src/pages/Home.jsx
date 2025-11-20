import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex flex-col justify-center items-center gap-5">
      <div className="text-5xl font-bold">Welcome to Product App</div>
      <div className="text-2xl">Explore our products</div>
      <Link
        to="/products"
        className="bg-[#94bbe9] inline-block px-4 py-2 border rounded-3xl transition-transform hover:scale-105"
      >
        See All Products
      </Link>
    </div>
  );
};

export default Home;
