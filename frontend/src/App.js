import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
//import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Form from "./components/AccountForms/Form";
import Home from "./components/pages/Home.jsx";
import { createJSONStorage, atomWithStorage } from "jotai/utils";
import Profile from "./components/pages/profile/Profile";

const storage = createJSONStorage(() => sessionStorage);
export const statusAtom = atomWithStorage("logged-in", false);
export const userAtom = atomWithStorage("user-data", "", storage);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.slice(0, 8) !== "/profile" && <NavBar />}
      <div className="pageContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="templates" element={<div />} />
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
