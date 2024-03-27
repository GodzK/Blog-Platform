import React,{useState} from 'react';
import Home from "./Home";
import Form from 'react-bootstrap/Form';
import { BrowserRouter, NavLink, } from 'react-router-dom';
import { db } from './db';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Data() {
  const [search , setSearch] = useState('');
  return (
    <>
      <BrowserRouter>
      <Form>
        <InputGroup className="w-30 p-3">
          <Form.Control  placeholder="Search Blog"  onChange={(e) => setSearch(e.target.value)} />
         </InputGroup>
      </Form>
        <div className="grid-container">       
          {db.filter((item) =>{
            return search.toLowerCase() ==="" ? item : item.text.toLowerCase().includes(search)
          }).map((item) => (
            <NavLink key={item.id} to={`https://www.borntodev.com/?p=${item.id}`}>
              <Home img={item.img} text={item.text} tech1={item.tech1} tech2={item.tech2} tech3={item.tech3} />
            </NavLink>
          ))}
        </div>
      </BrowserRouter>
    </>
  );
}

export default Data;
