import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-20 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-lg">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-700 font-medium mb-1">
              Price: ${item.price}
            </p>
            <p className="text-yellow-500 mb-3">⭐ {item.rating}</p>
            <Link
              to={`/productDetails/${item.id}`}
              className="bg-[#94bbe9] text-black px-4 py-2 rounded-lg mt-auto hover:bg-[#7aa9df] transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
