import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { obtain } from "./redux/actions/index";
import AllCard from "./componentes/cards/allCards";
import Form from "./componentes/formulario/formulario";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  //traer cosas del back
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtain());
  }, [dispatch]);

  return (
      <div className="App">
        <h1>Welcome to the country</h1>
        <Routes>  
          <Route path="/countries" element={<AllCard />} />
          <Route path="/activity" element={<Form/>} />
        </Routes>
       
      </div>
  );
}

export default App;
