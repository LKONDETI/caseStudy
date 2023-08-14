import React,{useState} from "react";
import { Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";
import TheSilentPatient from './TheSilentPatient.jpg'

function TheSilPSubcribe(){
  const [points,SetPoints] = useState(1600);
  const [count,Setcount] = useState(8);
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
    SetPoints(points+200);
    localStorage.setItem("points",points);
    console.log(points);
    Setcount(count+1)
    localStorage.setItem("count",count);
    console.log(count);
  };

  
  const [show, setshow] =React.useState(false);
  
  return(
    <div>
         <div><NavSideBars/></div>

        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>The Silent Patient</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src={TheSilentPatient} style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Alex Michaelides<br/>
            Category: Thriller<br/>
            Publisher:  Celadon Books<br/>
            Date Published :  5 Feb 2019<br/>
            Points :  200
            </p>
            The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides. The successful debut novel was published by Celadon Books, a division of Macmillan Publishers, on 5 February 2019.Four years later, a month after his 40th birthday, Michaelides sold the book. Not only has it been a stalwart across hardcover, paperback and audio best-seller lists, “The Silent Patient” has inspired a slew of #BookTok videos with 14 million viewers.
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

export default TheSilPSubcribe;