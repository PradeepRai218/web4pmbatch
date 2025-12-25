"use client";
import { fetchCarts } from "@/app/slice/cartSlice";
import axios from "axios";
// import ProductCard from "@/app/common/ProductCard";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Tabsection({ product }) {
  let [productData, setProductData] = useState(product.product);
  let [path, setPath] = useState(product.path);

  const [activeTab, setActiveTab] = useState("featured");

  const featured = [
    {
      id: 1,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
      name: "Gold Necklace",
      desc: "Elegant gold design",
      price: "8999",
      oldPrice: 10999,
    },
    {
      id: 2,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg",
      name: "Diamond Ring",
      desc: "Shiny diamond beauty",
      price: "7999",
      oldPrice: 9999,
    },
    {
      id: 3,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
      name: "Silver Bracelet",
      desc: "Stylish and classy",
      price: "4999",
      oldPrice: 6999,
    },
    {
      id: 4,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
      name: "Pearl Earrings",
      desc: "Classic pearl charm",
      price: "5499",
      oldPrice: 7499,
    },
    {
      id: 5,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg",
      name: "Ruby Pendant",
      desc: "Romantic and beautiful",
      price: "6999",
      oldPrice: 8999,
    },
    {
      id: 6,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
      name: "Platinum Bracelet",
      desc: "Elegant modern design",
      price: "9999",
      oldPrice: 12499,
    },
    {
      id: 7,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg",
      name: "Diamond Stud Earrings",
      desc: "Shiny and elegant",
      price: "5999",
      oldPrice: 7999,
    },
    {
      id: 8,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253202107041620524598258Paxton%20Office%20Table__.jpg",
      name: "Crystal Anklet",
      desc: "Trendy crystal shine",
      price: "3999",
      oldPrice: 5999,
    },
  ];

  const newArrivals = [
    {
      id: 1,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg",
      name: "Emerald Necklace",
      desc: "Fresh new look",
      price: "8999",
      oldPrice: 10999,
    },
    {
      id: 2,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg",
      name: "Sapphire Ring",
      desc: "Royal and bold",
      price: "9999",
      oldPrice: 12999,
    },
    {
      id: 3,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
      name: "Rose Gold Bracelet",
      desc: "Stylish and elegant",
      price: "5499",
      oldPrice: 7499,
    },
    {
      id: 4,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
      name: "Blue Topaz Pendant",
      desc: "Cool gemstone vibe",
      price: "7499",
      oldPrice: 9999,
    },
    {
      id: 5,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
      name: "Amethyst Ring",
      desc: "Elegant violet tone",
      price: "7999",
      oldPrice: 9999,
    },
    {
      id: 6,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
      name: "Rose Quartz Necklace",
      desc: "Soft pink beauty",
      price: "6599",
      oldPrice: 8999,
    },
    {
      id: 7,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg",
      name: "Black Onyx Chain",
      desc: "Modern and bold",
      price: "4899",
      oldPrice: 6999,
    },
    {
      id: 8,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253202107041620524598258Paxton%20Office%20Table__.jpg",
      name: "Citrine Earrings",
      desc: "Bright and cheerful",
      price: "5999",
      oldPrice: 8499,
    },
  ];

  const onSale = [
    {
      id: 1,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
      name: "Charm Bracelet",
      desc: "On sale now",
      price: "2999",
      oldPrice: 5999,
    },
    {
      id: 2,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
      name: "Stud Earrings",
      desc: "Simple elegance",
      price: "1999",
      oldPrice: 4999,
    },
    {
      id: 3,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg",
      name: "Silver Chain",
      desc: "Minimal and classic",
      price: "2499",
      oldPrice: 5999,
    },
    {
      id: 4,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
      name: "Gold Pendant",
      desc: "Elegant everyday wear",
      price: "4499",
      oldPrice: 8999,
    },
    {
      id: 5,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
      name: "Anklet",
      desc: "Trendy and lightweight",
      price: "1599",
      oldPrice: 3999,
    },
    {
      id: 6,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg",
      name: "Rose Gold Ring",
      desc: "Best-selling beauty",
      price: "1999",
      oldPrice: 4999,
    },
    {
      id: 7,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253202107041620524598258Paxton%20Office%20Table__.jpg",
      name: "Gemstone Bracelet",
      desc: "Multi-color design",
      price: "2999",
      oldPrice: 6999,
    },
    {
      id: 8,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg",
      name: "Pearl Necklace",
      desc: "Vintage and elegant",
      price: "3999",
      oldPrice: 7999,
    },
  ];

  const data =
    activeTab === "featured"
      ? featured
      : activeTab === "newArrivals"
      ? newArrivals
      : onSale;

  return (
    <section className="pt-10 pb-14 bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* === Heading === */}
        <h1 className="flex items-center justify-center text-4xl font-bold text-black mb-12 tracking-wide gap-4">
          <span className="block w-[46%] h-[1px] bg-gradient-to-r from-[#C09578] to-[#e5b9b7]"></span>
          Products
          <span className="block w-[46%] h-[1px] bg-gradient-to-l from-[#C09578] to-[#e5b9b7]"></span>
        </h1>

        {/* === Tabs === */}
        <div className="flex justify-center gap-6 mb-10">
          {["featured", "newArrivals", "onSale"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 border font-semibold uppercase tracking-wide transition-all duration-300 shadow-sm
               ${
                 activeTab === tab
                   ? "bg-[#C09578] text-white border-black hover:border-[#C09578] shadow-md scale-105"
                   : "border-black text-black hover:text-[#C09578] hover:border-[#C09578] hover:shadow-md hover:scale-105"
               }`}
            >
              {tab === "featured"
                ? "Featured"
                : tab === "newArrivals"
                ? "New Arrivals"
                : "On Sale"}
            </button>
          ))}
        </div>

        {/* === Product Cards === */}
        <div className="flex flex-wrap justify-center gap-8">
            {
                productData.map((obj,index)=>{
                    return(
                        <ProductCard key={index} data={obj} path={path}/>
                    )
                })
            }
         
        </div>
      </div>
    </section>
  );
}

function ProductCard({data,path}) {



   let dispatch = useDispatch();
 
   dispatch(fetchCarts());
   let baseUrl=process.env.NEXT_PUBLIC_BASE_URL;

    let token = useSelector((state)=>state.user.token);

    let addToCart=async()=>{
    
      if(token){
        let obj={
          productID:data._id,
          productPrice:data.productSalePrice,
          productImage:path+data.productImage,
          productName:data.productName,
          quantity:1
        };
        axios.post(`${baseUrl}cart/add-to-cart`,obj,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        .then((res)=>{
           dispatch(fetchCarts());
          if(res.data.success){
            
             
          }
          else{
            alert(res.data.message);
          }
        })
      }
      else{
        alert("Please login to add to cart");
      }
    }
    
  return (
    <div
      className="w-[290px] bg-white border border-gray-200 shadow-md p-3 flex flex-col items-center 
hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full h-[230px] overflow-hidden mb-4">
        <img
          alt="Gold Necklace"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          src={path+data.productImage}
        />
        <button
          className="absolute top-3 right-3 bg-white rounded-full p-2 hover:text-[#F8F9F9] transition-all shadow-md"
          fdprocessedid="xm8c15"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
          </svg>
        </button>
      </div>
      <h2 className="text-lg font-semibold text-gray-950 mb-1 text-center">
        {data.productName}
      </h2>
      <p className="text-gray-400 text-sm mb-3 text-center">
        {data.parentCategory.categoryName}
      </p>
      <hr className="w-[80%] border-t border-gray-300 mb-3" />
      <div className="flex items-center justify-center gap-3 mb-3">
        <p className="text-gray-400 text-sm line-through">₹{data.productPrice}</p>
        <p className="text-[#C09578] text-lg font-bold">₹{data.productSalePrice}</p>
      </div>
      <button
      onClick={addToCart}
        className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold 
          hover:bg-[#b76e79] transition-all duration-300 shadow-md hover:shadow-lg"
        fdprocessedid="6yv48m"
      >
        Add to Cart
      </button>
    </div>
  );
}
