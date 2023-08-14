import React from 'react';
import book from './book.png';
import Picture1 from './Picture1.png';

function Logout() {
      return(
        <section class=" gradient-custom bg-image" 
        style={{
        backgroundImage:"url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')",
        height:'100vh'
      }}
        >
          <div class="container py-5 mh-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="card text-white" style={{borderRadius: '1rem',backgroundColor:"#0c1524"}}>
          <div class="card-body p-5 text-center">
          <div>
          <h2 class="fw-bold mb-2 text-uppercase"><img src={book} style={{borderRadius:'50%', backgroundColor:'white'}}/> E-Library</h2>
          <h6 class="text-white-50 mb-5">powered by <img src={Picture1}/></h6>
          </div>
          <div>
              <h5>You have successfully Logged out, Thank You !</h5></div>
              <button class="btn btn-outline-light btn-lg px-5"><a href="http://localhost:3000/">Go Back to Login Page</a></button>
            </div>
            </div>
          </div>
          </div>
        </section>
      )

}

export default Logout;