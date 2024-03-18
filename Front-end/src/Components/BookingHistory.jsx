import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron';
import CustomerService from "../Services/CustomerService";
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";
import BottomNav from "../Components/BottomNav";

class BookingHistory extends Component {
    constructor(props){
        super(props);
        this.state={
            customer:this.props.storedUser,
            bookingList:[]
        }
        this.findAllVenues=this.findAllVenues.bind(this)
        this.logout=this.logout.bind(this);
    }

    componentDidMount(){
        console.log("in component di moint mehtod ");
        this.findAllVenues(this.state.customer);
    }

    findAllVenues=(user)=>{
        //console.log("sending request with user : "+JSON.stringify(user));
        CustomerService.getVenueList(user)
        .then(Response=>{
            console.log("received venue list : "+JSON.stringify(Response.data));
            this.setState({
                bookingList:Response.data
            });
            console.log("booking data received : "+JSON.stringify(this.state.bookingList));
        },
        err=>{
            console.log("caught as error in find all venues : "+err);
        });
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
            <h1 id="h1"><b><i>HELLO {(this.state.customer.firstName+" "+this.state.customer.lastName).toUpperCase()}...!!!</i><br/> <br/>
            Booking History</b></h1> 
            </Jumbotron>

                   <Jumbotron style={{marginTop:"30px"}}>
                   <Table class="table table-bordered" style={{marginTop:'30px'}}>
                       <thead>
                        <tr>
                            <th>Venue Name</th>
                            <th>Venue Package</th>
                            <th>Price per Day</th>
                            <th>Location</th>
                            <th>From </th>
                            <th>To</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookingList.map(
                                    booked=>
                                            <tr key={booked.bookingId}>
                                                <td>{booked.bookedVenue.venueName}</td>
                                                <td>{booked.bookedVenue.venuePackage}</td>
                                                <td>{booked.bookedVenue.venuePricePerDay}</td>
                                                <td>
                                                    <tr>
                                                    Street : {booked.bookedVenue.venueAddress.streetName}
                                                    </tr>
                                                    <tr>
                                                    Landmark : {booked.bookedVenue.venueAddress.landmark}
                                                    </tr>
                                                    <tr>
                                                    City : {booked.bookedVenue.venueAddress.city}
                                                    </tr>
                                                </td>
                                                <td>{booked.startDate}</td>
                                                <td>{booked.endDate}</td>
                                            </tr>
                                )
                            }
                        </tbody>
                        </Table>
                        </Jumbotron>
                         <div style={{marginLeft:'80%'}}>
                         <Button style={{marginTop:'20px',width:"125px",marginLeft:'10px'}} onClick={()=>this.props.history.push('/customer/homepage')}>My Home</Button>
                         <Button style={{marginTop:'20px',width:"100px",marginLeft:'10px'}} onClick={this.logout}>Logout</Button>
                        </div><div style={{marginTop:'50px'}}></div>
                     <BottomNav/>    
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

export default connect(mapStateToProps,mapDispatchToProps)(BookingHistory);