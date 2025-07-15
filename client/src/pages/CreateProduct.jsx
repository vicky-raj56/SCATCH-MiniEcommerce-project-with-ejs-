import React from "react";

const CreateProduct = () => {
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
            <form
              
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Product Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    className="py-2 px-4 rounded"
                    value="Select File"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    name="price"
                    type="text"
                    placeholder="Product Price"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    name="discount"
                    type="text"
                    placeholder="Discount Price"
                    className="border p-2 rounded w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Panel Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="bgcolor"
                    type="text"
                    placeholder="Background Color"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    name="panelcolor"
                    type="text"
                    placeholder="Panel Color"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    name="textcolor"
                    type="text"
                    placeholder="Text Color"
                    className="border p-2 rounded w-full"
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
