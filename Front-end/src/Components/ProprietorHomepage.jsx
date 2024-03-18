import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../Components/NavBar';
import * as ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import {ADDUSER} from '../actions/validationActions';
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";
import BottomNav from "../Components/BottomNav";

class ProprietorHomepage extends Component {
    constructor(props){
        super(props);
        this.state={
            proprietor:this.props.storedUser
        }
        this.onSignOut=this.onSignOut.bind(this);
    }

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
                
                <Jumbotron style={{height:"100px",backgroundImage:"url('/Images/event2.jpg')"}}> </Jumbotron>
        <div className="container-fluid">   
        <div class="jumbotron" style={{backgroundColor:'mintcream'}}>
         <div className="container-fluid">
        <div className="row">
        <div className="coloumn"  style={{marginLeft:"10px"}} >
        {/* <Card>
        <Card.Header><i class="fa fa-user-circle green-color fa-5x" style={{marginLeft:"25%"}}></i><br/><span style={{color:'navy',fontSize:'22px',fontStyle:'italic'}}>Hello {(this.props.storedUser.firstName).toUpperCase()+" "+(this.props.storedUser.lastName).toUpperCase()+" ,"}</span></Card.Header>
        <ListGroup variant="flush">
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'black'}} id="th"><i class="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/proprietor/myvenues" style={{color:'black'}} id="th"><i class="fa fa-location-arrow fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Venues</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/proprietor/myvenues/addvenue" style={{color:'black'}} id="th"><i class="fa fa-plus fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Venue</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/" style={{color:'black'}} id="th"><i class="fa fa-comments-o fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'black'}} id="th"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item>
                        </ListGroup>
                </Card> */}


        <Card>
        <Card.Header><i class="fa fa-user-circle green-color fa-5x" style={{marginLeft:"30%"}}></i><br/><span style={{color:'slategrey',fontSize:'22px',fontStyle:'normal'}}>HELLO, {(this.props.storedUser.firstName).toUpperCase()+" "+(this.props.storedUser.lastName).toUpperCase()}</span></Card.Header>

        <ListGroup>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'blue'}} id="th"><i class="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/proprietor/myvenues" style={{color:'blue'}}  id="th"><i class="fas fa-chair fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp; My Venue</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item  variant="primary"><ReactBootstrap.Nav.Link href="/proprietor/bookedvenuelist" style={{color:'blue'}}  id="th"><i class="fas fa-chair fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp; My Booked Venues</ReactBootstrap.Nav.Link></ListGroup.Item>
        
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/proprietor/myvenues/addvenue" style={{color:'blue'}}  id="th"><i class="fa fa-history fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register Venue</ReactBootstrap.Nav.Link></ListGroup.Item>
        {/* <ListGroup.Item  variant="primary"><ReactBootstrap.Nav.Link href="/" style={{color:'blue'}}  id="th"><i class="fas fa-comments fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback</ReactBootstrap.Nav.Link></ListGroup.Item> */}
        <ListGroup.Item><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'blue'}}  id="th"><i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item> 
        </ListGroup>
        </Card>
       
      



                </div>
        <div class="column" style={{marginLeft:"20px"}}>
        <img  src="/Images/deco4.jpg" alt="First slide" style={{width:"800px",marginLeft:"50px",height:'600px'}}/>    
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
        storeUser:(user)=>{dispatch(ADDUSER(user))},
        removeUser:()=>{dispatch(REMOVEUSER())},
        removeVenue:()=>{dispatch(REMOVEVENUE())},
        removeMeal:()=>{dispatch(REMOVEMEAL())},
        removeDecoration:()=>{dispatch(REMOVEDECORATION())},
        removeVenueList:()=>{dispatch(REMOVEVENUELIST())},
        removeSdate:()=>{dispatch(REMOVESDATE())},
        removeEdate:()=>{dispatch(REMOVEEDATE())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProprietorHomepage);