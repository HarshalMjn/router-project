import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";

import {  useState } from "react";


function App() {

  const [isLoggedIn, setIsloggeIn] = useState(false);  
 

  return (
  <div className="w-screen min-h-screen  bg-richblack-900 flex flex-col">

    <Navbar isLoggedIn={isLoggedIn} setIsloggeIn={setIsloggeIn}/>

    <Routes>

      <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsloggeIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsloggeIn}/>}/>
      <Route path="/dashboard" element={
       <PrivateRoute isLoggedIn={isLoggedIn}>
       <Dashboard/>
       </PrivateRoute>
      }/>



    </Routes>

  </div>
  )
}

export default App;
