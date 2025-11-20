import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      console.log(productId);
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading product...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grproductId grproductId-cols-1 md:grproductId-cols-2 gap-10">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-sm rounded-xl shadow-md bg-white mb-10"
        />

        <div>
          <p className="text-lg font-bold mb-4">Description</p>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>

          <p className="text-black font-medium mb-4">
            Rating: {product.rating}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <p className="text-gray-600 mb-6">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
