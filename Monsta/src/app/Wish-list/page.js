'use client';
import React, { useState } from 'react';
import Breadcrumds from '../common/Breadcrumds';

export default function Wishlist() {
    let pageName = 'Wish-List';

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      image: '/images/product1.jpg',
      name: 'Rose Gold Watch',
      price: '₹4,999',
      stock: 'In Stock',
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: 'Leather Handbag',
      price: '₹7,499',
      stock: 'Out of Stock',
    },
  ]);

  // Delete item function
  const handleDelete = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
  };

  
  return (
    <div>
        <Breadcrumds pageName={pageName} />
      <section className="w-full py-12 bg-gray-50">    
      <div className="max-w-[1320px] mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          My Wishlist
        </h2>

        {/* Table Container */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="py-3 px-5">Delete</th>
                <th className="py-3 px-5">Image</th>
                <th className="py-3 px-5">Product</th>
                <th className="py-3 px-5">Price</th>
                <th className="py-3 px-5">Stock Status</th>
                <th className="py-3 px-5">Add to Cart</th>
              </tr>
            </thead>

            <tbody>
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    {/* Delete */}
                    <td className="py-4 px-5 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
                      >
                        Delete
                      </button>
                    </td>

                    {/* Image */}
                    <td className="py-4 px-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    </td>

                    {/* Product Name */}
                    <td className="py-4 px-5">
                      <h2 className="text-gray-800 font-medium">{item.name}</h2>
                    </td>

                    {/* Price */}
                    <td className="py-4 px-5">
                      <h2 className="text-gray-700 font-semibold">
                        {item.price}
                      </h2>
                    </td>

                    {/* Stock Status */}
                    <td className="py-4 px-5">
                      <h2
                        className={`font-medium ${
                          item.stock === 'In Stock'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {item.stock}
                      </h2>
                    </td>

                    {/* Add to Cart Button */}
                    <td className="py-4 px-5">
                      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#b76e79] transition-all">
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    No items in your wishlist.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  );
}
