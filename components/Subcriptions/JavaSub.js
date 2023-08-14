import React,{useState} from "react";
import {Card, CardBody, CardText} from "reactstrap";
import { CardImg } from "reactstrap";
import NavSideBars from "../Auth/NavSideBars";
import SubcriptionForm from "./SubcriptionForm";

function JavaSubcribe(){
  
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Head Java First</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVy-e1kG8UsygRmHjoxScusINAu2aErCgnHN4BAQaeVtKG4icm" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: Bert Bates,Kathy Sierra<br/>
            Category: Technical<br/>
            Publisher: O′Reilly<br/>
            Date Published :  2003<br/>
            Points :  200
            </p>
            Head First Java is a complete learning experience in Java and object-oriented programming. With this book, you'll learn the Java language with a unique method that goes beyond how-to manuals and helps you become a great programmer. Through puzzles, mysteries, and soul-searching interviews with famous Java objects, you'll quickly get up to speed on Java's fundamentals and advanced topics including lambdas, streams, generics, threading, networking, and the dreaded desktop GUI. If you have experience with another programming language, Head First Java will engage your brain with more modern approaches to coding--the sleeker, faster, and easier to read, write, and maintain Java of today.
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

export default JavaSubcribe;