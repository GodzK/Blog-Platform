import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Feedback from '../components/feedback';
import Statistic from '../components/statistic';
import Contact from '../components/contact';
import Category from '../components/category';
import Homepages from './Homepages'
import Backend from '../components/backend';
import Frontend from '../components/frontend';
import UXUI from '../components/Uxui'
import Framework from '../components/Framework';
import Button from 'react-bootstrap/Button';
import Create from '../components/Create';
import BlogCreate from '../components/BlogCreate';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1101);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <> 
    <BrowserRouter> 
      <nav>
        <div className="navbar">
          <div className="logo">
          <NavLink to="/"><span style={{ fontSize: "0.9rem" }}>PK</span>
            <a href="#" style={{ fontSize: "1.3rem" }}>blog</a></NavLink>
          </div>
          {isMobile && (
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}
          <ul className={`menu ${isMobile ? (showMenu ? 'active' : '') : ''}`}>
            {isMobile && showMenu && (
              <>
                <li>
                  <NavLink to="/BlogCreate" onClick={() => setShowMenu(false)}>
                    Create Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Statistic" onClick={() => setShowMenu(false)}>
                    Statistic
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Category" onClick={() => setShowMenu(false)}>
                    Category
                  </NavLink>
                </li>
              </>
            )}
            {!isMobile && (
              <>
                <li>
                  <NavLink to="/BlogCreate">Create Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/Statistic">Statistic</NavLink>
                </li>
                <li>
                  <NavLink to="/Category">Category</NavLink>
                </li>

                <li>
                <NavLink to="/Create"><Button variant="primary">Login</Button>{' '}</NavLink>
                
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
     
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/Statistic" element={<Statistic />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Backend" element={<Backend />} />
          <Route path="/Frontend" element={<Frontend />} />
          <Route path="/UX-UI" element={<UXUI />} />
          <Route path="/Framework" element={<Framework />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/BlogCreate" element={<BlogCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
