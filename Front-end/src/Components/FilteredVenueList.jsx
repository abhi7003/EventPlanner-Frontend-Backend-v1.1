import React, { Component } from 'react';
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table"
import { connect } from "react-redux";
import { ADDVENUE } from "../actions/validationActions";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class FilteredVenueList extends Component {
    constructor(props){
        super(props);
        this.state={
            venueList:this.props.storedVenueList,
            customer:this.props.storedUser
        }
        this.saveVenueToCart=this.saveVenueToCart.bind(this);
    }

    saveVenueToCart=(venue)=>{
        this.props.storeVenue(venue);
        this.props.history.push("/customer/bookEvent/venueList/venueDetails");

    }
    render() {
        this.state.venueList.map(venue=>console.log(" venue names :"+venue.venueName));
        return (
            <div>
                <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
               <NavBar/>
               <Jumbotron style={{height:"50%",backgroundImage:"url('/Images/admin1.jpg')"}}> </Jumbotron>
               <Jumbotron id="jumbo">
            <h1 id="h1" style={{color:"black"}}><b>HELLO {(this.props.storedUser.firstName).toUpperCase()}...!!!  Your Venue List here...</b></h1>
            </Jumbotron>

                   
                   <Table striped bordered hover style={{marginTop:'30px'}}>
                       <thead>
                        <tr>
                            <th id="font1">Venue Name</th>
                            <th id="font1">Venue Description</th>
                            <th id="font1">Venue Capacity</th>
                            <th id="font1">Package</th>
                            <th id="font1">Price per Day</th>
                            <th id="font1">Location</th>
                            <th id="font1">Action</th>
                      </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.venueList.map(
                                    venue=>
                                            <tr key={venue.venueId}>
                                                <td>{venue.venueName}</td>
                                                <td>{venue.venueDescription}</td>
                                                <td>{venue.venueCapacity}</td>
                                                <td>{venue.venuePackage}</td>
                                                <td>{venue.venuePricePerDay}</td>
                                                <td>
                                                    <tr>
                                                    {venue.venueAddress.streetName} ,
                                                    </tr>
                                                    <tr>
                                                    {venue.venueAddress.landmark} ,  {venue.venueAddress.city}
                                                    </tr>
                                                </td>
                                                        <td><button className="btn btn-info" onClick={()=>this.saveVenueToCart(venue)}>See Details</button></td>
                                            </tr>
                                )
                            }
                            </tbody>
                        </Table>
                        
                        <Button style={{marginTop:'20px',width:"130px",marginLeft:'90%',marginBottom:"50px"}} onClick={()=>this.props.history.push('/customer/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                        </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        storedUser:state.user,
        storedVenueList:state.venueList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        storeVenue:(venue)=>{dispatch(ADDVENUE(venue))}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(FilteredVenueList);