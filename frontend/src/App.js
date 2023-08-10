import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import Form from "./components/AccountForms/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="form/*" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
