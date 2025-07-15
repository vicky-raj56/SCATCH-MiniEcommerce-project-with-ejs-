import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterLogin from "./pages/RegisterLogin";
import CreateProduct from "./pages/CreateProduct";
import OwnerLogin from "./pages/OwnerLogin";
import Shop from "./pages/Shop";
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterLogin/>}/>
      <Route path="/owner" element={<OwnerLogin/>}/>
      <Route path="/owner/product" element={<CreateProduct/>}/>
      <Route path="/user/shop" element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
   <Toaster/>
    
    </>
  );
};

export default App;
