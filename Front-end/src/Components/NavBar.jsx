import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import {Link} from 'react-router-dom';
//import Nav from 'react-bootstrap/Nav'



class NavBar extends Component {
    render() {
        return (
             <div>
                <div class="navbar">
                    <a class="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a> 
                    <a href="/aboutus"><i class="fa fa-fw fa-search"></i> About</a> 
                    <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
                    <a href="/price"><i class="fa fa-fw fa-envelope"></i>Price</a> 
                    <a href="/user/login"><i class="fa fa-fw fa-user"></i> SignIn</a>
                    <a href="/user/register"><i class="fa fa-user-plus"></i> SignUp</a>
                </div>
            </div>
        );
    }
}

export default NavBar;