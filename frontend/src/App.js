import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Form from "./components/AccountForms/Form";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pageContainer">
        <AnimatePresence>
          <Routes>
            <Route index element={<Home />} />
            <Route path="templates" element={<div />} />
            <Route path="pricing" element={<div />} />
            <Route path="form/*" element={<Form />} />
            <Route path="help" element={<div />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
