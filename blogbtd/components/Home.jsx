import React from "react";
import './Home.css';

function Home(props) {
  return (
    <div className="pic-card">
      <img src={props.img} alt="Project" />
      <h3 >{props.text}</h3>
      <div className="category">  
        <button className="button">{props.tech1}</button>
        <button className="button">{props.tech2}</button>
        <button className="button">{props.tech3}</button>
      </div>
     <div className="user-emo">
     👤 {props.viewer}
     </div>
    </div>
  );
}

export default Home;
