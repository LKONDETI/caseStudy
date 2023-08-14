import React, {useState, useEffect} from 'react';
import Picture1 from './Picture1.png'
import book from "./book.png";
import { AiFillHourglass, AiOutlineMonitor, AiOutlineDesktop} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import {VscSignOut} from "react-icons/vsc";
import {BsFillPersonFill} from "react-icons/bs";
import User from './User';

function NavSideBars(){

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

 
  // time&Date
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
 


  // button of sidenavbar
  const leftButton = {
    backgroundColor:'#0c1524', 
    border :'none',
    fontSize :'16px',
    color :'white',
    height :'50px', 
    width :'170px',
    textAlign :'left'
  };

  // links of side nav bar
  const Dash=() =>{
    window.location.href ="/dashboard";
}
  const Surf=() =>{
  window.location.href ="/surf";
}
  const QuizT=() =>{
  window.location.href ="/takequiz";
}

  const SignOut=() =>{
    window.location.href ="/logout";
  }
  
  return(
    <div>
        <nav class="navbar navbar-expand-md" style={{backgroundColor: "#0c1524"}}>
        <div class="container-fluid">
        {/* top nav bar */}
        <a class="navbar-brand">
      <img src={book} style={{width:'40px', height:'40px', borderRadius:'50%',backgroundColor:'white',float: 'left'}}/>
            <h3 style={{color:'white',align:'top'}}>E-Library</h3>
            <p style={{color:'white',marginLeft:'30px'}}>powered by <img src={Picture1}/></p>
            </a>
              
            <ul class="navbar-nav me-3">
            <li class="nav-item me-3">
                    <a class="nav-link text-white" style={{fontSize:'30px'}} ><IoMdNotificationsOutline/></a>
                </li>

            <li class="nav-item me-3">
                    
                    {/* dropdown contents */}
                    <div class="dropdown">
                    <a class="nav-link text-white" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'30px'}}>
                    <CgProfile/>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li><a class="dropdown-item"><User name='sravani'/></a>
                    </li>

                    <li><a class="dropdown-item" href='http://localhost:3000/sub'><BsFillPersonFill/>
                       Subcriptions List</a>
                    </li> 
                  
                    <li><a class="dropdown-item"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"><VscSignOut/>logout</a></li>
	                   </ul>
	                  </div>
                </li>
                <li>
                <p style={{color:'white', fontSize:'12px'}}>{currentDateTime.toDateString()}</p>
                <p style={{color:'white', fontSize:'12px'}}>{currentDateTime.toLocaleTimeString()}</p>
                </li>
            </ul>
        </div>   
</nav>

            {/* logout funtionality */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     <div class="modal-header"> Sign out  </div>
      <div class="modal-body">
       <h5 class="text-center"> Do you want to logout?</h5>
      </div>
      <div class="modal-footer d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">No</button>
        <button type="button" class="btn btn-primary" onClick={SignOut}>Yes</button>
     </div>  
    </div>
    </div>
  </div>

      <div style={{paddingTop:'30px',width:'170px', height:'10vh',backgroundColor:'#0c1524'}}>
        
      
        <div style={leftButton} onClick={Dash}><AiOutlineDesktop/>Dashboard</div>
        <div style={leftButton} onClick={Surf}><AiOutlineMonitor/> Surf-e-books</div>
        <div style={{backgroundColor:'#0c1524',border:'none',fontSize:'16px',height:'70px',textAlign:'left',width:'170px', paddingBottom:'700px', color:'white'}} onClick={QuizT}>
        <AiFillHourglass/> Take Quiz </div></div>
      
      
      </div>
  )
}

export default NavSideBars;