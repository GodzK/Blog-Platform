import React from 'react'
import './popblog.css'
import { Link } from 'react-router-dom';
function popblog() {
  return (
    <div>
      
    <h1 className='header-text'>Popular <span>blog📝</span> </h1>
    <main className="testimonial-grid">
    <article className="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
      <div className="flex">
        <div>
          <h2 className="name">Phakaphol Dherachaisuphakij</h2>
          <p className="position" style={{ color: "#fff" }}>Sarasas Pittaya</p>
        </div>
      </div>
      <p style={{ color: "#fff" }}>
       Hover Effectคืออะไร??
      </p>
      <p style={{ color: "#fff" }}>
        “ สวัสดีครับ พีเค ภัคพล ธีรชัยศุภกิจ section frontend developer วันนี้ผมมากับบทความHover Effect ซึ่งเหมาะกับคนที่ต้องการจะเพิ่มลูกเล่นในเว็บของตัวเองให้ดูดีมากยิ่งขึ้นครับผม
        มาเริ่มกันที่Hover Effectคืออะไร?
        Hover Effect คือ เมื่อเราเอาเมาส์ไปชี้ องค์ประกอบบางอย่างจะถูกเปลี่ยนเเปลงไป ซึ่งองค์ประกอบนั้นเนี่ย อาจเป็นได้ทั้ง ข้อความ , ปุ่ม , รูปภาพ ซึ่งการเปลี่ยนเเปลงนั้นเนี่ย สามารถเป็นการเพิ่มGraphic Effect , สี , ขนาด , หรือการเคลื่อนไหวให้องค์ประกอบหรือเราเรียกว่าcomponentเนี่ยดูมีสีสันเเละน่าสนใจขึ้น
        มาลองเขียนHover Effect กันเลย!
        เราจะทำHover Effectกับปุ่มกันก่อนนะครับ ขั้นตอนที่:1 สร้างไฟล์ HTML กับ CSS ”
      </p>
        <Link to="/Hover" className="button-link">
       <button>อ่านเพิ่มเติม</button>
      </Link> 
     
    </article>
    <article className="testimonial flow bg-secondary-400 text-neutral-100">
      <div className="flex">
       
       
        <div>
          <h2 className="name">Phakaphol Dherachaisuphakij</h2>
          <p className="position" style={{ color: "#fff" }}>King Mongkuts University of Technology Thonburi (KMUTT)</p>
        </div>
      </div>
      <p style={{ color: "#fff" }}>
       Gsapคืออะไร?
      </p>
      <p style={{ color: "#fff" }}>
        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
        for a big company. This was one of the best investments I’ve made in myself. ”
    <a href="https://www.youtube.com/watch?v=rg7Fvvl3taU" className="button-link">
        <button>อ่านเพิ่มเติม</button>
      </a>    </p>
    </article>
    <article className="testimonial flow bg-secondary-400 text-neutral-100">
      <div className="flex">
     
        <div>
          <h2 className="name">Phakaphol Dherachaisuphakij</h2>
          <p className="position" style={{ color: "#fff" }}>King Mongkut's University of Technology Thonburi (KMUTT)</p>
        </div>
      </div>
      <p style={{ color: "#fff" }}>
        An overall wonderful and rewarding experience</p>
      <p style={{ color: "#fff" }}>
        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
        while doing something I love. ”
    <a href="https://www.youtube.com/watch?v=rg7Fvvl3taU" className="button-link">
        <button>อ่านเพิ่มเติม</button>
      </a>    </p>
    </article>
    <article className="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
      <div className="flex">
       
        <div>
          <h2 className="name">Phakaphol Dherachaisuphakij</h2>
          <p className="position" style={{ color: "#fff" }}>King Mongkut's University of Technology Thonburi (KMUTT)</p>
        </div>
      </div>
      <p style={{ color: "#fff" }}>
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
        learning from their experiences was easy.
      </p>
      <p style={{ color: "#fff" }}>
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
        gave me the confidence necessary to be able to go out in the world and present myself as a capable
        junior developer. The standard is above the rest. You will get the personal attention you need from
        an incredible community of smart and amazing people. ”
    <a href="https://www.youtube.com/watch?v=rg7Fvvl3taU" className="button-link">
        <button>อ่านเพิ่มเติม</button>
      </a>    </p>
    </article>
    <article className="testimonial flow bg-secondary-500 text-neutral-100">
      <div className="flex">
       
       
        <div>
          <h2 className="name">Phakaphol Dherachaisuphakij</h2>
          <p className="position" style={{ color: "#fff" }}>King Mongkut's University of Technology Thonburi (KMUTT)</p>
        </div>
      </div>
      <p style={{ color: "#fff" }}>
        Such a life-changing experience. Highly recommended!
      </p>
      <p style={{ color: "#fff" }}>
        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
        100% recommend! ”
    <a href="https://www.youtube.com/watch?v=rg7Fvvl3taU" className="button-link">
        <button>อ่านเพิ่มเติม</button>
      </a>    </p>
    </article>
  </main>

    </div>
  )
}

export default popblog