import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProprietorService from '../Services/ProprietorServices';
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";


class BookedVenueList extends Component {
    constructor(props){
        super(props);
        this.state={
            proprietor:this.props.storedUser,
            BookedvenueList:[]
        }
        this.findBookedVenues=this.findBookedVenues.bind(this);
        this.logout=this.logout.bind(this);
    }

    componentDidMount(){
        this.findBookedVenues(this.state.proprietor);
    }

    findBookedVenues=(user)=>{
        console.log("sending request with user : "+JSON.stringify(user));
        ProprietorService.getBookedVenueList(user)
        .then(Response=>{
            console.log("received venue list : "+JSON.stringify(Response.data));
            this.setState({
                BookedvenueList:Response.data
            });
            console.log("Booked Venue List :"+JSON.stringify(this.state.BookedvenueList));
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
            <div>
            <div className="container-fluid">
        <h4 id="h4">EVENTPLANER</h4>
          
           <Jumbotron style={{height:"50%",backgroundImage:"url('/Images/admin1.jpg')"}}> </Jumbotron>
           <Jumbotron id="jumbo">
        <h1 id="h1" style={{color:"black"}}><b>HELLO {(this.props.storedUser.firstName).toUpperCase()}...!!!  Your Booked Venue List here...</b></h1>
        </Jumbotron>

               
               <Table striped bordered hover style={{marginTop:'30px'}}>
                   <thead>
                    <tr>
                        <th id="font1">Booking ID</th>
                        <th id="font1">Venue Name</th>
                        <th id="font1">From</th>
                        <th id="font1">To</th>
                        <th id="font1">Meal</th>
                        <th id="font1">Decoration</th>
                        <th id="font1">Customer Details</th>
                  </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.BookedvenueList.map(
                                record=>
                                        <tr key={record.bookingId}>
                                            <td>{record.bookingId}</td>
                                            <td>{record.bookedVenue.venueName}</td>
                                            <td>{record.startDate}</td>
                                            <td>{record.endDate}</td>
                                            <td>{record.choosenMeal.mealName}</td>
                                            <td>{record.choosenDecoration.decorationDescription}</td>
                                            <td>
                                                <tr>
                                                {record.bookedBy.firstName} {record.bookedBy.lastName}
                                                </tr>
                                                <tr>
                                                {record.bookedBy.userEmail}
                                                </tr>
                                                <tr>
                                                {record.bookedBy.contactNo}
                                                </tr>
                                            </td>
                                                  
                                          </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    
                    <Button style={{marginTop:'20px',width:"130px",marginLeft:'90%',marginBottom:"50px"}} onClick={()=>this.props.history.push('/proprietor/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(BookedVenueList);