import React,{useState} from "react";
import {Button, Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";

function CCSubcribe(){
  
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Corporate Chanakya</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1337132993i/8828998.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Radhakrishnan Pillai<br/>
            Category: Management<br/>
            Publisher: Jaico Publishing House<br/>
            Date Published :  2 Aug 2010<br/>
            Points :  200
            </p>
            Chanakya, who lived in 4th Century BC, was a leadership guru par excellence. His ideas on how to identify leaders and groom them to govern a country has been well documented in his book Kautilyas Arthashastra. This book contains 6000 aphorisms or sutras. In the present book the author simplifies the age old formula of success for leaders of the corporate world. Divided into 3 sections of Leadership, Management and Training Corporate Chanakya includes tips on various topics like organizing and conducting effective meetings, dealing with tricky situations, managing time, decision making and responsibilities and powers of a leader. 
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

export default CCSubcribe;