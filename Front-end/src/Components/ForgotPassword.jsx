import React, { Component } from 'react';
//import { connect } from "react-redux";
import UserServices from "../Services/UserServices";
import NavBar from '../Components/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import $ from "jquery";
//import { findDOMNode } from "react-dom";
import BottomNav from '../Components/BottomNav';

class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state={
            userEmail:'',
            securityAnswer:'',
            securityQuestion:'',
            validatedUser:{},
            errors:{}
        }
        this.fetchUserData=this.fetchUserData.bind(this);

    }

    fetchUserData=(e)=>{
        e.preventDefault();
        let user={userEmail:this.state.userEmail,securityQuestion:this.state.securityQuestion,securityAnswer:this.state.securityAnswer};
        console.log(JSON.stringify(user));
        UserServices.forgotPassword(user)
        .then(res=>{
            this.setState({validatedUser: res.data});
            console.log("retrived password : "+JSON.stringify(this.state.validatedUser));
            console.log("retrived object password : "+(res.data));
            if ((this.state.validatedUser === 9999)|| (this.state.validatedUser === null) || (JSON.stringify(this.state.validatedUser) === "") ){
                
                console.log("In-Valid credentials...");
                alert("Incorrect Credentials...!!!");
                
            }
            else{
                console.log("in else statment : valid credentials ");
                
                alert("please note down your password :"+this.state.validatedUser);
                this.props.history.push("/user/login");
                
            }
            /*if(this.state.validatedUser.password!=="" || this.state.validatedUser.password !== null){
                alert("Please note down your password : "+this.state.validatedUser.password);
            }else{
                alert("Invalid details...");
            }*/
            });
        }
    

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar></NavBar>
            <Jumbotron style={{height:"100%",backgroundImage:"url('/Images/admin1.jpg')"}}></Jumbotron>
            <h1 id="th4">Forgot Password</h1>
          
            <div className="jumbotron" id="jum4">
            <div className="card card-body col-md-6 offset-md-3 offset-md-3" id="formrow1">
          
            <i class="fa fa-user-circle green-color fa-5x" ></i>
                <form>
                <div className="input-container">
                    <i class="fa fa-envelope icon"></i>
                    <input placeholder="Enter Email-id" name="userEmail"  class="input-field"  onChange={this.onChange}  />
                </div>

                <div className="form-group">
               
                    <label style={{color:"black"}}>Select Security Question</label>
                  
                    <select name="securityQuestion" className="form-control" onChange={this.onChange} >
                        <option value='NA' disabled selected>...</option>
                        <option value='WHAT_IS_YOUR_FAVOURITE_FOOD'>WHAT_IS_YOUR_FAVOURITE_FOOD</option>
                        <option value='WHAT_WAS_YOUR_SCHOOL_ROLLNO'>WHAT_WAS_YOUR_SCHOOL_ROLLNO</option>
                        <option value='WHICH_SUBJECT_YOU_HATE_MOST'>WHICH_SUBJECT_YOU_HATE_MOST</option>
                        <option value='WHO_IS_YOUR_FAVOURITE_PERSON'>WHO_IS_YOUR_FAVOURITE_PERSON</option>
                        <option value='WHICH_IS_YOUR_FAVOURITE_COLOR'>WHICH_IS_YOUR_FAVOURITE_COLOR</option>
                        <option value='WHICH_IS_YOUR_FAVOURITE_SONG'>WHICH_IS_YOUR_FAVOURITE_SONG</option>
                        <option value='WHICH_IS_YOUR_FAVOURITE_MOVIE'>WHICH_IS_YOUR_FAVOURITE_MOVIE</option>
                    </select>
                </div>

                <div className="form-group">
                    <label  style={{color:"black"}}>Security Answer</label>
                 
                    <input type="text" placeholder="Enter security answer" name="securityAnswer" className="form-control" value={this.state.securityAnswer} onChange={this.onChange} />
                </div>

               
                <div className="text-center"><button className="btn btn-success" onClick={this.fetchUserData}>Submit</button></div>
                
                </form>
                  
            </div>
            
            </div>
            <BottomNav></BottomNav>
           </div>
         

     
        );
    }
}




export default ForgotPassword;