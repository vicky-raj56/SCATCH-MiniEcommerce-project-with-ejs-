import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterLogin from "./pages/RegisterLogin";
import CreateProduct from "./pages/CreateProduct";
import OwnerLogin from "./pages/OwnerLogin";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterLogin/>}/>
      <Route path="/owners" element={<OwnerLogin/>}/>
      <Route path="/products" element={<CreateProduct/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
    
    </BrowserRouter>
    {/* <RegisterLogin/> */}
    
    </>
  );
};

export default App;
