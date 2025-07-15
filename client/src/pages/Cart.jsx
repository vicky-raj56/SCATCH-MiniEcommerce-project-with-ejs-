import React from "react";

const Cart = () => {
  return (
    <div className="font-['helvetica_now_display']">
      <div className="w-full h-screen flex items-start px-20 py-20 gap-10">
        <div className="w-[30%] rounded-md overflow-hidden">
          <div className="w-full h-80 bg-yellow-500"></div>
          <div className="w-full flex justify-between px-5 py-4">
            <h3 className="text-2xl">Clinge Bag</h3>
            <div className="flex items-center gap-2">
              <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-add-line"></i>
              <div className="px-2 py-1 rounded-md bg-white text-black">01</div>
              <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-subtract-line"></i>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-3">
            <h4 className="text-lg">Net Total</h4>
            <h2 className="text-lg">₹ 1200</h2>
          </div>
        </div>
        <div className="w-[70%]">
          <h3 className="text-xl">Price Breakdown</h3>
          <div className="px-10 mt-5">
            <div className="flex mt-2">
              <h4 className="w-1/3">Total MRP</h4>
              <h4>₹ 1920</h4>
            </div>
            <div className="flex mt-2">
              <h4 className="w-1/3">Discount on MRP</h4>
              <h4>₹ 0</h4>
            </div>
            <div className="flex mt-2">
              <h4 className="w-1/3">Platform Fee</h4>
              <h4>₹ 20</h4>
            </div>
            <div className="flex mt-2">
              <h4 className="w-1/3">Shipping Fee</h4>
              <h4>FREE</h4>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black mt-10"></div>
          <div className="flex mt-5">
            <h3 className="w-1/3 text-xl">Total Amount</h3>
            <h3 className="font-semibold text-xl text-green-600">₹ 1940</h3>
          </div>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
