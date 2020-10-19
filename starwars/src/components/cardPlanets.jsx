import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from "react-bootstrap"
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { BsHeart} from "react-icons/bs";
import {CardDeck} from 'react-bootstrap/'
import "./cols.css"
import {FaHeart} from "react-icons/fa";
import { Context } from '../store/appContext';


const CardPlanets = (props) =>{

 const { store, actions } = useContext(Context);
   
return (
    
    <Col >
    <CardDeck>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:200}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Alderaan.JPG/1200px-Alderaan.JPG" />
  <Card.Body>
      
    <Card.Title>
        {props.data.name}
        </Card.Title>
    <br></br>
    <Card.Text>
    <div>Population:   {props.data.population} </div> 
    <div>Terrain:  {props.data.terrain} </div> 
     
   
    </Card.Text>
    <Link className="btn btn-primary learnm" to = {`/charplanets/${props.id}`}>

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

  export default CardPlanets;