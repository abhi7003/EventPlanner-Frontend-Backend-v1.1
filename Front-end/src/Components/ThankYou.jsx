import React, { Component } from 'react';
import NavBar from './NavBar';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from "react-redux";
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";
import BottomNav from "../Components/BottomNav";


class ThankYou extends Component {
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
        return (
            <div className="container-fluid">
            
            <h4 id="h4">EVENTPLANER</h4>
             <NavBar></NavBar>
             <i class="fa fa-check" style={{fontSize:"200px",color:"green",marginLeft:"40%",marginTop:"50px"}}></i>
             <h1 style={{marginTop:"20px"}} id="th3">Thank You So Much</h1>
             <h1 id="th3">Your Event With Venue Has Been Booked Successfully..!!!</h1>
             <div style={{marginLeft:'80%',marginTop:'30px'}}>
                
                <button className="btn btn-danger" style={{width:'120px'}}  onClick={()=>this.props.history.push("/customer/homepage")}><i class="fa fa-fw fa-home"></i>My Home</button>
                <button className="btn btn-danger" style={{width:'120px',marginLeft:'20px'}} onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Sign Out</button>
            </div>
            <BottomNav/>
                
            </div>
        );
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

export default connect(null,mapDispatchToProps)(ThankYou);