import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
const serverUrl = "http://localhost:8080/products";
const Shop = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const productData = async () => {
    try {
      const res = await axios.get(serverUrl + "/shop");
      setDataInfo(res.data.products);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.message || "somthing went wrong");
    }
  };
  useEffect(() => {
    productData();

    // console.log("data",dataInfo)
  },[]);
  console.log(dataInfo);
  return (
    <div className="font-['helvetica_now_display']">
      <div className="w-full h-screen flex items-start px-20 py-20">
        <div className="w-[25%] flex h-screen flex-col items-start">
          <div className="flex items-center gap-2">
            <h3>sort by</h3>
            <form>
              <select className="border-[1px] px-2 py-1" name="sortby" id="">
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
              </select>
            </form>
          </div>
          <div className="flex flex-col mt-20">
            <a className="block w-fit mb-2" href="">
              New Collection
            </a>
            <a className="block w-fit mb-2" href="">
              All Products
            </a>
            <a className="block w-fit mb-2" href="">
              Discounted Products
            </a>
          </div>
          <div className="mt-32">
            <a className="block w-fit mb-2" href="">
              Filter by :
            </a>
            <a className="block w-fit mb-2" href="">
              Availability
            </a>
            <a className="block w-fit mb-2" href="">
              Discount
            </a>
          </div>
        </div>
        <div className="w-[75%] flex flex-col  gap-5 h-screen">
          <div className="flex items-start   gap-5">
            {/* <% products.forEach(function(product){ %> */}
            {dataInfo.map((product, idx) => (
              <div key={idx} className="w-60">
                <div
                  className="w-full h-52 flex items-center justify-center"
                  style={{ backgroundColor: product.bgcolor }}
                >
                  <img
                    className=" w-full h-full object-cover "
                    src={`http://localhost:8080/${product.image.replace(/\\/g, '/')}`}

                    alt={product.name}
                  />
                </div>
                <div
                  className="flex justify-between items-center px-4 py-4"
                  style={{
                    backgroundColor: product.panelcolor,
                    color: product.textcolor,
                  }}
                >
                  <div>
                    <h3>{product.name}</h3>
                    <h4>₹{product.price}</h4>
                  </div>
                  <a
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-green-400"
                    href=""
                  >
                    <i className="  text-green-600 text-3xl font-bold"> + </i>
                  </a>
                </div>
              </div>
            ))}

            {/* <% }) %> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
