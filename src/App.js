import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from './Login';
import Signup from "./Signup";
import Tab from './Tab';
function App() {
  return (
    <>

<BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Signup/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={ <Login />}> </Route>
        </Routes>
        <Routes>
          <Route exact path="/tab" element={ <Tab />}> </Route>
        </Routes>
      </BrowserRouter> 
   
    </>
  );
}

export default App;
