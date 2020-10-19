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


const CardVeh = (props) =>{
 const { store, actions } = useContext(Context);

return (
    
    <Col >
    <CardDeck>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{height:200}} src="https://vignette.wikia.nocookie.net/starwars/images/b/b1/PodracerAnakin.jpg/revision/latest?cb=20111205042103" />
  <Card.Body>
      
    <Card.Title>
        {props.data.name}
        </Card.Title>
    <br></br>
    <Card.Text>
    <div>Model:   {props.data.model} </div> 
    <div>Class:  {props.data.vehicle_class} </div> 
    <div>Crew:  {props.data.crew} </div> 
      
     
   
    </Card.Text>
    
    <Link className="btn btn-primary learnm" to = {`/charveh/${props.id}`}>
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

  export default CardVeh;