import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import "./theme.css"
export default function Home() {
  
  return (
    <div className="container">
    <TextForm title="Enter Text" />
    </div>
  );
}
