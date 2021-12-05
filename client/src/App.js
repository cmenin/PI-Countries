import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {obtain} from './redux/actions/index'

function App() {
//traer cosas del back
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(obtain())
  },[dispatch])

  return (
    <div className="App">
      <h1>Country App</h1>
    </div>
  );
}

export default App;
