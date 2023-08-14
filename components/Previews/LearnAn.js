import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "./Recommed";

function AngPreview(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '185vh'
  }

  const handleLink=()=>{
    window.open("https://www.amazon.in/Learn-Angular-Hours-Lakshmi-Kamala/dp/9389932076");
  }

  const [visible, isVisible] =React.useState(false);
  

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Learn Angular in 24hrs(Preview)</h1>
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Learn Angular in 24hrs(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Angular JS is responsible for making the website interactive and responsive. It helps designer and developers to eliminate much of the code usually needed for websites development. Angular JS is based upon MVC model. To learn and harness more power of the Angular JS framework, it takes a continuous intervention from an expert. But if you like to learn by yourself without spending big bucks behind expensive courses. This e-book could be your ultimate guide to AngularJS or AngularJS 2 Programming.
          There are different types of web development books available in the market today. Only a few books are focused on basics and targeted to absolute beginners who have no idea of coding. The core idea behind this book is to make sure everyone with or without basic knowledge on Angular should understand and expertise web application development using Angular. After going through all chapters in this book, one can quickly and confidently create a live web application using Angular in just a few hours. Simple language is used in this book to make sure everyone who reads this book can understand every concept without any complexity. All concepts in this book are presented with many examples, screenshots through a step-by-step approach. Live mini-projects at the end of this book adds extra confidence.

          </CardText>
          <div class="btn btn-outline-light float-end" onClick={handleLink}>Buy in Amazon</div>
       
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default AngPreview;