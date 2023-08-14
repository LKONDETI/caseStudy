import React from "react";
import {GrScorecard} from "react-icons/gr";

const MyScore =()=>{
    return(
        <div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{float:'right'}}>View Score</button>

              {/* my Score */}
  <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
     <div class="modal-header"><h4><GrScorecard/> Score Board </h4></div>
      <div class="modal-body">
       <p class="text-center">
        <table class="table table-hover table-striped">
          <thead>
       <tr>
          <th>e-Book Id</th>
          <th>e-Book Name</th>
          
          <th>Subcription Id</th>
          <th> MyScore</th>
        </tr></thead>
        <tbody>
         <tr >
              <td>1221</td>
              <td>Harry Potter & The Half Blood Prince </td>
              <td>1022242</td>
              <td>{localStorage.getItem("updateScore")}</td>
        </tr>

        <tr>
              <td>1226</td>
              <td>Interstella</td>
              <td>1011231</td>
              <td>{localStorage.getItem("updateScore2")}</td>
        </tr>

        <tr >
              <td>1889</td>
              <td>Corporate Chanakya</td>
              <td>1011223</td>
             <td>{localStorage.getItem("updateS")}</td>
        </tr> 
        </tbody>      
      </table>
       </p>
      </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Ok</button>
        
     
    </div>
    </div>
  </div>
</div>
    )
}
export default MyScore;