import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "./Recommed";

function HFJPrev(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '185vh'
  }

  const handleLink=()=>{
    window.open("https://www.amazon.in/Head-First-Java-Brain-Friendly-Guide/dp/8173666024/ref=sr_1_3?crid=39MIQRAQLK08B&keywords=head+first+java&qid=1687942578&s=books&sprefix=head+firs%2Cstripbooks%2C879&sr=1-3");
  }

  const [visible, isVisible] =React.useState(false);
  

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Head First Java(Preview)</h1>
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
          <div class="d-flex justify-content-between">
          <button class="btn btn-outline-light" onClick={()=>isVisible(!visible)}> Read More</button>
          <Recommed/>
          </div>
          
        </CardBody>
        </Card>
        </div>
      </div>
      {visible&&(
      <div class="shadow border border-2 border border-dark rounded-2 text-center" style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'185vh'}}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Head First Java(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Head First Java combines puzzles, strong visuals, mysteries, and soul-searching interviews with famous Java objects to engage you in many different ways. It's fast, it's fun, and it's effective. And, despite its playful appearance, Head First Java is serious stuff: a complete introduction to object-oriented programming and Java. You'll learn everything from the fundamentals to advanced topics, including threads, network sockets, and distributed programming with RMI. And the new. second edition focuses on Java 5.0, the latest version of the Java language and development platform. Because Java 5.0 is a major update to the platform, with deep, code-level changes, even more careful study and implementation is required. So learning the Head First way is more important than ever.
          </CardText>
          <div class="btn btn-outline-light float-end" onClick={handleLink}>Buy in Amazon</div>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default HFJPrev;