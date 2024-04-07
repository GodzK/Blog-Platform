// Create.jsx

import React from 'react';
import styles from './Create.module.css'; // Import CSS module

function Create() {
  return (
    <div className={styles['login-box']}>
      <h2>Log<span>In</span></h2>
      <form>
        <div className={styles['user-box']}>
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div className={styles['user-box']}>
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <a href="#" className={styles['submit-button']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Create;
