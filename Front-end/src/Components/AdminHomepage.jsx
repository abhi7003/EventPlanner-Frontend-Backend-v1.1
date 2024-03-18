import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../Components/NavBar';
import * as ReactBootstrap from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {connect} from 'react-redux'; 
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";
import BottomNav from "./BottomNav";

class AdminHomepage extends Component {

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
               
                <Jumbotron style={{height:"200px",backgroundImage:"url('/Images/event1.jpg')"}}> </Jumbotron>
        <div className="container-fluid">   
        <div class="jumbotron" style={{backgroundColor:'mintcream'}}>
         <div className="container-fluid">
        <div className="row">
        <div className="coloumn"  style={{marginLeft:"50px"}} >
        <Card>
        <Card.Header><i class="fa fa-user-circle green-color fa-5x" style={{marginLeft:"30%"}}></i><br/><span style={{color:'slategrey',fontSize:'22px',fontStyle:'normal'}}>HELLO, {(this.props.storedUser.firstName).toUpperCase()+" "+(this.props.storedUser.lastName).toUpperCase()}</span></Card.Header>

        <ListGroup>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'blue'}} id="th"><i class="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/admin/adminList" style={{color:'blue'}}  id="th"><i class="fa fa-list fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;Admin List</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link href="/admin/userList" style={{color:'blue'}}  id="th"><i class="fa fa-list fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users List</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/admin/register" style={{color:'blue'}}  id="th"><i class="fa fa-user-plus fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Register Admin</ReactBootstrap.Nav.Link></ListGroup.Item>
        <ListGroup.Item variant="primary"><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'blue'}}  id="th"><i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item> 
        </ListGroup>

        {/* <ListGroup variant="flush">
        <ListGroup.Item><ReactBootstrap.Nav.Link href="/user/myprofile" style={{color:'black'}} id="th"><i class="fa fa-user" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;My Profile</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/admin/adminList" style={{color:'black'}}  id="th"><i class="fa fa-list fa-lg" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;&nbsp;Admin List</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/admin/userList" style={{color:'black'}}  id="th"><i class="fa fa-list fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users List</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link href="/admin/register" style={{color:'black'}}  id="th"><i class="fa fa-user-plus fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Register Admin</ReactBootstrap.Nav.Link></ListGroup.Item>
                        <ListGroup.Item><ReactBootstrap.Nav.Link onClick={this.onSignOut} style={{color:'black'}}  id="th"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out</ReactBootstrap.Nav.Link></ListGroup.Item> 
        </ListGroup> */}
        </Card>
        </div>
        <div class="column" style={{marginLeft:"20px"}}>
        <img  src="/Images/event.jpg" alt="First slide" style={{width:"800px",marginLeft:"150px"}}/>    
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

export default connect(mapStateToProps,mapDispatchToProps)(AdminHomepage);