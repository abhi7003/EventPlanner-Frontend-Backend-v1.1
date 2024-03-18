import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class BottomNav extends Component {
    render() {
        return (
            <div className="container-fluid">

            <Jumbotron style={{backgroundColor:"black",marginTop:"20px",color:"white"}}>
            
            <h1 id="thankyou">Join Us On</h1>
            <i class="fab fa-facebook"style={{marginLeft:"585px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <i class="fab fa-google-play"style={{marginLeft:"20px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <i class="fab fa-instagram" style={{marginLeft:"20px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <i class="fab fa-twitter-square" style={{marginLeft:"20px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <i class="fab fa-youtube" style={{marginLeft:"20px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <i class="fas fa-tty" style={{marginLeft:"20px",marginTop:"20px",fontSize:"50px",color:"white"}}></i>
            <h4 style={{marginLeft:"620px",marginTop:"20px",color:"white"}}></h4>
            <h5 style={{marginLeft:"565px",marginTop:"20px",color:"white"}}>WhatsApp us : 8999782258</h5>
           
           
           </Jumbotron>

         

                
            </div>
        );
    }
}

export default BottomNav;