import React,{useState} from "react";
import Quiz from "./quizdata";
import { AiFillHourglass} from "react-icons/ai";
import NavSideBars from "../Auth/NavSideBars";
import InterQuiz from "./InterstellaTQ";
import CCQuiz from "./CorChaTQ";
import MyScore from "./MyScore"

function TakeQuiz(){

  const ContainerStyle={
    marginLeft: '200px',
    width: '175vh',
    
    }

  const [show, setshow] =useState(false);
  const [visible,setvisible]=useState(false);
  const [open,setopen] =useState(false);

  return(
    <div >
         
        <div> <NavSideBars/> </div>
        
        <div class=" shadow d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 " style={ContainerStyle}>
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Take the Quiz</h1> 
        <MyScore/>
        <div>
        
        <table class="table table-stripped table-hover" style={{ marginTop:'10px', width: '900px', marginLeft:'30px'}}>
         <thead>
        <tr style={{backgroundColor:'#0c1524', color:'white'}}>
          <th>e-Book Id</th>
          <th>e-Book Name</th>
          <th>Subcription Id</th>
          <th> </th>
        </tr></thead>
        <tbody>
         <tr onClick={()=>setshow(!show)}>
              <td>1221</td>
              <td>Harry Potter & The Half Blood Prince </td>
              
              <td>1022242</td>
              <td><AiFillHourglass/></td>
        </tr>

        <tr onClick={()=>setvisible(!visible)}>
              <td>1226</td>
              <td>Interstella</td>
             
              <td>1011231</td>
              <td><AiFillHourglass/></td>
        </tr>

        <tr onClick={()=>setopen(!open)}>
              <td>1889</td>
              <td>Corporate Chanakya</td>
              
              <td>1011223</td>
              <td><AiFillHourglass/></td>
        </tr> 
        </tbody>      
      </table>
      </div></div>
     
      {show&&(
        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 "
        style={{width:'175vh',marginTop:'10px',maxHeight:'60vh', marginLeft:'200px'}}> 
        <p style={{textAlign:'center', fontSize:'18px',marginTop:'10px'}}>Harry Potter & The Half Blood Prince Quiz</p>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginBottom:'10px', color:'white', width:'165vh'}}>
        <Quiz/>
        </div> </div> )}

        {visible&&(
        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 "
        style={{width:'175vh',marginTop:'10px',maxHeight:'60vh', marginLeft:'200px'}}> 
        <p style={{textAlign:'center', fontSize:'18px',marginTop:'10px'}}>Interstella Quiz</p>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginBottom:'10px', color:'white', width:'165vh'}}>    
            <InterQuiz/>
          </div> </div>)} 

        {open&&(
        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 "
        style={{width:'175vh',marginTop:'10px',maxHeight:'60vh', marginLeft:'200px'}}> 
        <p style={{textAlign:'center', fontSize:'18px',marginTop:'10px'}}>Corporate Chanakya Quiz</p>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginBottom:'10px', color:'white', width:'165vh'}}>    
            <CCQuiz/>
          </div> </div>)}

      </div>
  )
}

export default TakeQuiz;