import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
// import { Context } from "../main";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const token = JSON.parse(localStorage.getItem("token"));

  const handleLogout = async () => {
   try {
    await axios
    .get(`https://hospital-backend-81if.onrender.com/api/v1/user/patient/logout`,{
      withCredentials:true,
      headers: { "Content-Type": "application/json",'Authorization': token,}
    })
    .then((res) => {
      console.log(isAuthenticated);
      toast.success(res.data.message);
      setIsAuthenticated(false);
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
   } catch (error) {
    console.log(error); 
   }
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    setShow(!show)
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={()=>{handleLogout(); setShow(!show)}} >
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
