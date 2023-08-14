import React from "react";
import {Card, CardBody, CardText,CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "./Recommed";

function Hp2Preview(){
const [visible, isVisible] =React.useState(false);

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '175vh'
  }

  const handleLink=()=>{
    window.open("https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Illustrated/dp/0545791340/ref=sr_1_2?crid=2Q71M6759F5UT&keywords=harry+potter+and+the+prisoner+of+azkaban&qid=1687944338&s=books&sprefix=Harry+Potter+and+the+%2Cstripbooks-intl-ship%2C873&sr=1-2")
  }

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src="https://www.themoviedb.org/t/p/w1280/1lFuyRbEoGnFdOrGuAbGZ9EbOFm.jpg" style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published :  8 July 1999<br/>
            Points :  200
            </p>
            Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.
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
      <div class="shadow border border-2 border border-dark rounded-2 text-center" style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'175vh'}}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the prisoniors of Azkaban(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Harry, Ron and Hermione return as teenagers for a third term at Hogwarts School of Witchcraft and Wizardry. But Harry's fate, and that of the entire community of wizards, looks bleak when the infamous Sirius Black--convicted of abetting evil Lord Voldemort by killing 13 people with a single curse--escapes from prison. The only clue to where Sirius is headed: The Azkaban guards heard Black muttering in his sleep "He's at Hogwarts ... He's at Hogwarts." Now, even within the walls of his magical school, Harry may not be safe from a convicted killer in Harry Potter and the Prisoner of Azkaban.
          </CardText>
          <div class="btn btn-outline-light float-end" onClick={handleLink}>Buy in Amazon</div>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default Hp2Preview;