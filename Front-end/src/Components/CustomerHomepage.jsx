import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../Components/NavBar';
import * as ReactBootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {connect} from 'react-redux'; 
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";
import BottomNav from "./BottomNav";

class CustomerHomepage extends Component {
    
    onSignOut=()=>{
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
            <div className='container-fluid'>
            <h4 id="h4">EVENTPLANER</h4>
                
                <Jumbotron style={{height:"200px",backgroundImage:"url('/Images/deco14.jpg')"}}> </Jumbotron>
        <div className="container-fluid">   
        <div class="jumbotron" style={{backgroundColor:'mintcream'}}>
         <div className="container-fluid">
        <div className="row">
        <div className="coloumn"  style={{marginLeft:"50px"}} >
        <Card>
        <Card.Header><i class="fa fa-user-circle green-color fa-5x" style={{marginLeft:"30%"}}></i><br/><span style={{color:'gray',fontSize:"22px",marginLeft:"40px"}}>Hello {(this.props.storedUser.firstName).toUpperCase()+" "+(this.props.storedUser.lastName).toUpperCase()}</span></Card.Header>

        <ListGroup>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'blue'}} id="th"><i class="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/customer/bookEvent" style={{color:'blue'}}  id="th"><i class="fas fa-chair fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;Book An Event</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link href="/customer/bookingHistory" style={{color:'blue'}}  id="th"><i class="fa fa-history fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking History</ReactBootstrap.Nav.Link></ListGroup.Item>
        {/* <ListGroup.Item><ReactBootstrap.Nav.Link href="/customer/bookingHistory" style={{color:'blue'}}  id="th"><i class="fas fa-comments fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback</ReactBootstrap.Nav.Link></ListGroup.Item> */}
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'blue'}}  id="th"><i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item> 
        </ListGroup>
       
       
       
       
       
       
       
       
       
        {/* <ListGroup variant="flush">
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'black'}} id="th"><i class="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/customer/bookEvent" style={{color:'black'}} id="th"><i class="fa fa-book fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book An Event</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/customer/bookingHistory" style={{color:'black'}} id="th"><i class="fa fa-history fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking History</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/" style={{color:'black'}} id="th"><i class="fa fa-comments-o fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'black'}} id="th"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item>
                        </ListGroup> */}
                </Card>
                </div>
        <div class="column" style={{marginLeft:"20px"}}>
        <img  src="/Images/custhome1.jpg" alt="First slide" style={{width:"800px",marginLeft:"150px"}}/>    
        </div>

        </div>
        </div>
        </div>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(CustomerHomepage);