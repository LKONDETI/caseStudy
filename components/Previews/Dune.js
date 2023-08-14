import React from "react";
import {Button, Card, CardBody, CardText, Popover, PopoverHeader, PopoverBody, CardImg} from "reactstrap";
import { useState } from "react";
import Dune from './Dune.jpg'
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "./Recommed";

function DunePreview(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '185vh'
  }

  const handleLink=()=>{
    window.open("https://www.amazon.in/Dune-Frank-Herbert/dp/0441172717/ref=sr_1_1?crid=26UVRNL1XF5B4&keywords=dune+book&qid=1687942105&s=books&sprefix=dunebook%2Cstripbooks%2C561&sr=1-1");
  }

  const [visible, isVisible] =React.useState(false);
 

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Dune(Preview)</h1>
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
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Dune(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          Dune is based on a complex imagined society set roughly 20,000 years in the future. The setting is the year 10,191, and human beings have spread out and colonized planets throughout the universe. On the planet Caladan, Duke Leto of the House of Atreides is preparing to leave for his new position as the governor of Arrakis, a desert planet with valuable resources of melange, a spice drug that is extremely popular with wealthy people. Leto and his family, including his concubine, Jessica, and his son, Paul, suspect a trap by their rivals, the Harkonnens, led by Baron Harkonnen. Leto decides to settle on Arrakis because of its rich supplies of melange, despite warnings from his men, including his adviser, Thufir Hawat, and his master-of-arms, Gurney Halleck.

The Atreides arrive on Arrakis and the duke quickly moves to secure the planet from a Harkonnen attack. His main plan is to enlist the Fremen, the tough natives of the Arrakeen desert, as soldiers and advisers. Meanwhile, Paul’s and Jessica’s special abilities intrigue the Fremen. Jessica is a member of the Bene Gesserit, a school of quasi-mystical witches with strange powers. The Fremen believe that Jessica and her son are saviors who have come to lead them toward creating a lush paradise on the dry Arrakis.
          </CardText>
          <div class="btn btn-outline-light float-end" onClick={handleLink}>Buy in Amazon</div>
       
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default DunePreview;