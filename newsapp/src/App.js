
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  

} from "react-router-dom";

const App =()=> {
  const apikey=process.env.REACT_APP_NEWS_APP;
  
    return (
      <div>
        <BrowserRouter> 
        <Navbar/>
        <Routes>
        <Route exact path="/" element = {<News key={"General"} apikey={apikey } pageSize = {10} country = "in" category = "General"/>}/>
        <Route exact path="/business" element = {<News key={"Business"} apikey={apikey } pageSize = {10} country = "in" category = "Business"/>}/>
        <Route exact path="/entertainment" element = {<News key={"Entertainment"} apikey={apikey } pageSize = {10} country = "in" category = "Entertainment"/>}/>
        <Route exact path="/general" element = {<News key={"General"} apikey={apikey } pageSize = {10} country = "in" category = "General"/>}/>
        <Route exact path="/health" element = {<News key={"Health"} apikey={apikey } pageSize = {10} country = "in" category = "Health"/>}/>
        <Route exact path="/science" element = {<News key={"Science"} apikey={apikey } pageSize = {10} country = "in" category = "Science"/>}/>
        <Route exact path="/sports" element = {<News key={"Sports"} apikey={apikey } pageSize = {10} country = "in" category = "Sports"/>}/>
        <Route exact path="/technology" element = {<News key={"Technology"} apikey={apikey } pageSize = {10} country = "in" category = "Technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App
