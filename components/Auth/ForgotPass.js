import React from "react";
import { useState } from "react";
import axios from "axios";
import book from './book.png';
import Picture1 from './Picture1.png'

function ForgotPassword(){
    
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    

    const handleReset = async () => {
        try {
            const response =await axios.get(`http://localhost:8000/users?username=${username}`);
            if (response.data.length === 0) {
                console.log('checked');
              }else{
                const userId = response.data[0].id;
                await axios.patch(`http://localhost:8000/users/${userId}`, { password: newPassword });
                alert('Changed Password successfully');
                window.location.href="/";}
        } catch (error) {
          console.error('Password Not changed. Error!', error);
          setErrorMessage('Error changing Password up. Please try again.');

        }
      };
return(
    <section class="vh-150 gradient-custom bg-image" 
    style={{
    backgroundImage:"url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')"}}
    >
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white" style={{borderRadius: '1rem',backgroundColor:"#0c1524"}}>
          <div class="card-body p-5 text-center">

            <div class="mt-md-4">

              <h2 class="fw-bold mb-2 text-uppercase"><img src={book} style={{borderRadius:'50%', backgroundColor:'white'}}/> E-Library</h2>
              <h6 class="text-white-50 mb-5">powered by <img src={Picture1}/></h6>
              
              {/* username */}
              <div class="form-outline form-white mb-4">
                <input type="email" 
                class="form-control form-control-xs"
                placeholder="E-mail/SSO"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              {/* generating new password */}
              <div class="form-outline form-white mb-4">
                <input type="password"  
                class="form-control form-control-xs" 
                placeholder=" New Password"
                 value={newPassword}
                 onChange={e => setNewPassword(e.target.value)} 
                />
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleReset}>Reset</button>
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

export default ForgotPassword;
