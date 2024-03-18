import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron';
import AdminService from '../Services/AdminService';
import {connect} from 'react-redux'; 
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";

class UserList extends Component {

    constructor(props){
        super(props);
        this.state={
            allUsers: []
        }
        this.fetchAllUsers=this.fetchAllUsers.bind(this);
        this.deleteUserById=this.deleteUserById.bind(this);
        this.logout=this.logout.bind(this);
    }

    componentDidMount(){
        this.fetchAllUsers();
    }

    fetchAllUsers(){
        AdminService.getAllUsers()
        .then((Response)=>{
            this.setState({allUsers: Response.data.result});
            //console.log(Response.data);
            //console.log(Response.data.result);
            console.log(this.state.allUsers);
        },
        (err)=>{
            console.log("catch error "+err);
        })
    }

    deleteUserById(userId){
        AdminService.deleteUserById(userId)
        .then((Response)=>{
            console.log("user deleted successfully...");
            this.setState({
                allUsers: this.state.allUsers.filter(user=> user.userId!==userId)
            });
            this.props.history.push("/admin/userList");
        },
        (err)=>{
            console.log("caught an error :"+err);
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
               <h1 id="ad1">Users List</h1>

                
                   <Table striped bordered hover style={{marginTop:'30px'}}>
                       <thead>
                        <tr>
                            <th>User First Name</th>
                            <th>User Last Name</th>
                            <th>User Email ID</th>
                            <th>User Gender</th>
                            <th>User Date of Birth</th>
                            <th>Contact No.</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allUsers.map(
                                    user=>
                                        <tr key={user.userId}>
                                           <td>{user.firstName}</td>
                                           <td>{user.lastName}</td>
                                           <td>{user.userEmail}</td>
                                           <td>{user.userGender}</td>
                                           <td>{user.userDOB}</td>
                                           <td>{user.contactNo}</td>
                                           <td>{user.userRole}</td>
                                           <td><button className="btn btn-danger" onClick={()=>this.deleteUserById(user.userId)}>Delete</button></td>
                                        </tr>
                                    
                                )
                            }
                        </tbody>
                        </Table>
                       
                         <div style={{marginLeft:'82%'}}>
                         <Button style={{marginTop:'20px',width:"120px",marginLeft:'15px'}} onClick={()=>this.props.history.push('/admin/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                         <Button style={{marginTop:'20px',width:"100px",marginLeft:'15px'}} onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Logout</Button>
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

export default connect(null,mapDispatchToProps)(UserList);