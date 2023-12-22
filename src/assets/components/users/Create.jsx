import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../shared/Input";
import { uservalidationdata } from "../../validation/uservalidation";

import '../css/creat-input.css'
import image_url from "./image/Pink_Panther.png"
export default function Create() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [loader,setLoader]= useState(false);
let [errorBack,setErrorBack]= useState('');
  const getUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    setLoader(true)
    if (Object.keys(uservalidationdata(user)).length > 0) {
      setErrors(uservalidationdata(user));
      setLoader(false)
    } else {
      try{
      const { data } = await axios.post("https://crud-users-gold.vercel.app/users/",user);
      if (data.message == "success") {
        toast.success("user added successfully");
        navigate("/user/index");
      }
    }
    catch(error){
   setErrorBack(error.response.data.message)
     setErrors([])
     setLoader(false)
    }
    }
    if(loader){
      return(
        <Loader/>
      )
    }

  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 left-menu position-relative">
          <div className="w-100 position-absolute Menu-item ">
              <a href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none  w-100">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
            </div>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5"
              id="menu">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-speedometer2" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item 1</span> {" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item 2</span> {" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle " >
                  <i className="fs-4 bi-bootstrap" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Product</span> 4
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={image_url}
                  alt="hugenerd"
                  width={30}
                  height={30}
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-white text-small shadow text-black">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col py-5  container ">
          <form onSubmit={sendData} className=" form-group  form-container">
            <h1>Welcome</h1>
            {errorBack && <p className="text text-danger fs-6">{errorBack}</p>}
            <Input errors={errors} id={"name"} type={"name"} name={"name"} titel={"Name"} getUser={getUser}/>
            <Input errors={errors} id={"email"} type={"email"} name={"email"} titel={"Email"} getUser={getUser}/>
            <Input errors={errors} id={"password"} type={"password"} name={"password"} titel={"Password"} getUser={getUser}/>

            <div className="mb-3 submit">
              <input type="submit" className="form-control" id="submit" />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}