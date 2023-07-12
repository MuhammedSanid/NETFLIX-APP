import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Originals,Action, Horror, Comedy, Romance} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals'/>
     <RowPost url={Action} title ='Action' isSmall/>
     <RowPost url={Horror} title ='Horror' isSmall/>
     <RowPost url={Comedy} title ='Comedy' isSmall/>
     <RowPost url={Romance} title ='Romance' isSmall/>
    </div>
  );
}

export default App;
