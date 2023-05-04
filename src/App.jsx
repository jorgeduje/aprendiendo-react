import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import { Login } from "./components/Login";
import Register from "./components/register/Register";
import UserDetail from "./components/userDetail/UserDetail";


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserDetail/>} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;