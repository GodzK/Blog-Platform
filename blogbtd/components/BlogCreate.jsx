import React, { useState } from 'react';
import './BlogCreate.css';

function BlogCreate() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="login-box">
      <h2>PK <span>Blog</span></h2>
      <div className="blog-image-wrapper">
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="heading Image"
            className="selected-image"
          />
        )}
      </div>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" placeholder="Your Blog Name" />
          <label>Your Blog Name</label>
        </div>
        <div className="user-box">
          <textarea type="text" name="" required="" placeholder="Write your Blog body here" /> 
          <label>Blog body</label> 
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit Blog
        </a>
      </form>
    </div>
  );
}

export default BlogCreate;
