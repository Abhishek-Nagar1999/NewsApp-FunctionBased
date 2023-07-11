import './App.css';
import React, {useState } from 'react'
import NavBar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App=(props)=> {
 const apiKey = process.env.REACT_APP_NEWS_API

 
   const[progress,setProgress]=useState(0)
  
  const setStateProgress=(progress)=>{
   setProgress(progress)
  }


  
    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
        color='red'
        progress={progress}
        height= {3} 
      />
       <Routes>
       <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key={'general'} pageSize={6} country="in" category='general'></News>}/>
       <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key={"business"} pageSize={6} country="in" category='business'>Business</News>}/>
       <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key={"entertainment"} pageSize={6} country="in" category='entertainment'>Entertainment</News >}/>
       <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key={'health'} pageSize={6} country="in" category='health'>Health</News >}/>
       <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey}  key={"science"} pageSize={6} country="in" category='science'>Science</News >}/>
       <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key={"sports"} pageSize={6} country="in" category='sports'>Sports</News>}/>  
       <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key={"technology"} pageSize={6} country="in" category='technology'>Technology</News>}/>
       </Routes>

       </Router>
      </div>
    )
  }

  export default App
