import "./App.css";
import Home from "./component/Home";
import Preview from "./component/Preview";
import Modal from "./component/Modal";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      {/* <Preview /> */}
    </div>
  );
}
