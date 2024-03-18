import React, { Component } from 'react'
import ProprietorService from "../Services/ProprietorServices";
import { connect } from 'react-redux';
import {ADDVENUE} from "../actions/validationActions";
import Jumbotron from 'react-bootstrap/Jumbotron';
//import {Container} from 'react-bootstrap/Jumbotron';
//import Carousel from 'react-bootstrap/Carousel';

class AddVenue extends Component{

    constructor(props){
        super(props);
        this.state ={
            venueName: '',
            venueDescription: '',
            venueCapacity: '',
            venuePackage: '',
            venuePricePerDay: '',
            houseNo: '',
            streetName: '',
            landmark: '',
            city: '',
            district: '',
            State: '',
            country: '',
            zipcode:'',
            venueProprietor:this.props.storedUser
        }

        this.saveVenue = this.saveVenue.bind(this);
    }

    saveVenue = (e) => {
        e.preventDefault();
        console.log("Address values : "+this.state.houseNo+" "+this.state.streetName+" "+this.state.landmark+" "+this.state.city+" "+this.state.district+" values are received");
        let venue = {venueName: this.state.venueName, venueDescription: this.state.venueDescription, venueCapacity: this.state.venueCapacity, 
            venuePricePerDay: this.state.venuePricePerDay, venueAddress:{
                                                                        houseNo:this.state.houseNo,
                                                                        streetName:this.state.streetName,
                                                                        landmark:this.state.landmark,
                                                                        city:this.state.city,
                                                                        district:this.state.district,
                                                                        state:this.state.State,
                                                                        country:this.state.country,
                                                                        zipcode:this.state.zipcode
                                                                        },
                                                                        venueProprietor:this.state.venueProprietor
                                                            };
        console.log("Sending for insertion venue: "+venue);
        ProprietorService.addVenue(venue)
            .then(res => {
                console.log("venue added successfully..."+JSON.stringify(res.data));
                this.props.storeVenue(res.data);
                alert("Venue Added Successfully...");
                this.props.history.push('/proprietor/myvenues/addvenue/addFeatures');
            },
            err=>{
                console.log("caught error in addVenue method: "+err);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <Jumbotron id="jumbo">
            <h1 id="h1"><b>HELLO {(this.state.venueProprietor.firstName+" "+this.state.venueProprietor.lastName).toUpperCase()}!!!</b></h1>
            <div class="example1">
            <h3>WELCOME TO EMS..REGISTER YOUR BEAUTIFUL VENUE HERE</h3>
            </div>
            </Jumbotron>

            <div class="row" id="row1">
            <div class="column">
            <form>
            <div className="container">
                <div className="form-group">
                    <label>Venue Name:</label>
                    <input type="text" placeholder="Enter Venue Name" name="venueName" className="form-control" value={this.state.venueName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" placeholder="Write Description" name="venueDescription" className="form-control" value={this.state.venueDescription} onChange={this.onChange}/>
                </div>
                <div class="row">
                    <div class="column">
                    <div className="container">
                    <div className="form-group">
                    <label>Capacity</label>
                    <input type="text" placeholder="Enter Capacity" name="venueCapacity" className="form-control" value={this.state.venueCapacity} onChange={this.onChange}/>
                </div>
                    </div>
                    </div>
                    <div class="column">
                    <div className="container">
                    <div className="form-group">
                    <label>Price Per Day</label>
                    <input placeholder="Enter Price Per Day" name="venuePricePerDay" className="form-control" value={this.state.venuePricePerDay} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="column">
                <div class="container">
                <div className="form-group">
                    <label>Flat/House No.</label>
                    <input type="text" placeholder="Enter Flat/House No." name="houseNo" className="form-control" value={this.state.houseNo} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                <div class="column">
                <div className="container">
                <div className="form-group">
                    <label>Street Name </label>
                    <input type="text" placeholder="Enter Street" name="streetName" className="form-control" value={this.state.streetName} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                </div>
                </div>
            </form>
            </div>
            <div class="column">
                <form>
                <div class="container">
                <div class="row">
                   <div class="column">
                   <div class="container">
                <div className="form-group">
                    <label>Landmark</label>
                    <input placeholder="Enter Landmark" name="landmark" className="form-control" value={this.state.landmark} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                <div class="column">
                    <div class="container">
                    <div className="form-group">
                    <label>City </label>
                    <input placeholder="Enter City" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>
                </div>
                </div>
                </div> 
                       
                   <div class="row">
                        <div class="column">
                        <div class="container">
                        <div className="form-group">
                            <label>District</label>
                            <input type="text" placeholder="Enter District Name" name="district" className="form-control" value={this.state.district} onChange={this.onChange}/>
                        </div>
                        </div>
                        </div>
                        <div class="column">
                        <div class="container">
                             <div className="form-group">
                            <label>State</label>
                            <input type="text" placeholder="Enter State" name="State" className="form-control" value={this.state.State} onChange={this.onChange}/>
                        </div>
                        </div>
                        </div>
                        </div> 
                    <div class="row">
                        <div class="column">
                        <div class="container">
                        <div className="form-group">
                            <label>Country </label>
                            <input type="text" placeholder="Enter Country" name="country" className="form-control" value={this.state.country} onChange={this.onChange}/>
                        </div>
                        </div>
                        </div>
                        <div class="column">
                        <div class="container">
                        <div className="form-group">
                    <label>Zipcode</label>
                    <input type="text" placeholder="Enter Zipcode" name="zipcode" className="form-control" value={this.state.zipcode} onChange={this.onChange}/>
                       </div>
                        </div>
                        </div>
                        </div> 
                        <div className="text-center" style={{marginTop:"30px"}}><button className="btn btn-success" onClick={this.saveVenue}>Proceed to Next Page</button></div>
                        </div>                         
                     </form>
                 </div>
             </div>
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
        storeVenue:(venue)=>{dispatch(ADDVENUE(venue))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddVenue);