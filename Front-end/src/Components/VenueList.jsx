import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProprietorService from '../Services/ProprietorServices';
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";

class VenueList extends Component {
    constructor(props){
        super(props);
        this.state={
            proprietor:this.props.storedUser,
            venueList:[]
        }
        this.findAllVenues=this.findAllVenues.bind(this);
        this.deleteVenueById=this.deleteVenueById.bind(this);
        this.logout=this.logout.bind(this);
    }

    componentDidMount(){
        this.findAllVenues(this.state.proprietor);
    }

    findAllVenues=(user)=>{
        //console.log("sending request with user : "+JSON.stringify(user));
        ProprietorService.getVenueList(user)
        .then(Response=>{
            console.log("received venue list : "+JSON.stringify(Response.data));
            this.setState({
                venueList:Response.data
            });

        },
        err=>{
            console.log("caught as error in find all venues : "+err);
        });
    }

    deleteVenueById=(venueId)=>{
        ProprietorService.deleteVenueById(venueId)
        .then(Response=>{
            console.log(" venue deleted successfully...");
            this.setState({
                venueList:this.state.venueList.filter(venue=> venue.venueId!==venueId)
            });
            this.props.history.push('/proprietor/myvenues');
        },
        err=>{
            console.log("caught an error in deleteby venue : "+err);
        })
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
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
             
               <Jumbotron style={{height:"50%",backgroundImage:"url('/Images/admin1.jpg')"}}> </Jumbotron>
               <Jumbotron id="jumbo">
            <h1 id="h1"><b>HELLO {(this.state.proprietor.firstName+" "+this.state.proprietor.lastName).toUpperCase()}...!!!  Your Venue List here...</b></h1>
            </Jumbotron>

                   
                   <Table striped bordered hover style={{marginTop:'30px'}}>
                       <thead>
                        <tr>
                            <th>Venue Name</th>
                            <th>Venue Description</th>
                            <th>Venue Capacity</th>
                            <th>Venue Package</th>
                            <th>Price per Day</th>
                            <th>Address</th>
                            <th>Events</th>
                            <th>Action</th>
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
                                                    House No. {venue.venueAddress.houseNo}
                                                    </tr>
                                                    <tr>
                                                    Street : {venue.venueAddress.streetName}
                                                    </tr>
                                                    <tr>
                                                    Landmark : {venue.venueAddress.landmark}
                                                    </tr>
                                                    <tr>
                                                    City : {venue.venueAddress.city}
                                                    </tr>
                                                    <tr>
                                                    District : {venue.venueAddress.district}
                                                    </tr>
                                                    <tr>
                                                    State : {venue.venueAddress.state}
                                                    </tr>
                                                    <tr>
                                                    Country : {venue.venueAddress.country}
                                                    </tr>
                                                    <tr>
                                                    Zipcode : {venue.venueAddress.zipcode}
                                                    </tr>
                                                </td>
                                                <td>
                                                    {
                                                        venue.events.map(
                                                            event=>
                                                                <tr>
                                                                    {event.eventName}
                                                                </tr>
                                                        )
                                                    }
                                                </td>
                                                <td><button className="btn btn-danger" onClick={()=>this.deleteVenueById(venue.venueId)}><i class="fa fa-trash-o"></i>Delete</button></td>
                                            </tr>
                                )
                            }
                        </tbody>
                        </Table>
                    
                         <div style={{marginLeft:'80%'}}>
                         <Button style={{marginTop:'20px',width:"125px",marginLeft:'10px'}} onClick={()=>this.props.history.push('/proprietor/myvenues/addvenue')}><i class="fa fa-map-marker" aria-hidden="true"> Add Venue</i></Button>
                         <Button style={{marginTop:'20px',width:"125px",marginLeft:'10px'}} onClick={this.logout}><i class="fas fa-sign-out-alt fa-lg"></i> Logout</Button>
                        </div><div style={{marginTop:'50px'}}></div>
                         
                </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        storedUser:state.user
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

export default connect(mapStateToProps,mapDispatchToProps)(VenueList);