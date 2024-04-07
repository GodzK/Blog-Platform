import React, { useState } from 'react';
import Home from './Home';
import Form from 'react-bootstrap/Form';
import db from './db.json';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  function Data() {
    const [search, setSearch] = useState('');
  
    return (
      <>
        <Form>
          <InputGroup className="w-30 p-3">
            <Form.Control
              placeholder="Search Blog"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </InputGroup>
        </Form>
        <div className="grid-container">
          {db
            .filter((item) => item.text.toLowerCase().includes(search))
            .map((item, index) => (
              <Home
                key={index}
                img={item.img}
                text={item.text}
                tech1={item.tech1}
                tech2={item.tech2}
                tech3={item.tech3}
                link={item.link}
                viewer={item.viewer}
              />
            ))}
            
        </div>
      </>
    );
  }

export default Data;
