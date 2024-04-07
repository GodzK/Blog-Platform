import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home(props) {
  const [link, setLink] = useState("");

  const handleLinkClick = () => {
    setLink(props.link);
  };

  useEffect(() => {
    if (link) {
      window.location.href = link;
    }
  }, [link]);

  return (
    
    <div className="pic-card">
    <img src={props.img} alt="Project"  />
      <Link to={props.link}><h3>{props.text}</h3></Link>
      <div className="category">
        <button className="button">{props.tech1}</button>
        <button className="button">{props.tech2}</button>
        <button className="button">{props.tech3}</button>
      </div>
      <div className="user-emo" >
      <p style={{color:"black"}}>👤{props.viewer}</p>
      </div>
    </div>
  );
}

export default Home;
