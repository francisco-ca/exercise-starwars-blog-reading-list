import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import {Container, Row, Col} from "react-bootstrap"
import CardPeople from "../components/cardPeople"
import CardPlanets from '../components/cardPlanets';
import CardVeh from '../components/cardVeh';
import Navbartop from '../components/navbar'
// HOOKS = useContext()

const Home= () =>{

    const { store, actions } = useContext(Context);
    const vehId = [4,6,7,8,14,16,18,19,20,24]
    const indes = vehId.map((item,i) =>vehId[i])
   
    useEffect( ()=>{
        actions.fetchPeople()
        actions.fetchPlanets()
        actions.fetchVeh()
     
       
      


    },[])
    return(
        <>
        <Navbartop/>
         
         <h2 className="titres"> Characters</h2>
         
            <Row className="row flex-row flex-nowrap overflow-auto">{
                store.peopleList.map( (item, index)=>( <CardPeople key={index} id={++index} data={item} /> )
                )
            }</Row>

            <hr></hr>
         <h2 className="titres"> Planets</h2>

            <Row className="row flex-row flex-nowrap overflow-auto">{
                store.planetList.map( (item, index)=>( <CardPlanets key={index} id={++index} data={item} /> )
                )
            }</Row>
            <hr></hr>
        <h2 className="titres"> Vehicles</h2>

            <Row className="row flex-row flex-nowrap overflow-auto">{
                store.vehList.map( (item, index)=>( <CardVeh key={index} id={indes[index]} data={item} /> )
                )
            }</Row>
         
        </>
    )

}

export default Home;