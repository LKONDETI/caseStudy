import React from "react";
import HP1 from "./HP1.png";
import {Card, CardBody, CardText, CardImg} from "reactstrap";
import { useState } from "react";
import NavSideBars from "../Auth/NavSideBars";
import Recommed from "../Previews/Recommed";

function Hp1Preview(){

  const ContainerStyle={
  marginLeft: '200px',
  height : '50vh',
  width: '175vh'
  }

  const [visible, isVisible] = useState(false);
  

  return(
    <div >
         <div><NavSideBars/></div>

        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince(Preview)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardImg  src={HP1} style={{width:'6rem', float:'right'}}/>
          <CardText style={{fontSize:'12px'}}>
            <p style={{float:'left'}}>
            Author: J. K Rowling<br/>
            Category: Novel<br/>
            Publisher: Potter More<br/>
            Date Published : June 26, 1997<br/>
            Points :  200
            </p>
       
          Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. 
        The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. 
        The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
          </CardText>
          <div class="d-flex justify-content-between">
          <button class="btn btn-outline-light" onClick={()=>isVisible(!visible)} style={{marginLeft:'200px', border:'none'} }> Read More</button>
          <Recommed/>
          </div>
        </CardBody>
        </Card>
        </div>
      </div>
      {visible&&(
      <div class="shadow border border-2 border border-dark rounded-2 text-center" style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'175vh'}}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Harry Potter & the half blood prince(Plot)</h1>
        <div style={{margin:'10px'}}>
          <Card style={{backgroundColor:'#0c1524',color:'white'}}>
          <CardBody>
          <CardText style={{fontSize:'12px'}}>
          The central character in the series is Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin – the Dursleys – and discovers at the age of eleven that he is a wizard, though he lives in the ordinary world of non-magical people known as Muggles.[8] The wizarding world exists parallel to the Muggle world, albeit hidden and in secrecy. His magical ability is inborn, and children with such abilities are invited to attend exclusive magic schools that teach the necessary skills to succeed in the wizarding world.[9]
          Harry becomes a student at Hogwarts School of Witchcraft and Wizardry, a wizarding academy in Scotland, and it is here where most of the events in the series take place. As Harry develops through his adolescence, he learns to overcome the problems that face him: magical, social, and emotional, including ordinary teenage challenges such as friendships, infatuation, romantic relationships, schoolwork and exams, anxiety, depression, stress, and the greater test of preparing himself for the confrontation that lies ahead in wizarding Britain's increasingly-violent second wizarding war.[10]
          Each novel chronicles one year in Harry's life during the period from 1991 to 1998.[12] The books also contain many flashbacks, which are frequently experienced by Harry viewing the memories of other characters in a device called a Pensieve.
          The environment Rowling created is intimately connected to reality. The British magical community of the Harry Potter books is inspired by 1990s British culture.
          </CardText>
          <div class="btn btn-outline-light float-end"><a href="https://www.amazon.com/s?k=Harry+Potter+and+the+Half-Blood+Prince+book&i=stripbooks-intl-ship&crid=3TMT1WFMYR9HS&sprefix=harry+potter+and+the+half-blood+prince+boo%2Cstripbooks-intl-ship%2C482&ref=nb_sb_noss_2">Buy in Amazon</a></div>
        </CardBody>
        </Card>
        </div></div>)}
        </div>
  )
}

export default Hp1Preview;