import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Layout from "./pages/Layout"
// import Blogs from "./pages/Blogs"
// import Contact from "./pages/Contact"
// import NoPage from "./pages/NoPage"
// import { useState } from 'react';
import Home from './pages/Home';
import HookUseReducerCheckbox from './pages/HookUseReducerCheckbox'

function App() {
  
  console.log('App.js re-rendered')

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <HookUseReducerCheckbox/> */}
      {}
      {/* <BrowserRouter>    
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/> 
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>d
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;