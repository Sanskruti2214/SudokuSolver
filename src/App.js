import React,{useState,useEffect} from 'react';
import './App.css';
import Splash from './Components/Splash.js';
import Home from './Components/Home.js';
function App() {
  const[Loading,setLoading]=useState(true);
  useEffect (()=>{
    const timer=setTimeout(()=>{
      setLoading(false);
    },2000);
    return ()=>clearTimeout(timer);
  },[]);

  return (
    <div className="App">
      {Loading?(<Splash/>):(<Home/>)}
    </div>
  );
};

export default App;
