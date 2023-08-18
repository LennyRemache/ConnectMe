import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Form from "./components/AccountForms/Form";
import Home from "./components/pages/Home.jsx";
import { atomWithStorage } from "jotai/utils";
import Profile from "./components/pages/profile/Profile";

export const statusAtom = atomWithStorage("status", false);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.slice(0, 8) !== "/profile" && <NavBar />}
      <div className="pageContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="marketplace" element={<div />} />
          <Route path="discover" element={<div />} />
          <Route path="pricing" element={<div />} />
          <Route path="learn" element={<div />} />
          <Route path="form/*" element={<Form />} />
          <Route path="profile/*" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
