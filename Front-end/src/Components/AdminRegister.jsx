import React, { Component } from 'react'
import UserService from "../Services/UserServices";
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import BottomNav from './BottomNav';


class AdminRegister extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            userEmail: '',
            password: '',
            comfirmPassword: '',
            userGender: '',
            userDOB: '',
            contactNo:'',
            securityQuestion:'',
            securityAnswer:'',
            userRole:'',
            message:'',
            houseNo: '',
            streetName: '',
            landmark: '',
            city: '',
            district: '',
            State: '',
            country: '',
            zipcode:'',
            errors: {}
        }

        this.saveUser = this.saveUser.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        console.log(this.state.securityQuestion);
        if (this.validateForm()){
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, userEmail: this.state.userEmail, password: this.state.password, userGender: this.state.userGender, 
            userDOB: this.state.userDOB,contactNo: this.state.contactNo, securityQuestion: this.state.securityQuestion,securityAnswer: this.state.securityAnswer, 
            userRole: this.state.userRole,
            userAddress:{
                houseNo:this.state.houseNo,
                streetName:this.state.streetName,
                landmark:this.state.landmark,
                city:this.state.city,
                district:this.state.district,
                State:this.state.State,
                country:this.state.country,
                zipcode:this.state.zipcode
            }};

        UserService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                console.log(this.state.message);
                alert("User registered Successfully...!!!");
                this.props.history.push('/admin/adminList');
            },
            (err)=>{
                console.log(err);
            });
    }
    }

    validateForm(){
        let errors = {};
        let formIsValid = true;

        if (!this.state.firstName) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your First Name.";
          }

          if (typeof this.state.firstName !== "undefined") {
            if (!this.state.firstName.match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["firstName"] = "*Please enter alphabet characters only.";
            }
          }

          if (!this.state.lastName) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your last Name.";
          }

          if (typeof this.state.lastName !== "undefined") {
            if (!this.state.lastName.match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastName"] = "*Please enter alphabet characters only.";
            }
          }

          if (!this.state.userEmail) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
          }

          if (typeof this.state.userEmail !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.userEmail)) {
              formIsValid = false;
              errors["emailid"] = "*Please enter valid email-ID.";
            }
          }

          if (!this.state.contactNo) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
          }

          if (typeof this.state.contactNo !== "undefined") {
            if (!this.state.contactNo.match(/^[0-9]{10}$/)) {
              formIsValid = false;
              errors["mobileno"] = "*Please enter valid mobile no.";
            }
          }

          if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
          }
    
          if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              errors["password"] = "*Please enter secure and strong password.";
            }
          }

          if ((this.state.comfirmPassword).localeCompare(this.state.password)!== 0) {
            formIsValid = false;
            errors["comfirmPassword"] = "*Password should match";
          }

          if (!this.state.streetName) {
            formIsValid = false;
            errors["streetName"] = "*Please enter your street name.";
          }

          if (!this.state.landmark) {
            formIsValid = false;
            errors["landmark"] = "*Please enter your landmark.";
          }

          if (!this.state.city) {
            formIsValid = false;
            errors["city"] = "*Please enter your city.";
          }

          if (!this.state.zipcode) {
            formIsValid = false;
            errors["zipcode"] = "*Please enter zipcode.";
          }

          if (!(this.state.zipcode.length===6)) {
            formIsValid = false;
            errors["zipcode"] = "*Please enter Valid zipcode.";
          }
         
          if (!this.state.userDOB) {
            formIsValid = false;
            errors["userDOB"] = "*Please select your date of birth.";
          }

          this.setState({
            errors: errors
          });
          return formIsValid;

    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container-fluid"  style={{marginTop:"20px",marginBottom:"30px"}} >
            <div>
            <h4 id="h4">EVENTPLANER</h4>
            <h1 id="h1">
                <Badge variant="secondary">Register here</Badge>
            </h1>
           
            </div>
            <div class="row" id="form"  style={{marginTop:"40px"}} >
            <div className="container-fluid">
            <div class="column">
            
            <form>
            <div className="container-fluid">
            <div class="row">
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.firstName}</div>
                </div>
                </div>
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>LastName</label>
                    <input type="text" placeholder="Enter Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.lastName}</div>
                </div>
                </div>
                </div>
                </div>
            <div className="form-group">
                <label>Email</label>
                <input placeholder="Enter Email-id" name="userEmail" className="form-control" value={this.state.userEmail} onChange={this.onChange}/>
                <div className="errorMsg">{this.state.errors.emailid}</div>
            </div>

        <div class="row">
        <div class="column">
            <div className="container">
            <div className="form-group">
                <label>Password</label>
                 <input type="password" placeholder="Enter Password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                 <div className="errorMsg">{this.state.errors.password}</div>
                </div> 
                </div>
                </div>
            <div class="column">
            <div className="container">
            <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Enter Password " name="comfirmPassword" className="form-control" value={this.state.comfirmPassword} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.comfirmPassword}</div>
                </div>
                </div>
                </div>
                </div>
            <div className="form-group">
                <label>Date Of Birth</label>
                <input type="Date" placeholder="Select DOB" name="userDOB" className="form-control" value={this.state.userDOB} onChange={this.onChange}/>
                <div className="errorMsg">{this.state.errors.userDOB}</div>
            </div>
            <div className="form-group">
                <lable>Select Gender</lable>
                    <select name="userGender" className="form-control" onChange={this.onChange}>
                        <option value='...' selected disabled>...</option>
                        <option value='FEMALE'>FEMALE</option>
                        <option value='MALE'>MALE</option>
                    </select>
                </div>
            
            <div class="row">
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>Select Security Question</label>
                    <select name="securityQuestion" className="form-control" onChange={this.onChange}>
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
                 </div>   
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>Security Answer</label>
                    <input type="text" placeholder="Enter security answer" name="securityAnswer" className="form-control" value={this.state.securityAnswer} onChange={this.onChange}/>
                </div>
                 </div>   
                </div>
                </div>
                </div>
                </form>
                </div>
        <div class="column">
            <form>
                <div className="container">
                <div class="row">
                <div class="column">
                <div className="container">
                    <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" placeholder="Enter contact number" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                    </div>
                    </div>
                    </div>
                <div class="column">
                <div className="container">
                    <div className="form-group">
                    <label>Select Role</label>
                    <select name="userRole" className="form-control" onChange={this.onChange}>
                        <option value='...' disabled selected>...</option>
                        <option value='CUSTOMER'>CUSTOMER</option>
                        <option value='PROPRIETOR'>PROPRIETOR</option>
                        <option value='ADMIN'>ADMIN</option>
                    </select>
                    </div>
                    </div>
                </div>
                </div>
            
        <div class="row">
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>House/Flat No.</label>
                    <input type="text" placeholder="Enter House/Flat No." name="houseNo" className="form-control" value={this.state.houseNo} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>Street Name</label>
                    <input type="text" placeholder="Enter Street" name="streetName" className="form-control" value={this.state.streetName} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.streetName}</div>
                </div>
                </div>
                </div>
                </div>
               
                <div className="form-group">
                    <label>Landmark</label>
                    <input placeholder="Enter landmark" name="landmark" className="form-control" value={this.state.landmark} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.landmark}</div>
                </div>
            <div class="row">
            <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>City </label>
                    <input placeholder="Enter city" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                    <div className="errorMsg">{this.state.errors.city}</div>
                </div>
                </div>
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>District</label>
                    <input type="text" placeholder="Enter district" name="district" className="form-control" value={this.state.district} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                </div>
            <div class="row">
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="Enter state" name="State" className="form-control" value={this.state.State} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>Country </label>
                    <input type="text" placeholder="Enter country" name="country" className="form-control" value={this.state.country} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                </div>
                <div className="form-group">
                   <label>Zipcode</label>
                  <input type="text" placeholder="Enter zipcode" name="zipcode" className="form-control" value={this.state.zipcode} onChange={this.onChange}/>
                  <div className="errorMsg">{this.state.errors.zipcode}</div>
                </div>
                </div>
                </form>
                </div>
                </div>
                </div>
                <div className="text-center"><button className="btn btn-success" onClick={this.saveUser}>Confirm and Register</button></div>
                <BottomNav/>
                </div>
        );
    } 
}

export default AdminRegister;