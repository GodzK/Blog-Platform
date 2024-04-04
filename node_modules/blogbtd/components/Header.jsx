import React from 'react';
import pk from '../public/images/profile.png';
import './Header.css';
import { display } from '@mui/system';

function Header() {
  return (
    <div className='container'>
      <div className='header-name'>
      <h1 style={{ color: "#fff" }}>Hi Im <span style={{ color: "blueviolet" }}>Pk Phakaphol Dherachaisuphakij</span> </h1>
        <p>front-end Developer Section from Bortodev Devinit#2</p>
        <div className='social'>
           <a href='https://www.facebook.com/phakaphol.dherachaisuphakij/'><img src="/images/fb.png" alt=""  /></a>
        <a href='https://www.instagram.com/pk._tcsk/'><img src="/images/ig.png" alt=""  /></a>
        <a href='https://www.linkedin.com/in/phakaphol-dherachaisuprakij-1092ab256/'><img src="/images/li.png" alt=""  /></a> <br/>  
        </div>
       
        </div>
      <div className='img'>
        <img src={pk} alt="" />
      </div>
    </div>
  );
}

export default Header;
