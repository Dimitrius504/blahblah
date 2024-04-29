import { useState } from "react";
import { useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//custom imports
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Films from "./components/Films";


window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  console.log(scrolled);

  if (scrolled >= 3) {
    document.getElementById('header').style.backgroundColor = 'black';
  }
  else if (scrolled <= 1) {
    document.getElementById('header').style.backgroundColor = '';
  }
});

function App() {

  return (
    <div className="application-content">
      <Navbar />
      <Featured />
      <Films />
    </div>
  );
}

export default App;
