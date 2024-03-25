import React from "react";
import './Home.css';

function Home(props) {
  return (
    <div className="pic-card">
      <img src={props.img} alt="Project" />
      <h3>{props.text}</h3>
      <div className="category">
        <button className="button">{props.tech1}</button>
        <button className="button">{props.tech2}</button>
        <button className="button">{props.tech3}</button>
      </div>
      <div className="rating">
        <input value="5" name="rating" id="star5" type="radio" />
        <label htmlFor="star5"></label>
        <input value="4" name="rating" id="star4" type="radio" />
        <label htmlFor="star4"></label>
        <input value="3" name="rating" id="star3" type="radio" />
        <label htmlFor="star3"></label>
        <input value="2" name="rating" id="star2" type="radio" />
        <label htmlFor="star2"></label>
        <input value="1" name="rating" id="star1" type="radio" />
        <label htmlFor="star1"></label>
      </div>
    </div>
  );
}

export default Home;
