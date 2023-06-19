import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import About from './pages/About';
import { useState } from 'react';


function App() {
  
  console.log('App.js re-rendered')

  const [todos,setTodos] = useState([]); 

  // const addTodo = ()=>{
  //   setTodos((t)=>[...t,"Todo no 1"])
  // }

  return (
    <div className="App">
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
      <About/>
    </div>
  );
}

export default App;