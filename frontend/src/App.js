import { Routes, Route } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Form from "./components/AccountForms/Form";
import Home from "./components/pages/Home.jsx";
import { atomWithStorage } from "jotai/utils";

export const statusAtom = atomWithStorage("status", false);

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pageContainer">
        <Routes>
          <Route index element={<Home />} />
          <Route path="templates" element={<div />} />
          <Route path="pricing" element={<div />} />
          <Route path="form/*" element={<Form />} />
          <Route path="help" element={<div />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
