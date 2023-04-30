import {React, useState, createContext} from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Home from "../components/Home";
import Nav from "../components/Nav";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

export const store = createContext()



const App = () => {

  const [token, setToken] = useState(null)
  
  return (
    <div>
      <store.Provider value = {[token,setToken]} >
      <BrowserRouter>
      < Nav/> 
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  );
};

export default App;
