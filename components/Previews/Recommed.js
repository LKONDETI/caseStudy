import React from "react";
import { useEffect } from "react";
import {Popover, PopoverHeader, PopoverBody} from "reactstrap";
import { useState } from "react";
import {toast} from "react-toastify";

function Recommed(){

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
    
      let timeoutId;
        if (isOpen) {
          timeoutId = setTimeout(() => {
            setIsOpen(false);
          }, 10000);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [isOpen]);
   
    const handlePopoverOpen = () => {

        setIsOpen(!isOpen)
        
      };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const simpleAlert = (event) => {
      event.preventDefault();
  
      if (!email.includes('@')) {
        setErrorMessage('Invalid email.');
      } else {
        
        setErrorMessage('');
        toast.success('Message sent!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,     
          });
      }
    };

    return(
        <div>
            <button class="btn btn-outline-light" id="popoverButton" onClick={handlePopoverOpen}> Recommend to colleague </button>

<Popover placement="bottom" isOpen={isOpen} target="popoverButton" toggle={() => setIsOpen(!isOpen)}  >
<PopoverHeader>Enter Email Id</PopoverHeader>
<PopoverBody><label style={{marginBottom:'10px'}}><input type="email" placeholder="enter email" onChange={handleEmailChange}/></label><br/>
              <button onClick = {simpleAlert} style={{backgroundColor:'#0c1524', color:'white'}}>Send</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</PopoverBody>
</Popover>
        </div>
      )

}
export default Recommed;