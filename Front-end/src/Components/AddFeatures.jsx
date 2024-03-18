import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import BottomNav from "../Components/BottomNav";
class AddFeatures extends Component {
    render() {
        return (
            
            <div className="container-fluid">
             <h4 id="h4">EVENTPLANER</h4>
                <NavBar/>
               <Jumbotron style={{height:"150%",backgroundImage:"url('/Images/admin1.jpg')"}}> </Jumbotron>
               <Jumbotron id="jumboc2">
                <h1 id="jumh11">Add Features Here!!!</h1>
                <h5 style={{textAlign:"center",fontFamily:"Playfair Display SC",marginTop:"30px",fontWeight:"bold"}}></h5>
                </Jumbotron>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/Images/meal.jpg" style={{height:"300px"}}/>
                        <Card.Body>
                        <Card.Title id="s1">Add Delicious Meal</Card.Title>
                        <Card.Text>
                        <a class="btn btn-primary" href="/proprietor/myvenues/addvenue/addFeatures/addMeal" role="button"><i class="fa fa-plus" aria-hidden="true"></i> Add</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/Images/deco13.jpg" style={{height:"300px"}}/>
                        <Card.Body>
                        <Card.Title id="s1">Add Awesome Decoration</Card.Title>
                        <a class="btn btn-primary" href="/proprietor/myvenues/addvenue/addFeatures/addDecoration" role="button"><i class="fa fa-plus" aria-hidden="true"></i> Add</a>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/Images/deco14.jpg" style={{height:"300px"}}/>
                        <Card.Body>
                        <Card.Title id="s1">Add Events On Your Venue</Card.Title>
                        <a class="btn btn-primary" href="/proprietor/myvenues/addvenue/addFeatures/addEvents" role="button"><i class="fa fa-plus" aria-hidden="true"></i> Add</a>
                        </Card.Body>
                    </Card>
                    </CardDeck>

                    <div style={{marginLeft:'80%',marginTop:"20px",marginBottom:"40px"}}>
                         <Button style={{marginTop:'20px',width:"120px",}} onClick={()=>{this.props.history.push('/proprietor/homepage')}}><i class="fa fa-fw fa-home"></i> My Home</Button>
                         <Button style={{marginTop:'20px',width:"120px",marginLeft:'10px'}} onClick={()=>{this.props.history.push('/')}}><i class="fas fa-sign-out-alt fa-lg"></i> Sign Out</Button>
                    </div>
                    <BottomNav/>
                    </div>
        );
    }
}

export default AddFeatures;