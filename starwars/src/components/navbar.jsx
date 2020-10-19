import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import {Navbar,Nav} from "react-bootstrap"
import {Dropdown} from "react-bootstrap"
import "./cols.css"
import { Context } from '../store/appContext';
import { FaTrash} from "react-icons/fa";

function Navbartop() {

const { store, actions } = useContext(Context);


  return (
      <div>
          <Navbar className="navsty" bg="dark">
    <Navbar.Brand href="/">
      <img
        src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG10.png"
        width="70"
        height="30"
        className="d-inline-block align-top"
        
      />
    </Navbar.Brand>
    <Dropdown >
  <Dropdown.Toggle  variant="success" id="dropdown-basic">
   Favorites {store.favorites.length}
  </Dropdown.Toggle>

  <Dropdown.Menu  alignRight className="dropdown dropdown-align-right">
      {store.favorites.length>0? 
      
  <ul>{store.favorites.map((item,index)=> {
      return(
          <li key={index}>
          {item}
          <button className ="trash" onClick={()=> actions.delFav(item)}><FaTrash></FaTrash></button>
          </li >
      )
  })}</ul>:
   <p className="listfav">No Favorites ): </p>}
    
  </Dropdown.Menu>
</Dropdown>

  </Navbar>
    
      </div>
    
    
  );
}

export default Navbartop;