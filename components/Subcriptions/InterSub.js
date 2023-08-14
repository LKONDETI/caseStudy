import React,{useState} from "react";
import {Button, Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";

function InterSubcribe(){
  
  const [isSubscribed, setIsSubscribed] = useState(false);


  const ContainerStyle={
    marginLeft: '200px',
    height : '50vh',
    width: '175vh',
    boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'
    }

 
  const handleSubscribe = () => {
    setshow(!show)
    setIsSubscribed(true);
   
  };

  
  const [show, setshow] =React.useState(false);
  
  return(
    <div>
         <div><NavSideBars/></div>

        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Interstella Subcription</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/qUZiVjFBd67WKktIrjJ9H3tesyo.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Kip Thorne<br/>
            Category: Sci-fi<br/>
            Publisher: W. W. Norton & Company<br/>
            Date Published :  7 Nov 2014<br/>
            Points :  200
            </p>
            Interstellar, from acclaimed filmmaker Christopher Nolan, takes us on a fantastic voyage far beyond our solar system. Yet in The Science of Interstellar, Kip Thorne, the physicist who assisted Nolan on the scientific aspects ofInterstellar, shows us that the movie’s jaw-dropping events and stunning, never-before-attempted visuals are grounded in real science. Thorne shares his experiences working as the science adviser on the film and then moves on to the science itself. 
          </CardText>
          <div class='btn btn-outline-light' onClick={handleSubscribe} style={{marginLeft:'160px'}}>  {isSubscribed ? 'Subscribed' : 'Subscribe'}</div>
       
        </CardBody>
        </Card>
      </div></div>
      
        {show&&(
        <SubcriptionForm/>
        )}
        
    </div>

  )
}

export default InterSubcribe;