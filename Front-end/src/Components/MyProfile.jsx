import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
//import Badge from 'react-bootstrap/Badge';
import BottomNav from "../Components/BottomNav";

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            proprietor:this.props.storedUser
        }
        this.redirect=this.redirect.bind(this);
    }

    redirect=(e)=>{
        e.preventDefault();
        if(this.state.proprietor.userRole==='ADMIN'){
            console.log(" user is admin ...redirecting to admin homepage");
            this.props.history.push('/admin/homepage');
        }
        else if(this.state.proprietor.userRole==='CUSTOMER'){
            console.log(" user is customer ..redirecting to cutomer homepage");
            this.props.history.push('/customer/homepage');
        }
        else if(this.state.proprietor.userRole==='PROPRIETOR'){
            console.log(" user is proprietor ..redirecting to proprietor homepage");
            this.props.history.push('/proprietor/homepage');
        }
    }

    render() {
    
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
          
           <Jumbotron style={{height:"300px",backgroundImage:"url('/Images/profile.jpg')"}}> </Jumbotron>
         
           <Jumbotron  id="idj">My Profile</Jumbotron>
           <div class="row">
           <div className="container-fluid">
           <div class="column">
           <div class="jumbotron" style={{marginRight:"10px"}}>
           <i class='fas fa-user fa-7x' style={{marginLeft:"200px",color:"blue"}}></i>
               <Table class="table table-borderless table-condensed table-hover ">
               <tbody >
               <br></br>
                   <h3 id="personal"><strong>Personal Details</strong></h3>
                   <tr>
                       <th id="td">First Name</th>
                        <td>{this.state.proprietor.firstName}</td>
                        </tr>
                    <tr>
                        <th id="td">Last Name</th>
                        <td>{this.state.proprietor.lastName}</td>
                        </tr>
                    <tr>
                        <th id="td">Email</th>
                        <td>{this.state.proprietor.userEmail}</td>
                        </tr>
                    <tr>
                        <th id="td">Gender</th>
                        <td>{this.state.proprietor.userGender}</td>
                        </tr>
                    <tr>
                        <th id="td">Contact No</th>
                        <td>{this.state.proprietor.contactNo}</td>
                        </tr>
                    <tr>
                        <th id="td">Date of Birth</th>
                        <td>{this.state.proprietor.userDOB}</td>
                        </tr>
                        <br></br>
                        </tbody>
                </Table>
                </div>
                </div>
            <div class="column">
           
            <Table class="table table-borderless table-condensed table-hover">
            <div class="jumbotron" style={{height:"660px",backgroundColor:'mintcream'}}>
            <i class='fas fa-address-book fa-7x' style={{marginLeft:"250px",color:"blue"}}></i>
                <tbody >
                    <h3 id="personal" style={{marginTop:"20px"}}><strong>Address Details</strong></h3>
                   <tr>
                        <th id="td">House Number</th>
                        <td>{this.state.proprietor.userAddress.houseNo}</td>
                        </tr>
                    <tr>
                        <th id="td">Street</th>
                        <td>{this.state.proprietor.userAddress.streetName}</td>
                        </tr>
                    <tr>
                        <th id="td">Landmark</th>
                        <td>{this.state.proprietor.userAddress.landmark}</td>
                        </tr>
                    <tr>
                        <th id="td">City</th>
                        <td>{this.state.proprietor.userAddress.city}</td>
                        </tr>
                    <tr>
                        <th id="td">District</th>
                        <td>{this.state.proprietor.userAddress.district}</td>
                        </tr>
                    <tr>
                        <th id="td">State</th>
                        <td>{this.state.proprietor.userAddress.state}</td>
                    </tr>
                    <tr>
                        <th id="td">Country</th>
                        <td>{this.state.proprietor.userAddress.country}</td>
                    </tr>
                    <tr>
                        <th id="td">Zipcode</th>
                        <td>{this.state.proprietor.userAddress.zipcode}</td>
                        </tr>
                </tbody>
                </div>
            </Table>
           
            </div>
            </div>
            </div>
           
            <div style={{marginLeft:'85%',marginTop:"10px",marginBottom:"40px"}}>
            <Button style={{marginTop:'20px',width:"200px"}} onClick={this.redirect}><i class="fa fa-arrow-left" aria-hidden="true">Back To Previous</i></Button></div>   
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
export default connect(mapStateToProps)(MyProfile);