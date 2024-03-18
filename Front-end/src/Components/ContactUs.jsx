import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Image from 'react-bootstrap/Image';
import NavBar from './NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BottomNav from "../Components/BottomNav";


class ContactUs extends Component {
    render() {
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar></NavBar>

            <Jumbotron id="jumboc">
            <p id="jumh1">Contact Us</p>
            </Jumbotron>

            <div className="conatainer-fluid">
            <div class="row">
            <div class="column">
            <div className="container-fluid">
            <img src="/Images/conta.jpg" alt="First slide"/>
            </div>
            </div>
            <div class="column">
            <div className="container-fluid" id="c1">
           
             <h1 id="fo1">GET IN TOUCH</h1>
             <div class="row1">
            
            <div class="column1">
            <i class="fa fa-map-marker fa-3x" id="fa1"></i>
            <h5 id="pd1">ADDRESS</h5>
            <p>Firm Name:- Rahane Mandap Decorators</p>
            <p>Owner Name - Mr. Balasaheb Rahane</p>
            <p>Merchant Bank Colony, Khanderao Road Chandwad Dist-Nashik 423101</p>
            <p></p>
            </div>

            <div class="column1">
            <i class="fa fa-phone fa-3x"id="fa2"></i>
            <h5 id="pd2">PHONE</h5>
            <p>Firm Name:- Rahane Mandap Decorators</p>
           
              CONTACT :8999782258
            <p></p>
            <h6>EVENTPLANER 24/7 SERVICE DEPARTMENT</h6>
           
            </div>
            
            <div class="column1">
            <i class="fa fa-envelope fa-3x"id="fa3"></i>
            <h5 id="pd3">EMAIL</h5>
            <p>Firm Name:- Rahane Mandap Decorators</p>
            <h5>ABOUT EVENT</h5>
            <p>info@eventplanner.com</p>
            <h5>Emplyoyment Opporunities</h5>
            <p>carrer@eventplanner.com</p>
            </div>
            
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

export default ContactUs;