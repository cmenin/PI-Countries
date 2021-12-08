import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { obtain } from "./redux/actions/index";
import AllCard from "./componentes/cards/allCards";
import Form from "./componentes/formulario/formulario";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./componentes/cards/detail";
import LandingPage from "./componentes/landingPage/landingPage";


function App() {
  //traer cosas del back
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtain());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<LandingPage/>} />
          <Route path="/countries" element={<AllCard />} />
          <Route path="/countries/detail/:id" element={<Detail/>}/>
          <Route path="/activity" element={<Form/>} />
        </Routes>

      </div>
    </Router>
       
  );
}

export default App;
