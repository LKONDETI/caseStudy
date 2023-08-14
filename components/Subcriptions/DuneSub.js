import React,{useState} from "react";
import {Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";
import Dune from './Dune.jpg'

function DuneSubcribe(){
  
  const [isSubscribed, setIsSubscribed] = useState(false);


  const ContainerStyle={
    marginLeft: '200px',
    height : '50vh',
    width: '175vh',
   
    }

  const handleSubscribe = () => {
    setshow(!show)
    setIsSubscribed(true);
   
  };

  
  const [show, setshow] =React.useState(false);
  
  return(
    <div>
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Dune</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src={Dune} style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Frank Herbert<br/>
            Category: Sci-fi<br/>
            Publisher: Chilton Books<br/>
            Date Published :  August 1965<br/>
            Points :  200
            </p>
            ‘Dune’ is a literary piece of science fiction that tells the story of humanity thousands of years into the future. In the novel, humanity becomes so advanced that it spreads across the known universe. With the spread of humans, noble houses are formed, with each governing a planetary system.
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

export default DuneSubcribe;