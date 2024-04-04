import React from 'react'
import './Create.css'
function Create() {
  return (
    <div className="login-box">
    <h2>PK <span>Blog</span></h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
  )
}

export default Create