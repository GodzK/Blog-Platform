import React from "react";
import db from "./db.json";
import '../style/foursec.css'
function Framework() {
  const Frameworkdata = db.filter((item) => item.tech1 === "Framework");

  return (
    <>
     <h2 className="text-centerr ">บทความเกี่ยวกับ <span>Framework</span></h2>
      <div className="grid-containerr">     
  
       
        {Frameworkdata.map((item) => (
          <div key={item.link}>
            <h3>{item.text}</h3>
            <img src={item.img} alt={item.text} />
            <p>
            Tech: {item.tech1}, {item.tech2}, {item.tech3}
            </p>
            <p>จำนวนผู้เข้าชม: {item.viewer}</p>
            <a href={item.link}>อ่านต่อ...</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Framework;
