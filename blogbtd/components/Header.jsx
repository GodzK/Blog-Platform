import React from 'react';
import pk from '../pages/img/profile.png';
import './Header.css';

function Header() {
  return (
    <div className='container'>
      <div className='header-name'>
        <h1>Hi Im <span style={{ color: "blueviolet" }}>Pk Phakaphol Dherachaisuphakij</span> </h1>
        <p>front-end Developer Section from Bortodev Devinit#2</p>
        <a href='https://www.facebook.com/phakaphol.dherachaisuphakij/'><img src="../pages/img/fb.png" alt=""  /></a>
        <a href='https://www.instagram.com/pk._tcsk/'><img src="../pages/img/ig.png" alt=""  /></a>
        <a href='https://www.linkedin.com/in/phakaphol-dherachaisuprakij-1092ab256/'><img src="../pages/img/li.png" alt=""  /></a> <br/>  
        <div className="textInputWrapper">
    <input placeholder="Find Pk Blog" type="text" className="textInput"/>
       </div>
        </div>
      <div className='img'>
        <img src={pk} alt="" />
      </div>
      
    </div>
  );
}

export default Header;
