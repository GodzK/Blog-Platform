import React from 'react'
import Home from "./Home"
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
function Data() {
  return (
    < >
    <BrowserRouter>
    <div className="grid-container">
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    <NavLink to ="https://www.borntodev.com/?p=95333"><Home img="../pages/img/he.jpg" text = "Hover Effectคืออะไร?" tech1= "Frontend" tech2 = "CSS" tech3="JAVASCRIPT"/></NavLink>
    </div>
    </BrowserRouter>
    
    
    </>
  )
}

export default Data
