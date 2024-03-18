import React, { Component } from 'react';
import ProprietorService from "../Services/ProprietorServices";
import { connect } from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../Components/NavBar';
import Button from "react-bootstrap/Button";

class AddDecoration extends Component {

    constructor(props){
        super(props);
        this.state ={
            decorationDescription: '',
            decorationPrice: '',
            decoarationVenue:this.props.storedVenue
        }

        this.saveDecoration = this.saveDecoration.bind(this);
    }

    saveDecoration = (e) => {
        e.preventDefault();
        let decoration = {decorationDescription: this.state.decorationDescription, decorationPrice: this.state.decorationPrice
        ,decoarationVenue:this.props.storedVenue};

        ProprietorService.addDecoration(this.state.decoarationVenue.venueId,decoration)
            .then(res => {
                console.log("Decoration added successfully...");
                this.props.history.push('/proprietor/myvenues/addvenue/addFeatures');
            },err=>{
                console.log(" caught an err in add decoration : "+err);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar/>
            <Jumbotron style={{height:"300px",backgroundImage:"url('/Images/deco5.jpg')"}}> </Jumbotron>
            
            <h2 class="text-center" id="text" style={{marginBottom:"30px"}}><b>Add Decoration</b></h2>
             <div className="card card-body col-md-6 offset-md-3 offset-md-3" style={{marginBottom:"30px"}}>
            <Jumbotron style={{height:"100%",marginTop:"15px",marginRight:"15px",marginLeft:"15px"}}>
            <form>
                <div className="form-group">
                <label  id="th">Decoration Description</label>
                    <input type="text"  placeholder="Write Desription..." name="decorationDescription" className="form-control" value={this.state.decorationDescription} onChange={this.onChange}/>
                    </div>

            <div className="form-group">
                <label  id="th">Price</label>
                    <input type="text" placeholder="Enter price " name="decorationPrice" className="form-control" value={this.state.decorationPrice} onChange={this.onChange}/>
                </div>

                <div className="text-center"><button className="btn btn-success" onClick={this.saveDecoration}>Add</button></div>
            </form>
            </Jumbotron>
            <h5 style={{textAlign:"center",color:"red"}}><i>*You Can Register Multiple Decorations</i></h5>
            </div>
            <div style={{marginLeft:'81%',marginTop:"100px",marginBottom:"40px"}}>
            <Button style={{marginTop:'20px',width:"200px"}} onClick={()=>this.props.history.push('/proprietor/myvenues/addvenue/addFeatures')}><i class="fa fa-arrow-left" aria-hidden="true">Back To Add Features</i></Button></div>   
            </div> 
        );
    } 
}

const mapStateToProps=(state)=>{
    return {
        storedUser:state.user,
        storedVenue:state.venue
    }
}

export default connect(mapStateToProps)(AddDecoration);