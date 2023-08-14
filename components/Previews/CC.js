import React from "react";
import {Card, CardBody, CardText, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "./Recommed";

function CCPreview(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '185vh'
  }
  
  const handleLink=()=>{
    window.open("https://www.amazon.com/Corporate-Chanakya-Successful-Management-Way/dp/8184951337/ref=sr_1_1?crid=11P2XEWYS5P47&keywords=corporate+chanakya+book&qid=1687944524&s=books&sprefix=corparate+chana%2Cstripbooks-intl-ship%2C2980&sr=1-1");
  }

  const [visible, isVisible] =React.useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const simpleAlert = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      setErrorMessage('Invalid email.');
    } else {
      
      setErrorMessage('');
      alert('sent!');
    }
  };

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Corporate Chanakya(Preview)</h1>
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Corporate Chanakya(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Corporate Chanakya by Dr. Radhakrishnan Pillai has a lot of corporate and management lessons from the time of Chanakya. And this book will help you climb the corporate ladder and your professional career. The book talks about Leadership, Management and Training and how the combination of these three helps one to become a Successful person in a Corporate setup.
          He faced difficulties because it was tough to understand Chanakya’s rules. After all, his sutras were quite challenging. However, after following Chanakya, the author started to get success in his business at a fast speed. Only then did he think of writing a Corporate Chanakya book in easy language so that ordinary people could understand it quickly and use it in their professional and business lives. 
          </CardText>
          <div class="btn btn-outline-light" onClick={handleLink}>Buy in Amazon</div>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default CCPreview;