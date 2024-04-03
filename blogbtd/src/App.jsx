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
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
                  <NavLink to="/" onClick={() => setShowMenu(false)}>
                    Home
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
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Statistic">Statistic</NavLink>
                </li>
                <li>
                  <NavLink to="/Category">Category</NavLink>
                </li>

                <li>
                  <Button variant="primary">Login</Button>{' '}
                  <Button variant="light">Sign up</Button>{' '}
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
