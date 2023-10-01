import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </>
  );
}

export default App;
