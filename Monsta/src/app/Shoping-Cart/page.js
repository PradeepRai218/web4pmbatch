'use client';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Breadcrumds from '../common/Breadcrumds';
import Link from 'next/link';

export default function Shopingcart() {
  let pageName = 'Shopping Cart';


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/images/product1.jpg',
      name: 'Rose Gold Watch',
      price: 4999,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: 'Leather Handbag',
      price: 7499,
      quantity: 2,
    },
  ]);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  // Delete item
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Apply coupon
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon === 'SAVE10') {
      setDiscount(10); // 10% discount
    } else {
      setDiscount(0);
      alert('Invalid coupon code!');
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div>
      <Breadcrumds pageName={pageName} />

      {cartItems.length === 0 ? (
        // 🛒 Empty Cart Section
        <section className="w-full pt-10 pb-10 bg-white flex items-center justify-center ">
          <div className="max-w-[700px] w-full text-center py-10 border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-[#fff7f8] text-[#b76e79] p-6 rounded-full shadow-inner">
                <FaShoppingCart size={60} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Your Shopping Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8 text-base">
              Looks like you haven’t added anything to your cart yet. Start
              exploring our products and find something you love!
            </p>

            <Link href={'/'}>
               <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b76e79] transition-all duration-300">
              Continue Shopping
            </button>
            </Link>
          </div>
        </section>
      ) : (
        // ✅ Cart Table Section
        <section className="w-full py-10 bg-gray-50">
          <div className="max-w-[1320px] mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Your Shopping Cart
            </h2>

            {/* TABLE */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-10">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                    <th className="py-3 px-5">Delete</th>
                    <th className="py-3 px-5">Image</th>
                    <th className="py-3 px-5">Product</th>
                    <th className="py-3 px-5">Price</th>
                    <th className="py-3 px-5">Quantity</th>
                    <th className="py-3 px-5">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="py-4 px-5 text-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-black hover:bg-[#b76e79] text-white px-3 py-1 rounded-md text-sm transition"
                        >
                          Delete
                        </button>
                      </td>

                      <td className="py-4 px-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                      </td>

                      <td className="py-4 px-5">
                        <h2 className="text-gray-800 font-medium">
                          {item.name}
                        </h2>
                      </td>

                      <td className="py-4 px-5">
                        <h2 className="text-gray-700 font-semibold">
                          ₹{item.price.toLocaleString()}
                        </h2>
                      </td>

                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 border rounded hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="px-3 text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 border rounded hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="py-4 px-5">
                        <h2 className="text-gray-700 font-semibold">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </h2>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT - Coupon */}
              <div className="border border-black p-6 rounded-2xl bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Coupon Code
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Enter your coupon code if you have one.
                </p>
                <form
                  onSubmit={handleApplyCoupon}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                    className="border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b76e79] w-full bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-[#b76e79] transition-all"
                  >
                    Apply
                  </button>
                </form>
              </div>

              {/* RIGHT - Cart Total */}
              <div className="border border-black p-6 rounded-2xl bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Cart Totals
                </h2>
                <div className="flex justify-between py-2 text-gray-700">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 text-gray-700">
                  <span>Discount:</span>
                  <span>- ₹{discountAmount.toLocaleString()}</span>
                </div>
                <hr className="my-3 border-black" />
                <div className="flex justify-between font-bold text-lg text-gray-800">
                  <span>Total:</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-[#b76e79] transition-all">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
