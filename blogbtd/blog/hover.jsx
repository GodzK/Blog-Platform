import React from 'react';
import "./hover.css";
import { button } from '@material-tailwind/react';

function hovers() {
  const htmlCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <button class="button">Click Me!</button>
  </body>
  </html>`;
  const cssCode = `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    margin: 0; 
    background-color: #000;
}
.button {
    background-color: hsl(158, 95%, 34%);
    border: white solid;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }`;
  const buttonCode = ` .button:hover{
    background-color: hsl(0, 0%, 100%);
    border: hsl(158, 95%, 34%) solid;
    color: hsl(158, 95%, 34%);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }`;



  
  return (
    <>
    <div className="container">
      <img src="/images/he.jpg" alt="" className="imagei"/>
      <h1 className="text">Hover Effect</h1>
    </div>
    <div className='centerp'>  
    <p>สวัสดีครับ พีเค ภัคพล ธีรชัยศุภกิจ section frontend developer วันนี้ผมมากับบทความHover Effect ซึ่งเหมาะกับคนที่ต้องการจะเพิ่มลูกเล่นในเว็บของตัวเองให้ดูดีมากยิ่งขึ้นครับผม</p>
      <img src="/images/giphy1.gif" alt="" className="imagep" />
    <h1>มาเริ่มกันที่Hover Effectคืออะไร?</h1>
    Hover Effect คือ เมื่อเราเอาเมาส์ไปชี้ องค์ประกอบบางอย่างจะถูกเปลี่ยนเเปลงไป ซึ่งองค์ประกอบนั้นเนี่ย อาจเป็นได้ทั้ง ข้อความ , ปุ่ม , รูปภาพ ซึ่งการเปลี่ยนเเปลงนั้นเนี่ย สามารถเป็นการเพิ่มGraphic Effect , สี , ขนาด , หรือการเคลื่อนไหวให้องค์ประกอบหรือเราเรียกว่าcomponentเนี่ยดูมีสีสันเเละน่าสนใจขึ้น
    <h1>มาลองเขียนHover Effect กันเลย!</h1>
    <p>เราจะทำHover Effectกับปุ่มกันก่อนนะครับ</p>
    <h1>ขั้นตอนที่:1 สร้างไฟล์ HTML กับ CSS</h1>
    <p>โค้ด HTMl ไฟล์ index.html</p>
    <textarea readOnly rows={10} cols={50} value={htmlCode}></textarea>
    <p>โค้ด Css ไฟล์style.css</p>
    <textarea readOnly rows={10} cols={50} value={cssCode}></textarea>
    <p>โค้ดcss ผมเเต่งให้ปุ่มมาอยู่ตรงกลางเพื่อให้เห็นได้ชัดเจนขึ้น นี่คือโค้ดที่จะได้ ครับ</p>
    <img src='/images/giphy2.gif'></img>
    <p>จะเห็นได้ว่าเมื่อเราเอาเมาส์ไปวางบนcomponentก็จะไม่เกิดอะไรขึ้น เรามาลองทำให้มันมีสีสันมากกว่านี้กัน</p>
    <h1>ขั้นตอนที่: 2 .ใส่Hoverของclass Buttonที่สร้าง</h1>
    <p>!!ข้อควรระวัง :hoverจะต้องอยู่ติดกัน ไว้เว้นวรรคกับclassที่จะตกเเต่ง</p>
    <textarea readOnly rows={10} cols={50} value={buttonCode}></textarea>
    <p>นี่คือสิ่งที่ได้!</p>
    <img src="/images/giphy3.gif" alt="" />
    <p>เมื่อเราเอาเมาส์ไปวาง สีของblackgroundที่เราต้องไว้ หรือ สีของตัวอักษรก็ได้เปลี่ยนเเปลงไปเเล้วครับ!!</p>
    <h1>มันทำงานยังไง?</h1>
    <p>ง่ายๆเลยครับ เมื่อเราเอาเมาส์ไปวางHover effectของclassนั้นก็จะถูกทำงาน นั่นเองครับ</p>
    <p>เพียงเท่านี้เราก็มีเว็บที่มีcomponentลูกเล่นสวยงามสดุดตาอย่างง่ายๆ เเละยังเอาความรู้ที่ได้ไปต่อยอดในการทำHover effectอื่นๆเช่น hover กับรูป หรือ จะเป็นHamburger Menu เเละอื่นๆ นั่นเองครับ</p>
    </div>
    </>
    
  );
}

export default hovers;