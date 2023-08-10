import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Form from "./components/AccountForms/Form";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <NavBar />
      <motion.div className="pageContainer">
        <AnimatePresence>
          <Routes>
            <Route path="form/*" element={<Form />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
