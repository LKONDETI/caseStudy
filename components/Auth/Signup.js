import React from "react";
import { useState } from "react";
import axios from "axios";
import book from './book.png';
import Picture1 from './Picture1.png'

function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    

    const handleSignup = async () => {
        try {
           const response = await axios.post(
            'http://localhost:8000/users', {
        username,
        password,
        firstName,
        lastName
      });  
            alert('Sign up successful');
            window.location.href="/";
        } catch (error) {
          console.error('Error logging in:', error);
          setErrorMessage('Error signing up. Please try again.');

        }
      };
      
return(
    <section class="vh-150 gradient-custom bg-image" 
    style={{
    backgroundImage:"url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')"}}
    >
  <div class="container py-5 mh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white" style={{borderRadius: '1rem',backgroundColor:"#0c1524"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase"><img src={book} style={{borderRadius:'50%', backgroundColor:'white'}}/> E-Library</h2>
              <h6 class="text-white-50 mb-5">powered by <img src={Picture1}/></h6>

              {/* first name */}
              <div class="form-outline form-white mb-3">
              <input type="text"
              class="form-control form-control-xs"
              placeholder="First name"
              value={firstName}
              onChange={e => setfirstName(e.target.value)}
              />
              
              </div>

              {/* last name */}
              <div class="form-outline form-white mb-3">
              <input type="text"
              class="form-control form-control-xs"
              placeholder="Last name"
              value={lastName}
              onChange={e => setlastName(e.target.value)}   
              /> 
              </div>

              {/* give email */}
              <div class="form-outline form-white mb-4">
                <input type="email" 
                class="form-control form-control-xs"
                placeholder="Email/SSO"
                value={username}
                onChange={e => setUsername(e.target.value)}              
                />
                </div>

             {/* set password  */}
              <div class="form-outline form-white mb-4">
                <input type="password"  
                class="form-control form-control-xs" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSignup}>Sign up</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            
            <footer style={{fontSize:'10px'}}>Capgemini Public</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)

}

export default Signup;