import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import Breadcrumb from "../../common/Breadcrumb";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddSubSubCategory() {
  let { id } = useParams();
  let navigate=useNavigate()
  let baseURL = import.meta.env.VITE_APIBASEURL;
  let [parentCategory, setParentCategory] = useState([]);
  let [subCategory, setsubCategory] = useState([]);
  let getparentCategory = () => {
    axios
      .get(`${baseURL}subsubcategory/parent-category`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParentCategory(finalRes.category);
      });
  };

  let getsubCategory = (e) => {
    // console.log(e.target.value);

    let pId = e.target.value;

    axios
      .get(`${baseURL}subsubcategory/sub-category/${pId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setsubCategory(finalRes.subcategory);
      });
  };

  let saveSubsubCategory = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    axios
      .post(`${baseURL}subsubcategory/create`, form)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
          e.target.reset();
          console.log(finalRes);
          
          navigate("/category/sub-sub-category/view");
        } else {
        }
      });
  };

  useEffect(() => {
    getparentCategory();
  }, []);

  return (
    <section className="w-full">
      <Breadcrumb
        path={"Sub Category"}
        path2={"Add Sub Category"}
        slash={"/"}
      />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Sub Category
          </h3>
          <form
            onSubmit={saveSubsubCategory}
            autoComplete="off"
            className="border border-t-0 p-3 rounded-b-md border-slate-400"
          >
            <div className="flex gap-5">
              <div className="w-1/3">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900"
                >
                  Category Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="subSubcategoryImage"
                  id="categoryImage"
                  className="dropify"
                  data-height="260"
                />
              </div>

              <div className="w-2/3">
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block mb-5 text-md font-medium text-gray-900">
                    Parent Category Name
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
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block mb-5 text-md font-medium text-gray-900">
                    Sub Category Name
                  </label>
                  <select
                    name="subCategory"
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
                    className="block  text-md font-medium text-gray-900"
                  >
                    sub Subcategory Name
                  </label>
                  <input
                    type="text"
                    name="subSubcategoryName"
                    id="categoryName"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Name"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="order"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    name="subSubcategoryOrder"
                    id="order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Order"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {id ? "Update Sub Category" : "Add Sub Category"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
