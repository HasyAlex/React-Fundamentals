import React from "react";
import NameList from './component/Pages/NameList/NameList';
import HeaderBar from "./component/HeaderBar/HeaderBar";
import Home from "./component/Pages/Home/Home"
import Help from "./component/Pages/Help/Help"
import { BrowserRouter, Route ,Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <HeaderBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/names" element={<NameList/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>     
  );
}

export default App;
 