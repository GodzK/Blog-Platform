import '../components/navbar';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Feedback from '../pages/feedback';
import About from '../pages/about';
import Contact from '../pages/contact';
import Category from '../pages/category';
import Data from '../pages/Data'
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import './App.css'
function App() {
  return (
    <> <BrowserRouter>
      <nav>
        <div className="navbar">
          <div className="logo"><span>PK</span><a href="#">blog</a></div>
          <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Category">Category</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <Button variant="primary">Login</Button>{' '}
            <Button variant="light">Sign up</Button>{' '}
          </ul>
        </div>
      </nav>
      <Routes>   
        <Route path="/About" element={<About />} />  
        <Route path="/Category" element={<Category />} />  
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
    <Header/>
    <div className='blog-head'>
       <h2 >My Blog</h2>
    </div>
   
   <Data/>
    </>
   
  );
}

export default App;
