import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  let navigate = useNavigate();
  let baseURL = import.meta.env.VITE_APIBASEURL;
  let [parentCategory, setParentCategory] = useState([]);
  let [subCategory, setsubCategory] = useState([]);
  let [subsubCategory, setSubsubCategory] = useState([]);
  let [color, setColor] = useState([]);
  let [material, setMaterial] = useState([]);

  let getparentCategory = () => {
    axios
      .get(`${baseURL}product/parent-category`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParentCategory(finalRes.category);
      });
  };

  let getsubCategory = (e) => {
    // console.log(e.target.value);

    let pId = e.target.value;

    axios
      .get(`${baseURL}product/sub-category/${pId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setsubCategory(finalRes.subcategory);
      });
  };

  let getsubSubCategory = (e) => {
    // console.log(e.target.value);

    let pId = e.target.value;

    axios
      .get(`${baseURL}product/sub-sub-category/${pId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSubsubCategory(finalRes.subsubcategory);
      });
  };

  let getsColors = (e) => {
    // console.log(e.target.value);

    axios
      .get(`${baseURL}product/color`)
      .then((res) => res.data)
      .then((finalRes) => {
        setColor(finalRes.color);
      });
  };

   let getsMaterial = (e) => {
    // console.log(e.target.value);

    axios
      .get(`${baseURL}product/material`)
      .then((res) => res.data)
      .then((finalRes) => {
        setMaterial(finalRes.material);
      });
  };

  let { id } = useParams();

  const [value, setValue] = useState("");
  useEffect(() => {
    getparentCategory();
    getsColors()
    getsMaterial()
  }, []);


  let saveProduct=(e)=>{
     e.preventDefault();
    
    let form = new FormData(e.target);
    form.append('productDescription',value)
     axios
      .post(`${baseURL}product/create`, form)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        
      });
  }

  return (
    <section className="w-full">
      <nav className="flex border-b-2" aria-label="Breadcrumb">
        <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center ">
            <Link
              to={"/home"}
              className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link
                to={"/product/view"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                Product
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">
                {id ? "Update" : "Add"}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="w-full px-6 py-6  ">
        <form onSubmit={saveProduct}>
          <div className="grid grid-cols-3 gap-[10px] ">
            {/* for left */}
            <div className="for-images ">
              <div className="">
                <label
                  htmlFor="ProductImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  name="productImage"
                  className="dropify"
                  data-height="160"
                />
              </div>

              <div className="">
                <label
                  htmlFor="backImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Back Image
                </label>
                <input
                  type="file"
                  name="productbackImage"
                  className="dropify"
                  data-height="160"
                />
              </div>

              <div className="">
                <label
                  htmlFor="GalleryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Gallery Image
                </label>
                <input
                  type="file"
                  name="productGallery"
                  multiple
                  className="dropify"
                  data-height="160"
                />
              </div>
            </div>

            {/* for midd */}
            <div className="middle">
              <div className="mb-5">
                <label
                  htmlFor="Prodct_Name"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Prodct Name
                </label>
                <input
                  type="text"
                  name="productName"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Prodct Name"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Category
                </label>
                <select
                  name="subCategory"
                  onChange={getsubSubCategory}
                  className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="">Select Category</option>
                  {subCategory.map((obj, index) => (
                    <option value={obj._id}> {obj.subcategoryName} </option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Meterial
                </label>
                 <select
                    name="productMeterial[]"
                    multiple
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="">Select Meterial</option>
                    {material.map((obj, index) => (
                      <option value={obj._id}> {obj.materialName} </option>
                    ))}
                  </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Prodcut Type
                </label>
                <select name="prodcutType" className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="1">Featured</option>
                  <option value="2">New Arrivals</option>
                  <option value="3">Onsale</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Top Rated
                </label>
                <select name="productToprated" className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Actual Price
                </label>
                <input
                  type="text"
                  name="productPrice"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Actual Price"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Total In Stocks
                </label>
                <input
                  type="text"
                  name="productStocks"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Total In Stocks"
                />
              </div>
            </div>

            {/* for right */}
            <div className="right-items">
              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Parent Category
                </label>
                <select
                  name="parentCategory"
                  onChange={getsubCategory}
                  className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="">Select Category</option>
                  {parentCategory.map((obj, index) => (
                    <option value={obj._id}> {obj.categoryName} </option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Sub Category
                </label>
                <select
                  name="subsubCategory"
                  className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="">Select Category</option>
                  {subsubCategory.map((obj, index) => (
                    <option value={obj._id}> {obj.subSubcategoryName} </option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Color
                </label>
                <select
                    name="productColor[]"
                    multiple
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="">Select Category</option>
                    {color.map((obj, index) => (
                      <option value={obj._id}> {obj.colorName} </option>
                    ))}
                  </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Best Selling
                </label>
                <select name="productBestSelling" className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Upsell
                </label>
                <select name="productUpsell" className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  name="productSalePrice"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder=" Sale Price"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Order
                </label>
                <input
                  type="text"
                  name="productOrder"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="Order"
                />
              </div>
            </div>
          </div>

          <div className="py-[40px]">
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-[200px]"
            />
          </div>

          <button class=" mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
}
