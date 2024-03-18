import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import NavBar from './NavBar';
import Carousel from 'react-bootstrap/Carousel';
import { CardDeck } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";


class VenueDetails extends Component {
    constructor(props){
        super(props);
        this.state={
           venue:this.props.storedVenue
        }
        this.logout=this.logout.bind(this);
    }

    logout=(e)=>{
        e.preventDefault();
        console.log(" in sign out click button function...removing.....");
        this.props.removeUser();
        this.props.removeVenue();
        this.props.removeVenueList();
        this.props.removeMeal();
        this.props.removeDecoration();
        this.props.removeSdate();
        this.props.removeEdate();
        this.props.history.push('/');
    }

    render() {
        console.log("Stored venues: "+JSON.stringify(this.state.venue));
        return (
            <div id="venueb">
                <h4 id="h4">EVENTPLANER</h4>
                
              
                <Carousel>
                <Carousel.Item interval={500} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco2.jpg"
                    alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item interval={500} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/deco1.jpg"
                    alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item interval={500} id="coro">
                    <img
                    className="d-block w-100"
                    src="/Images/ve9.jpg"
                    alt="Third slide"/>
                </Carousel.Item>
                </Carousel>
            
                <Jumbotron style={{marginTop:"20px"}}>
                <h1 id="th1" ><b>{this.state.venue.venueName}</b></h1>
                    <Card.Body>
                        {/*<Card.Title>{this.state.venue.venueDescription}</Card.Title>*/}
                        <h5 id="card">{this.state.venue.venueDescription}</h5>
                        <h5 id="card">Venue Package : {this.state.venue.venuePackage}</h5>
                        <h5 id="card">Venue Capacity :{this.state.venue.venueCapacity}</h5>
                        </Card.Body>
                </Jumbotron>
            <CardDeck>
            <Card>
           
                <Card.Img variant="top" src="/Images/meal3.jpg" style={{height:"50%"}}/>
                <Card.Body>
                <Card.Body style={{margin:'30px'}}>
                    <Card.Text>
                    <h1 id="th1"><strong>Meals</strong></h1>
                            <Table>
                                {
                                    this.state.venue.meals.map(
                                        meal=>
                                            <tr id="td1">{meal.mealName}</tr>
                                    )
                                }
                                </Table>
                    </Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/Images/admin6.jpg"style={{height:"50%"}} />
                
                <Card.Body style={{margin:'40px'}}>
                
                    <Card.Text>
                    <h1 id="th1"><strong>Decorations</strong></h1>
                    <Table>
                                {
                                    this.state.venue.decorations.map(
                                        decoration=>
                                            <tr id="td1">{decoration.decorationDescription}</tr>
                                    )
                                }
                                </Table>
                    </Card.Text>
                    </Card.Body>
            </Card>
    </CardDeck>
    <div style={{marginLeft:'53%',marginTop:"20px",marginBottom:"40px"}}>
                <Button style={{marginTop:'20px',width:"250px",}} onClick={()=>this.props.history.push('/customer/bookEvent/venueList/venueDetails/addMealandDecoration')}><i class='fas fa-bezier-curve'></i>  <i class='fas fa-drumstick-bite'></i> Meal and Decoration</Button>
                <Button style={{marginTop:'20px',width:"150px",marginLeft:'10px'}} onClick={()=>this.props.history.push('/customer/bookEvent/venueList')}><i class="fa fa-list" aria-hidden="true" ></i> Venue List</Button>
                <Button style={{marginTop:'20px',width:"120px",marginLeft:'10px'}} onClick={()=>this.props.history.push('/customer/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                <Button style={{marginTop:'20px',width:"120px",marginLeft:'10px'}} onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Sign Out</Button>
                </div> 
        </div>
             
           
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        storedVenue:state.venue
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        removeUser:()=>{dispatch(REMOVEUSER())},
        removeVenue:()=>{dispatch(REMOVEVENUE())},
        removeMeal:()=>{dispatch(REMOVEMEAL())},
        removeDecoration:()=>{dispatch(REMOVEDECORATION())},
        removeVenueList:()=>{dispatch(REMOVEVENUELIST())},
        removeSdate:()=>{dispatch(REMOVESDATE())},
        removeEdate:()=>{dispatch(REMOVEEDATE())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VenueDetails);