import React from "react";
import db from "./db.json";
import '../style/foursec.css'
function Frontend() {
  const frontEndData = db.filter((item) => item.tech1 === "FrontEnd");

  return (
    <>
 <h2 className="text-center m-2">บทความเกี่ยวกับ <span>Frontend</span></h2>
      <div className="grid-container">     
      
        {frontEndData.map((item) => (
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

export default Frontend;
