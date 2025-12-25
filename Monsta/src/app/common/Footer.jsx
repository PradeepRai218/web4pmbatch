import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, color: "#1877F2", name: "Facebook" },
    { Icon: FaInstagram, color: "#E4405F", name: "Instagram" },
    { Icon: FaTwitter, color: "#1DA1F2", name: "Twitter" },
    { Icon: FaLinkedinIn, color: "#0077B5", name: "LinkedIn" },
    { Icon: FaYoutube, color: "#FF0000", name: "YouTube" },
    { Icon: FaTelegramPlane, color: "#0088CC", name: "Telegram" },
  ];

  return (
    <div className=" w-full">
      {/* ===== Newsletter Section ===== */}
      <section className="w-full py-12">
        <div className="max-w-[1320px] mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <div className="flex justify-center items-center max-w-[600px] mx-auto">
            <input
              type="text"
              placeholder="Enter your email..."
              className="w-full py-3 px-5 border border-gray-300 rounded-l-full outline-none focus:border-[#C09578] focus:shadow-md transition-all duration-300 text-gray-700"
            />
            <button className="bg-[#C09578] hover:bg-[#a35b6d] text-white font-semibold px-7 py-3 rounded-r-full transition-all duration-300 hover:scale-105 shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ===== Footer Section ===== */}
      <section className="w-full bg-[#F8F9F9] py-4">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between items-start gap-6">

          {/* ==== Contact Us ==== */}
          <div className="w-full sm:w-[48%] md:w-[24%] text-left text-[13.5px]">
            <h2 className="text-[17px] font-semibold mb-4 text-gray-800 border-l-4 border-[#C09578] pl-2">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-6 mb-4">
              <strong>Address:</strong> Claritas est etiam processus dynamicus<br />
              <strong>Phone:</strong> +91 98745 612330<br />
              <strong>Email:</strong> furnitureinfo@gmail.com
            </p>

            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {socialIcons.map(({ Icon, color, name }, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-md"
                  style={{
                    color: color,
                    border: `2px solid ${color}`,
                  }}
                  title={name}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* ==== Quick Links ==== */}
          <div className="w-full sm:w-[48%] md:w-[24%] text-left text-[13.5px]">
            <h2 className="text-[17px] font-semibold mb-4 text-gray-800 border-l-4 border-[#C09578] pl-2">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-600">
              {[<Link href={'/about-us'}>About Us</Link>, "Contact Us", "Frequently Asked Questions"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#C09578] cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ==== Information ==== */}
          <div className="w-full sm:w-[48%] md:w-[24%] text-left text-[13.5px]">
            <h2 className="text-[17px] font-semibold mb-4 text-gray-800 border-l-4 border-[#C09578] pl-2">
              Information
            </h2>
            <ul className="space-y-2 text-gray-600">
              {["My Dashboard", "Wishlist", "Cart", "Checkout"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#C09578] cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ==== Top Rated Products ==== */}
          <div className="w-full sm:w-[48%] md:w-[24%] flex flex-col gap-3 text-left text-[13.5px]">
            <h2 className="text-[17px] font-semibold text-gray-800 border-l-4 border-[#C09578] pl-2 mb-2">
              Top Rated Products
            </h2>

            {[
              {
                img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
                title: "Furniture Store",
                desc: "Best Quality Products",
                price: "Rs. 25,000",
                oldPrice: "Rs. 32,000",
              },
              {
                img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg",
                title: "Home Decor",
                desc: "Modern & Elegant",
                price: "Rs. 21,000",
                oldPrice: "Rs. 26,000",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 group hover:bg-[#fff8fa] p-2 rounded-lg transition-all duration-300 hover:shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[50px] h-[40px] object-cover rounded-md"
                />
                <div>
                  <h2 className="text-[14px] font-semibold text-gray-800 group-hover:text-[#C09578] transition-all duration-300">
                    {item.title}
                  </h2>
                  <h3 className="text-gray-500 text-[12.5px]">{item.desc}</h3>
                  <h3 className="text-gray-600 text-[12.5px]">
                    <span className="line-through text-gray-400 mr-1">
                      {item.oldPrice}
                    </span>
                    {item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==== Bottom Navigation & Copyright ==== */}
        <div className="max-w-[1320px] mx-auto px-4 mt-8">
          <hr className="border-gray-300 mb-3" />
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-700 text-[13.5px] font-medium mb-3">
            {["HOME", <Link href={'/online-store'}>ONLINE STORE</Link>, "PRIVACY POLICY", "TERM OF USE"].map(
              (item, i) => (
                <li
                  key={i}
                  className="list-none cursor-pointer hover:text-[#C09578] transition-all duration-300 hover:scale-105"
                >
                  {item}
                </li>
              )
            )}
          </div>
          <hr className="border-gray-300" />
        </div>

        <div className="text-center mt-5 text-[13.5px]">
          <p className="text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#C09578] font-medium">Furniture Store</span>. All
            Rights Reserved.
          </p>

          <div className="flex justify-center items-center mt-3">
            <img
              src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
              alt="Payment Options"
              className="w-[230px] h-[30px]"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
