import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterLogin = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let serverUrl = "http://localhost:8080/users";
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(serverUrl + "/register", data);
      console.log(res.data);
      toast.success(res.data.message);
      setData({
        fullname: "",
        email: "",
        password: "",
        contact: "",
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("token saved");
      } else {
        console.log("token not provided");
      }
      Navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // login
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(serverUrl + "/login", login);
      console.log(res.data);
      toast.success(res.data.message);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("token saved");
      } else {
        console.log("token not provided");
      }
      setLogin({
        email: "",
        password: "",
      });
      Navigate("/shop");
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message || "somthing went worng");
    }
  };

  return (
    <div className="font-['helvetica_now_display']">
      <div className="w-full h-screen flex px-20">
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            <h3 className="text-4xl">
              welcome to{" "}
              <span className="text-blue-400 font-semibold">Scatch</span>
            </h3>
            <h4 className="text-2xl mb-5">create your account</h4>
            <form onSubmit={submitHandler}>
              <input
                onChange={inputHandler}
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={data.fullname}
              />
              <input
                onChange={inputHandler}
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
              />
              <input
                onChange={inputHandler}
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
              />
              <input
                onChange={inputHandler}
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="number"
                placeholder="contact number"
                name="contact"
                value={data.contact}
              />

              <input
                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white cursor-pointer"
                type="submit"
                value="Create My Account"
              />
            </form>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            {/* login form */}
            <h4 className="text-2xl capitalize mb-5">login your account</h4>
            <form onSubmit={loginFormHandler}>
              <input
                onChange={loginInputHandler}
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
                value={login.email}
              />
              <input
                onChange={loginInputHandler}
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
                value={login.password}
              />
              <input
                className="px-5 block cursor-pointer rounded-full py-3 mt-2 bg-blue-500 text-white"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
