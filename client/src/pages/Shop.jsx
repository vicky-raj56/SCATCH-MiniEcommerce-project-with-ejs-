import React from "react";

const Shop = () => {
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
        <div className="w-[75%] flex flex-col gap-5 h-screen">
          <div className="flex items-start gap-5">
            {/* <% products.forEach(function(product){ %> */}
            <div className="w-60">
              <div className="w-full h-52 flex items-center justify-center bg-[<%= product.bgcolor %>]">
                <img
                  className="h-[12rem]"
                  src=""
                  //   src="/uploads/<%=product.image %>"
                  alt="test"
                />
              </div>
              <div className="flex justify-between bg-[<%= product.panelcolor %>] items-center px-4 py-4 text-[<%= product.textcolor %>]">
                <div>
                  <h3>{/* <%= product.name %> */}</h3>
                  <h4>₹{/* <%= product.price %> */}</h4>
                </div>
                <a
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white"
                  href=""
                >
                  <i className="ri-add-line"></i>
                </a>
              </div>
            </div>

            {/* <% }) %> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
