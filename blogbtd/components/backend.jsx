import React from "react";
import db from "./db.json";

function Backend() {
  const BackEndData = db.filter((item) => item.tech1 === "BackEnd");

  return (
    <>

      <div className="grid-container">     
       <h2 className="text-center ">บทความเกี่ยวกับ <span>Backend</span></h2>
       
        {BackEndData.map((item) => (
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

export default Backend;