import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import Form from "./components/AccountForms/Form";
import Home from "./components/Home";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <NavLink to="form">Log In</NavLink>
      <Routes>
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
