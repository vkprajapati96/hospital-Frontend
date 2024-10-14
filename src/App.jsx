import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import AddNewAdmin from "./Pages/AddNewAdmin";
import AddNewDoctor from "./Pages/AddNewDoctor";
import Messages from "./Pages/Messages";
import Doctors from "./Pages/Doctors";
import DashboardLayout from "./Pages/DashboardLayout";



const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  // useEffect(() => {
  //   console.log(isAuthenticated,"App");
    
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         ""
          
  //       );
  //       setIsAuthenticated(true);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       setUser({});
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashBoard />} />
                <Route path="doctor/addnew" element={<AddNewDoctor />} />
                <Route path="admin/addnew" element={<AddNewAdmin />} />
                <Route path="messages" element={<Messages />} />
                <Route path="doctors" element={<Doctors />} />
            </Route>

        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
