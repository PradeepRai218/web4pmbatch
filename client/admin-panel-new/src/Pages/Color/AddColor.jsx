import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChromePicker } from "react-color";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddColor() {
  let baseURL = import.meta.env.VITE_APIBASEURL;
  let navigate  =useNavigate()
  console.log(baseURL);

  const { id } = useParams();

  let [formValue, setFormValue] = useState({
    colorName: "",
    colorCode: "",
    colorOrder: "",
  });

  let saveData = (e) => {
    let obj = {
      colorName: e.target.colorName.value,
      colorCode: e.target.colorCode.value,
      colorOrder: e.target.colorOrder.value,
    };

    if (id) {
      axios
        .put(`${baseURL}color/update/${id}`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes._status) {
            setFormValue({
              colorName: "",
              colorCode: "",
              colorOrder: "",
            });
            navigate('/color/view')
          } else {
            alert(finalRes.error.colorName);
          }
        });
    } else {
      axios
        .post(`${baseURL}color/create`, obj)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes._status) {
             navigate('/color/view')
            setFormValue({
              colorName: "",
              colorCode: "",
              colorOrder: "",
            });
          } else {
            alert(finalRes.error.colorName);
          }
        });
    }

    e.preventDefault();
  };

  let getValueorSetValue = (e) => {
    let inputName = e.target.name; //colorName
    let inputValue = e.target.value;

    let obj = { ...formValue }; //{colorName: '', colorCode: '', colorOrder: ''}
    obj[inputName] = inputValue; //obj[colorName]=p
    // //{colorName: p, colorCode: '', colorOrder: ''}
    setFormValue(obj);
    console.log(obj);
  };

  useEffect(() => {
    setFormValue({
      colorName: "",
      colorCode: "",
      colorOrder: "",
    });

    if (id) {
      axios
        .get(`${baseURL}color/edit-data/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          let { colorData } = finalRes;

          setFormValue({
            colorName: colorData.colorName,
            colorCode: colorData.colorCode,
            colorOrder: colorData.colorOrder,
          });
        });
    }
  }, [id]);

  return (
    <div className="w-full">
      <div className="max-w-[1220px] mx-auto py-5">
        <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
          {id ? "Update Color" : "Add Colors"}
        </h3>

        <form
          className="p-3 border border-t-0 rounded-b-md border-slate-400"
          onSubmit={saveData}
        >
          {/* Color Name */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">
              Color Name
            </label>
            <input
              type="text"
              value={formValue.colorName}
              onChange={getValueorSetValue}
              name="colorName"
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Color Name"
            />
          </div>

          {/* Color Picker */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">
              Color Picker
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                onChange={getValueorSetValue}
                value={formValue.colorCode}
                name="colorCode"
              />
              {/* <ChromePicker color={color} onChange={handleColorChange} />
              <div className="w-10 h-10 border border-gray-400 rounded-md" style={{ backgroundColor: color }}></div> */}
            </div>
          </div>

          {/* Color Order */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">
              Order
            </label>
            <input
              type="number"
              name="colorOrder"
              value={formValue.colorOrder}
              onChange={getValueorSetValue}
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Order"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
