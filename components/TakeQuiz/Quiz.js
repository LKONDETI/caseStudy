import React from "react";
import NavSideBars from "../Auth/NavSideBars";
import { useState, useEffect } from "react";
import {MdDelete} from "react-icons/md"
import axios from "axios";
import {toast} from 'react-toastify'

function QuizList(){

    const [show, setshow] =useState(false);
  const [data, setData] = useState([]);
  const [expiringData, setExpiringData] = useState([]);
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/data')
      .then(response => {
        // setData(response.data);
        const currentDate = new Date().setHours(0, 0, 0, 0);
        const activeData = response.data.filter(item => new Date(item.subcriptionDate) > currentDate);
        setActiveData(activeData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return(
    <div>
         <div><NavSideBars/></div>

        <div style={{marginLeft: '200px'}}>
          <h1 style={{fontSize:'18px',textAlign:'center'}}>Active Subcriptions List</h1>
          
          <div class="card border-dark border-2 rounded">
            <div class="card-body" >
              <table class="table table-hover table-striped">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Title Name</th>
                  <th>Subcription Date</th>
                  <th>Grade</th>
                  <th> </th>
                </tr></thead>
                <tbody>
                {activeData.map(item=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.titleName}</td>
                  <td>{item.subcriptionDate}</td>
                  <td>{item.grade}</td>
                  <td><button onClick={()=>setshow(!show)}>Take Quiz</button></td>
                </tr>))}</tbody>
              </table>
            </div>
          </div>
          {show&&(
        <div class="d-flex flex-column justify-content-center border border-2 border border-dark rounded-2 "
        style={{width:'175vh',marginTop:'10px',maxHeight:'60vh', marginLeft:'200px'}}> 
        <p style={{textAlign:'center', fontSize:'18px',marginTop:'10px'}}>Harry Potter & The Half Blood Prince Quiz</p>
        <div style={{backgroundColor:'#0c1524', marginLeft:'20px', marginBottom:'10px', color:'white', width:'165vh'}}>
        <Quiz/>
        </div> </div> )}
          
          
          </div>
          
      </div>
    
  )
}

export default QuizList;