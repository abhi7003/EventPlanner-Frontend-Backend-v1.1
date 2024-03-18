import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
//import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'
import BottomNav from "../Components/BottomNav";

class Homepage extends Component {
    render() {
        return (
             <div className="container-fluid" style={{marginTop:"20px"}}>
            
             <div className="container-fluid" style={{height:"10%"}} >
             <h4 id="h4">EVENTPLANER</h4>
             <NavBar></NavBar>
             <Carousel>
               
                <Carousel.Item interval={1000} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco1.jpg"
                    alt="First slide"/>
                    <Carousel.Caption>
                   
                    {/*<p id="pd">UNLIMIT YOUR OCCASION AT THE LARGEST EVER OPEN AIR VILLA
                    SEATING CAPACITY OF 200 PEOPLE..LOCATED IN IGATPURI</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco5.jpg"
                    alt="Second slide"/>
                    <Carousel.Caption>
                   
                    {/* <p id="pd">MERGE TRADITIONAL,MODERN AND CUSTOSM ACCENTS WITH A HANDCARVED SOLID MANDAP,BRASS PLATED CHAIRS..
                     SEATING CAPACITY OF 500+ PEOPLE..LOCATED IN PUNE</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/a2.jpg"
                    alt="Third slide"/>
                    <Carousel.Caption>
                   
                    {/* <p id="pd">BOOK YOUR BIRTHDAY BETWEEN MONDAY TO FRIDAY AND RECEIVE A FREE COCKTAIL ON ARRIVAL FOR YOU</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco2.jpg"
                    alt="Third slide"/>
                    <Carousel.Caption>
                   
                    {/* <p id="pd">BEAUTIFUL LOCATION TO PLAN YOUR MOST AWAITED MOMENT IN LIFE..CELEBRATE WITH FULL OF FUN AND ENJOY ALOT</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item interval={1000} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco8.jpg"
                    alt="Third slide"/>
                    <Carousel.Caption>
                   
                    {/* <p id="pd">BOOK YOUR BIRTHDAY BETWEEN MONDAY TO FRIDAY AND RECEIVE A FREE COCKTAIL ON ARRIVAL FOR YOU</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
               </div>
               
                
                <Jumbotron id="jumbonav">
                    <Container >
                        <h1 id="jumbonav1"> Why Choose EPS!!!!</h1>
                        <h1 id="jumbonav2">"Event planning systems simplify organization and communication, ensuring smoother management and successful events..."</h1>
                    </Container>
                    </Jumbotron>
                    
                <div classNames="container">
                <CardDeck>
                    <Card style={{marginTop:'5px'}}>
                        <Card.Img variant="top" src="/Images/deco4.jpg"/>
                        <Card.Body>
                        <Card.Title id="w1">Wedding</Card.Title>
                        <Card.Text>
                        I got my wedding planned by The Perfect Weddings - Neha & Akash were the best team to choose for planning all my wedding arrangements! 
                        From beautiful decor to perfect entertainment & hospitality for my guests all the services were well planned and executed. 
                        A great thanks to the team for their effort.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card style={{marginTop:'5px'}}>
                        <Card.Img variant="top" src="/Images/deco3.jpg"/>
                        <Card.Body>
                        <Card.Title id="w1">Theme Party</Card.Title>
                        <Card.Text>
                        Superb event organizer.. Always cater the demand of the customer according to the need and accomplish the goal with perfection.
                        Very creative, innovative and always beautiful work exhibited by the party hub event beyond expectations....
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card  style={{marginTop:'5px'}}> 
                        <Card.Img variant="top" src="/Images/deco6.jpg" />
                        <Card.Body>
                        <Card.Title  id="w1">Corporate Seminar</Card.Title>
                        <Card.Text>
                        "Great, great job the last couple of days... 
                        I just wanted to say thank you again for your impeccable facilitation. 
                        You and the entire DMEM team are stellar. We appreciate your professionalism and attention to detail.  If we can help serve as a reference for your companies work in the future please don’t hesitate to ask. Cindy – thanks for assigning Leslie to this event. She was fabulous!"
                        </Card.Text>
                        </Card.Body>
                     </Card> 
                 </CardDeck> 
            <div className="container-fluid" style={{marginTop:"20px"}}>
                <Jumbotron id="q1">
                  <div class="row12">
                    <div class="column12">
                    <div className="container">
                        <h5 id="w2">Perfect any size event</h5>
                        <p>Confidently scale the attendee count and square footage for your event 
                        without a loss in performance.</p>
                    </div> 
                    </div>
                    <div class="column12">
                    <div className="container">
                        <h5 id="w2">Provide exceptional service</h5>
                        <p>Get the order right everytime and avoid stress about food allergies with simple meal management for your catering staff.</p>
                    </div> 
                    </div>
                    <div class="column12">
                    <div className="container">
                        <h5 id="w2">Empower planners</h5>
                        <p>Simplify setup with quick seating and check-in. Easily identify special guests and VIPs to offer an exceptional experience.</p>
                    </div> 
                    </div>
                    <div class="column12">
                    <div className="container">
                        <h5 id="w2">Count on us</h5>
                        <p>Rest easy knowing a world-class customer services team is just moments away when you call, email, or message.</p>
                    </div> 
                    </div>
                    <i class="fa fa-facebook fa-2x"style={{marginTop:"20px"}} ></i>
                    <i class="fa fa-twitter fa-2x" style={{marginLeft:"15px"}}></i>
                    <i class="fa fa-google-plus fa-2x" style={{marginLeft:"15px"}}></i>
                    <i class="fa fa-youtube-play fa-2x" style={{marginLeft:"15px"}}></i>
                    <i class="fa fa-weixin fa-2x" style={{marginLeft:"15px"}}></i>
        
                   </div>
                </Jumbotron>
                </div>
                </div>
                <BottomNav/>
            </div>        
         );
    }
}
export default Homepage; 