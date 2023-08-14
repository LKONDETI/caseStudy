import React from "react";
import { useState } from "react";
import axios from "axios";
import book from './book.png';
import Picture1 from './Picture1.png'

function Signin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/users`);
          const users = response.data;
        const user = users.find((user) => user.username === username && user.password === password);
          
          if (user) {
            
            alert('Login successful');
            window.location.href="/dashboard";
           
          } else {
            setErrorMessage('Invalid username or password');
          }
        } catch (error) {
          console.error('Error logging in:', error);
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

            <div>

              <h2 class="fw-bold mb-2 text-uppercase"><img src={book} style={{borderRadius:'50%', backgroundColor:'white'}}/> E-Library</h2>
              <h6 class="text-white-50 mb-5">powered by <img src={Picture1}/></h6>

                {/* username */}
              <div class="form-outline form-white mb-4">
                <input type="email" 
                class="form-control form-control-lg"
                placeholder="Email/SSO"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
              </div>
              
                {/* password */}
              <div class="form-outline form-white">
                <input type="password"  
                class="form-control form-control-lg" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              </div>

              {/* forgot password */}
                <div class=" fw-bold mb-3" style={{textAlign:'right', marginTop:'0px'}}><a href="http://localhost:3000/forgpass">Forgot Password?</a></div>
                
                {/* submit */}
              <button class="btn btn-outline-light btn-lg px-5 " type="submit" onClick={handleLogin}>Login</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <p class="mb-0">Don't have an account? <a href="http://localhost:3000/signup" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
            <footer style={{fontSize:'10px', marginTop:'30px'}}>Capgemini Public</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

export default Signin;
