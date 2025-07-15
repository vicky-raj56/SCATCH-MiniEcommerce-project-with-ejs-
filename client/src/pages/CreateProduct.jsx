import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const [panelcolor, setPanelcolor] = useState("");
  const [textcolor, setTextcolor] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("bgcolor", bgcolor);
      formData.append("panelcolor", panelcolor);
      formData.append("textcolor", textcolor);
      formData.append("image", image);
      const res = await axios.post(
        "http://localhost:8080/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
      toast.success(res.data.message);
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "somthing went wrong");
    }
  };

  return (
    <div className="font-['helvetica_now_display']">
      <div className="min-h-screen flex flex-col">
        <div className="container px-10 py-20 flex flex-grow">
          <div className="w-[25%] flex h-screen flex-col items-start">
            <div className="flex flex-col">
              <a className="block w-fit mb-2" href="">
                All Products
              </a>
              <a className="block w-fit mb-2" href="">
                Create new product
              </a>
            </div>
          </div>
          <main className="w-3/4 bg-white p-8 shadow ml-4">
            <h2 className="text-xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Product Image
                  </label>
                  <input
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    name="image"
                    type="file"
                    className="py-2 px-4 rounded"
                    // value={image}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 rounded w-full"
                    value={name}
                  />
                  <input
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    name="price"
                    type="text"
                    placeholder="Product Price"
                    className="border p-2 rounded w-full"
                    value={price}
                  />
                  <input
                    onChange={(e) => {
                      setDiscount(e.target.value);
                    }}
                    name="discount"
                    type="text"
                    placeholder="Discount Price"
                    className="border p-2 rounded w-full"
                    value={discount}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Panel Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    onChange={(e) => {
                      setBgcolor(e.target.value);
                    }}
                    name="bgcolor"
                    type="text"
                    placeholder="Background Color"
                    className="border p-2 rounded w-full"
                    value={bgcolor}
                  />
                  <input
                    onChange={(e) => {
                      setPanelcolor(e.target.value);
                    }}
                    className="border p-2 rounded w-full"
                    type="text"
                    name="panelcolor"
                    placeholder="Panel Color"
                    value={panelcolor}
                  />
                  <input
                    onChange={(e) => {
                      setTextcolor(e.target.value);
                    }}
                    name="textcolor"
                    type="text"
                    placeholder="Text Color"
                    className="border p-2 rounded w-full"
                    value={textcolor}
                  />
                </div>
              </div>
              <input
                className="px-5 py-2 rounded mt-3 bg-blue-500 text-white"
                type="submit"
                value="Create New Product"
              />
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
