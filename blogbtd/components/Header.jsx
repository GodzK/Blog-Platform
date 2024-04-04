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
        <p><br />
I dreamed that one day I would become a skilled frontend developer with the experience to teach others to understand code effortlessly and wanted to advance technology further.</p>
        </div>
      <div className='img'>
        <img src={pk} alt="" />
      </div>
    </div>
  );
}

export default Header;
