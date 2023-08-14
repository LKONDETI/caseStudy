import React,{useState} from "react";
import {Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";

function AngSubcribe(){
  
  const [isSubscribed, setIsSubscribed] = useState(false);


  const ContainerStyle={
    marginLeft: '200px',
    height : '50vh',
    width: '175vh',
    boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'
    }

  const handleSubscribe = () => {
    setshow(!show)
    
  };

  
  const [show, setshow] =React.useState(false);
  
  return(
    <div>
         <div><NavSideBars/></div>

        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Learn Angular in 24hrs</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://m.media-amazon.com/images/I/51yeSub2miL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Lakshmi Kamala Thota<br/>
            Category: Technical<br/>
            Publisher: Orginal<br/>
            Date Published :  25 May 2020<br/>
            Points :  200
            </p>
            There are different types of web development books available in the market today. Only a few books are focused on basics and targeted to absolute beginners who have no idea of coding. The core idea behind this book is to make sure everyone with or without basic knowledge on Angular should understand and expertise web application development using Angular. 
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

export default AngSubcribe;