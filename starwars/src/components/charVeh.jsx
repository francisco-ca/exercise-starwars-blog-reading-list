import React, {useContext, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import { Context } from '../store/appContext';
import "./cols.css"
import Navbartop from './navbar'

const CaractVeh = (props) => {

   
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.vehDetail(props.match.params.id)
       
    }, [])



    return (
        
        <div>
            <Navbartop></Navbartop>
          <Row>
               <Col md={{ size: 'auto'}}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Alderaan.JPG/1200px-Alderaan.JPG" rounded fluid/>
    </Col>
              <Col>A harsh desert world orbiting twin suns in the galaxy’s Outer Rim, Tatooine is a lawless place ruled by Hutt gangsters. Many settlers scratch out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa serve as home base for smugglers, criminals, and other rogues. Tatooine’s many dangers include sandstorms, bands of savage Tusken Raiders, and carnivorous krayt dragons. The planet is also known for its dangerous Podraces, rampant gambling, and legalized slavery. Anakin Skywalker and Luke Skywalker both grew up on Tatooine, and Obi-Wan Kenobi spent years in hiding on this desolate world.</Col>
          </Row> 
          <hr></hr>
          <Row>
               <Col>
              <h3 className="titul" >Name:</h3>
              <h3 className="carac">{store.detailVehList.name}</h3>
              </Col>
              <Col>
              <h3 className="titul" >Manufacturer:</h3>
              <h3 className="carac">{store.detailVehList.manufacturer}</h3>
              </Col>
              <Col>
              <h3 className="titul" >Cost:</h3>
              <h3 className="carac">{store.detailVehList.cost_in_credits}</h3>
              </Col>
              <Col>
              <h3 className="titul" >MaxAtmSpeed:</h3>
              <h3 className="carac">{store.detailVehList.max_atmosphering_speed}</h3>
              </Col>
              <Col>
              <h3 className="titul" >Passengers:</h3>
              <h3 className="carac">{store.detailVehList.passengers}</h3>
              </Col>
          
          </Row>
          <hr></hr>
          <div className="bhome">
              
          <Link className="btn btn-dark" to="/">
     Back to home
     </Link>
  
  </div>
          


        </div>

    )
}

export default CaractVeh