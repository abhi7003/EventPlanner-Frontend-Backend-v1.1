import React, { Component } from 'react';
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron';
import AdminService from '../Services/AdminService';
import {connect} from 'react-redux'; 
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";

class AdminList extends Component {
    constructor(props){
        super(props);
        this.state={
            adminList:[]
        }
        this.logout=this.logout.bind(this);
        this.fetchAdminList=this.fetchAdminList.bind(this);
        this.deleteUserById=this.deleteUserById.bind(this);
        this.addNewAdmin=this.addNewAdmin.bind(this);
    }

    componentDidMount(){
       this.fetchAdminList();
     }

     fetchAdminList(){
        AdminService.getAllAdmins().then((Response)=>{
            this.setState({adminList: Response.data.result});
            console.log("list imported..."+this.state.adminList);
            },
            (err)=>{
                console.log("caught an error"+err);
            }
        )};

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

    addNewAdmin=(Event)=>{
        Event.preventDefault();
        this.props.history.push("/admin/register");
    }

    deleteUserById(userId){
        AdminService.deleteUserById(userId)
        .then((Response)=>{
            console.log("User deleted successfully..."+userId);
            this.setState({
                adminList: this.state.adminList.filter(user=> user.userId!==userId)
            });
            this.props.history.push('/admin/adminList');
        },
        (err)=>{
                console.log("In error : "+err);
        })
    }

    render() {
        return (
            <div className="container-fluid">
             <h4 id="h4">EVENTPLANER</h4>
               
                <Jumbotron style={{height:"50%",backgroundImage:"url('/Images/admin1.jpg')"}}> </Jumbotron>
                <h1 id="ad1">Admin List</h1>

                    
                    <Table striped bordered hover  style={{marginTop:'30px'}}>
                        <thead>
                        <tr>
                            <th>Admin First Name</th>
                            <th>Admin Last Name</th>
                            <th>Admin Email ID</th>
                            <th>Admin Gender</th>
                            <th>Date of Birth</th>
                            <th>Contact No.</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.adminList.map(
                                    user=>
                                        <tr key={user.userId}>
                                           <td>{user.firstName}</td>
                                           <td>{user.lastName}</td>
                                           <td>{user.userEmail}</td>
                                           <td>{user.userGender}</td>
                                           <td>{user.userDOB}</td>
                                           <td>{user.contactNo}</td>
                                           <td><button className="btn btn-danger" onClick={()=>{this.deleteUserById(user.userId)}}><i class="fa fa-trash-o fa-lg"></i> Delete</button></td>
                                        </tr>
                                    
                                )
                            }
                        </tbody>
                        </Table>
                       
                        
                         <div style={{marginLeft:'67%'}}>
                         <Button style={{marginTop:'20px',width:"160px",marginLeft:'10px'}} onClick={this.addNewAdmin}><i class="fa fa-plus" aria-hidden="true"></i> Register Admin</Button>
                         <Button style={{marginTop:'20px',width:"130px",marginLeft:'10px'}} onClick={()=>this.props.history.push('/admin/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                         <Button style={{marginTop:'20px',width:"130px",marginLeft:'10px'}} onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Sign Out</Button>
                        </div><div style={{marginTop:'50px'}}></div>
                         
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

export default connect(null,mapDispatchToProps)(AdminList);