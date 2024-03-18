import React, { Component } from 'react';
import UserService from "../Services/UserServices";
import { connect } from "react-redux";
import { ADDUSER } from "../actions/validationActions";
import NavBar from '../Components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
/*import * as ReactBootstrap from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import NavBar from './NavBar';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Badge from 'react-bootstrap/Badge';*/
import BottomNav from "../Components/BottomNav";

class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            userEmail: '',
            password: '',
            validatedUser:{},
            errors:{}
        }
         this.validateUser = this.validateUser.bind(this);
    }
   

    validateUser = (e) => {
        e.preventDefault();
        let user = {userEmail: this.state.userEmail, password: this.state.password};
        UserService.validateUser(user)
            .then(res => {
                this.setState({validatedUser: res.data.result});
                console.log("Validated USer: "+JSON.stringify(this.state.validatedUser));
                if(this.state.validatedUser !== null){
                    this.props.storeUser(this.state.validatedUser);
                    console.log("Global state objects : "+this.props.storedUser);
                    console.log("Global state objects toString : "+JSON.stringify(this.props.storedUser));
                    if (this.props.storedUser.userRole==='ADMIN') {
                        this.props.history.push('/admin/homepage');
                    } 
                    else if (this.props.storedUser.userRole==='CUSTOMER') {
                        this.props.history.push('/customer/homepage');
                    }
                    else if(this.props.storedUser.userRole==='PROPRIETOR'){
                        this.props.history.push('/proprietor/homepage');
                    }

                }
                else{
                    console.log("in else statment : invalid credentials ");
                    
                    let errors = {};
                    errors["credentials"] = "*Incorrect email-ID or Password.";
                    
                    this.setState({
                        errors: errors
                      });
                }
              
               
            },err=>{
                console.log(err);
            });
    }
    
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar></NavBar>
            <Jumbotron style={{height:"100%",backgroundImage:"url('/Images/admin1.jpg')"}}></Jumbotron>
            <h1 id="th4">Sign In</h1>
          
            <div className="jumbotron" id="jum4">
            <div className="card card-body col-md-6 offset-md-3 offset-md-3" id="formrow1">
          
            <i class="fa fa-user-circle green-color fa-5x" ></i>
            <div className="errorMsgLogin" >{this.state.errors.credentials}</div>

                <form>
                <div className="input-container">
                    {/* <label>Email:</label> */}
                    <i class="fa fa-envelope icon"></i>
                    <input placeholder="Enter Email-id" name="userEmail"  class="input-field"  value={this.state.userEmail} onChange={this.onChange}  />
                </div>

                <div className="input-container">
                    {/* <label>password:</label> */}
                    <i class="fa fa-key icon"></i>
                    <input type="password" placeholder="Enter password" name="password" class="input-field" value={this.state.password} onChange={this.onChange}/>
                    
                </div>
                <div className="text-center"><button className="btn btn-success" onClick={this.validateUser}>Sign In</button></div>
                <a  href="/user/login/forgotpassword" style={{marginLeft:"220px"}}>Forgot Password?</a>
                </form>
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
        storeUser:(user)=>{dispatch(ADDUSER(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);