import React, {useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import {Link} from "react-router-dom"
import { BsHeart} from "react-icons/bs";
import {CardDeck} from 'react-bootstrap/'
import "./cols.css"
import { Context } from '../store/appContext';
import {FaHeart} from "react-icons/fa";


const CardPeople = (props) =>{
 const { store, actions } = useContext(Context);
    useEffect (() => {
        actions.peopleDetail(props.id)
       
    }, [])




return (
    
    <Col >
    <CardDeck>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:200}} src="https://i.pinimg.com/736x/b3/3f/db/b33fdbbe11696760bf2180d1c13d3560.jpg" />
  <Card.Body>
      
    <Card.Title>
        {props.data.name}
        </Card.Title>
    <br></br>
    <Card.Text>
    <div>Height:{props.data.height} </div> 
    <div>Skin Color:  {props.data.skin_color} </div> 
     <div>Hair Color:  {props.data.hair_color} </div> 
       <div>Eye Color:  {props.data.eye_color} </div> 
    </Card.Text>
   <Link className="btn btn-primary" to = {`/charpeople/${props.id}`}>
  Learn More
    
    </Link>
{store.favorites.indexOf(props.data.name) === -1 ?

(<button className="favo" onClick={ ()=>  
actions.addFav(props.data.name)
}><BsHeart></BsHeart></button>):

(<button className="favo" onClick={ ()=>  
actions.delFav(props.data.name)
}><FaHeart></FaHeart></button>)
}
    
  </Card.Body>
</Card>
    </CardDeck>
    </Col>
  );
  }

  export default CardPeople