import React from "react";
import NavSideBars from "../Auth/NavSideBars";
import { useState, useEffect } from "react";
import {MdDelete} from "react-icons/md"
import axios from "axios";
import {toast} from 'react-toastify'

function SubList(){


  const [data, setData] = useState([]);
  const [expiringData, setExpiringData] = useState([]);
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/data')
      .then(response => {
        // setData(response.data);
        const currentDate = new Date().setHours(0, 0, 0, 0);
        const expiringData = response.data.filter(item => new Date(item.subcriptionDate) <= currentDate);
        setExpiringData(expiringData);
        const activeData = response.data.filter(item => new Date(item.subcriptionDate) > currentDate);
        setActiveData(activeData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/data/${id}`)
      .then(response => {
        console.log('Item deleted successfully');
        toast.success('Book has been Deleted !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,  });
        
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

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
                  <td><div onClick={() => handleDelete(item.id)}><MdDelete/></div></td>
                </tr>))}</tbody>
              </table>
            </div>
          </div>
          </div>

          <div style={{marginLeft: '200px'}}>
          <h1 style={{fontSize:'18px',textAlign:'center', marginTop:'20px'}}>Expired Subcriptions List</h1>
          
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
                {expiringData.map(item=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.titleName}</td>
                  <td>{item.subcriptionDate}</td>
                  <td>{item.grade}</td>
                  <td><div onClick={() => handleDelete(item.id)}><MdDelete/></div></td>
                </tr>))}</tbody>
              </table>
            </div>
          </div>
          </div>
          
      </div>
    
  )
}

export default SubList;