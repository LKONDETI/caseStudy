import React, { useState } from "react";
import {toast} from "react-toastify";
import axios from "axios";

const SubcriptionForm = () =>{


  const [formData, setFormData] = useState({
    name: '',
    titleName: '',
    subcriptionDate:'',
    grade:''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/data', formData)
      .then(response => {
        
        console.log('Subcription List!');
        window.print();
        toast.success('You have subscribed this book!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,  });
      })
      .catch(error => {
        console.error(error);
        
      });
  };
      
      return(
        <div>
        <div class="border border-2 border border-dark rounded-2 text-center" 
        style={{marginLeft:'200px',marginTop:'25px',maxHeight:'50vh',width:'175vh',boxShadow: '0 4px 8px 0 rgba(13, 8, 57, 0.2), 0 6px 20px 0 rgba(17, 4, 46, 0.19)'}}> 
        <h1 style={{fontSize:'18px',textAlign:'center'}}>Subcription Form</h1>
        <form onSubmit={handleSubmit}>
        <div class="container" style={{margin:'10px'}}>
        <div class="row" style={{marginTop:'30px'}}>
            <div class="col" ><b>Title Name</b> <input type="text" placeholder="Title Name" name="titleName" value={formData.titleName} onChange={handleChange} required/> </div>
            <div class="col" ><b>Subcription Date</b><input type="date" placeholder="Subcription Date"name="subcriptionDate" value={formData.subcriptionDate} onChange={handleChange} required/></div>
          </div>
          <div class="row" style={{marginTop:'20px'}}>
            <div class="col"><input type="text" placeholder="Enter Global Id"/></div>
            <div class="col" ><b>Name</b> <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} required/> </div>
            <div class="col" ><b>Grade</b><input type="text" placeholder="grade" name="grade" value={formData.grade} onChange={handleChange} required/></div>
          </div>
          <div class="row" style={{marginTop:'20px'}}>
            <div class="col"><b>Joining Date</b> <input type="date"/></div>
            <div class="col"><b>Employee Id</b> <input type="number" placeholder="Employee Id"/></div>
            <div class="col"><b>Supervisior</b> <input type="text" placeholder="supervisior"/></div>
            </div>
          <div class="row"><div class="col-xs-3 "><button class="btn btn-dark " style={{marginTop:'10px'}} >Save & Download</button></div>
        </div> 
        </div></form>  </div>
        </div>
        )
}
export default SubcriptionForm;