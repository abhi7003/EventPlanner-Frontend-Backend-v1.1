import React, { Component } from 'react'
import ProprietorService from "../Services/ProprietorServices";

class venueAddress extends Component{

    constructor(props){
        super(props);
        this.state ={
            streetName: '',
            landmark: '',
            city: '',
            district: '',
            state: '',
            country: '',
            zipcode:'',
        }

        this.saveVenueAddress = this.saveVenueAddress.bind(this);
    }

    saveVenueAddress = (e) => {
        e.preventDefault();
        let address = {streetName: this.state.streetName, landmark: this.state.landmark, city: this.state.city, district: this.state.district, 
            state: this.state.state,country: this.state.country, zipcode: this.state.zipcode};
        ProprietorService.addVenueAddress(address)
            .then(res => {
                this.props.history.push('/proprietor/addVenue/addFeatures');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container">
            <div className="row">
            <div className="card card-body col-md-6 offset-md-3 offset-md-3">
            
                <h2 className="text-center">Address</h2>
                <form>
                <div className="form-group">
                    <label>House Number</label>
                    <input type="text" placeholder="Enter House Number" name="houseNo" className="form-control" value={this.state.houseNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Street Name </label>
                    <input type="text" placeholder="Enter Street Name" name="streetName" className="form-control" value={this.state.streetName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Landmark</label>
                    <input placeholder="Enter landmark" name="landmark" className="form-control" value={this.state.landmark} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>City </label>
                    <input placeholder="Enter city name" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>District</label>
                    <input type="text" placeholder="Enter district name" name="district" className="form-control" value={this.state.district} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="enter state" name="state" className="form-control" value={this.state.state} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Country </label>
                    <input type="text" placeholder="Enter country name" name="country" className="form-control" value={this.state.country} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Zipcode</label>
                    <input type="text" placeholder="Enter zipcode" name="zipcode" className="form-control" value={this.state.zipcode} onChange={this.onChange}/>
                </div>
                <div className="text-center"><button className="btn btn-success" onClick={this.saveUser}>Register</button></div>
                
            </form>
            </div>
            </div>    
    </div>
        );
    } 
}

export default Address;