import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Image from 'react-bootstrap/Image';
import NavBar from './NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import { Row } from 'react-bootstrap/Image';
//import { Col } from 'react-bootstrap/Image';
//import reactDom from 'react-dom';
import BottomNav from "../Components/BottomNav";

class AboutUs extends Component {
    render() {
        return (
            
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar></NavBar>
              
            <Jumbotron id="jumboc1">

            <div class="row">
            <div class="col-sm-6">
            <img src="/Images/deco12.jpg" alt="pic" id="src12"style={{height:"350px"}}/>

            </div>
            <div class="col-sm-6">
            <h1 id="e1"  style={{marginTop:"50px"}} >Event Planning Is Hard </h1>
            <h4 id="e2" style={{marginTop:"50px"}}>We Can Help You!!!</h4> 
            </div>
            </div>
            </Jumbotron>
            
            <h4 id="abb" style={{marginTop:"40px"}}> ABOUT US</h4>
            <h4 id="ab" style={{marginTop:"20px"}}>We provide Event Planning services to companies from different industries.</h4>
            <h4 id="ab" style={{marginTop:"20px"}}>We have a vast vendor network of Hotels and partners who help us provide the best and most cost effective event services to our clients.</h4>
            <h4 id="ab" style={{marginTop:"20px"}}> Our focus is to align your event objectives with modern concepts to deliver creative and engaging event experiences to your attendees.</h4>
           
            <h1 id="ab1" style={{marginTop:"40px"}}>OUR EVENT Planning PHILOSOPHY</h1>   
            <h4 id="ab"  style={{marginTop:"20px"}}>To make our clients event planning processes simple by offering reliable and impactful services.The experience our clients get from working with us is always as important as the experience we deliver to the events audiences.</h4> 
            
            <h1 id="ab1" style={{marginTop:"40px"}}>OUR EVENT Planning STRATEGY </h1>   
            <h4 id="ab" style={{marginTop:"20px"}}>We identify key focus areas for every event we plan and consult you about what works best and what can help you derive maximum return on your investment.</h4>

            <h1 id="ab1" style={{marginTop:"40px"}}> Our approach is 2 pronged</h1>
            <h4 id="ab" style={{marginTop:"20px"}}>We obviously suggest what we think would be best suited for your event.</h4>
            <h4 id="ab" style={{marginTop:"20px"}} >We try and do it in a cost effective and budgeted manner.</h4>
            <h4 id="ab" style={{marginTop:"20px"}}>This approach helps us meet your expectations in a more focused manner.</h4>    
             
{/*            
             <h1 id="ab1" style={{marginTop:"40px",color:"red"}}> Our Team</h1>
            <div className="container" style={{marginTop:"40px"}}>
            <div class="row">
            <div class="col-sm-6"><img src="/Images/about1.jpg" class="img-thumbnail"></img>
            <h4 style={{marginTop:"25px"}}>Miss.Neha Chaudhari</h4>
            <h5>Founder & Chief Creative Officer</h5></div>
            <div class="col-sm-6"><img src="/Images/about3.jpg" class="img-thumbnail"/>
            <h4 style={{marginTop:"10px"}} >Mr.Akash Patil</h4>
            <h5>Founder & Chief Tehnology Officer</h5></div>
            <div class="col-sm-3"><img src="/Images/about2.jpg" class="img-thumbnail"/>
            <h4 style={{marginTop:"30px"}} >Miss.Jessica Brito</h4>
            <h5>Director Of Client Services</h5></div>
            <div class="col-sm-3"><img src="/Images/about5.jpg" class="img-thumbnail"/>
            <h4 style={{marginTop:"10px"}} >Mr.John Roy</h4>
            <h5>HR Executive</h5></div> 
            </div>
            </div>  */}


            <h1 id="ab1" style={{marginTop:"40px"}}>Mission</h1>
            <h4 id="ab"  style={{marginTop:"20px",color:"goldenrod"}}>Our Mission Is To Provide Our Client With The Most Amazing Event Planning And Decoration
            Services, Glammer Event Planners Promises To Make Any Event Memorable Ever!!</h4> 

            {/*<Jumbotron fluid style={{marginTop:"40px",backgroundColor:"black"}}>
        
            <h1 id="ab123">Join Us On</h1>
                   <i class="fa fa-facebook fa-2x" style={{marginLeft:"630px"}}></i>
                   <i class="fa fa-twitter fa-2x" ></i>
                   <i class="fa fa-google-plus fa-2x"></i>
                   <i class="fa fa-youtube-play fa-2x"></i>
                   <i class="fa fa-weixin fa-2x"></i>
            </Jumbotron>*/}
                        
          <BottomNav/>
                            
            </div>
          
           
        );
    }
}

export default AboutUs;

