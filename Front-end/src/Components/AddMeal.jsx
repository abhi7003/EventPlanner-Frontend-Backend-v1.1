import React, { Component } from 'react';
import ProprietorService from "../Services/ProprietorServices";
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../Components/NavBar';
import Button from "react-bootstrap/Button";

class AddMeal extends Component {

    constructor(props){
        super(props);
        this.state ={
            mealName: '',
            mealDescription: '',
            mealPricePerPerson: '',
            mealVenue:this.props.storedVenue
        }

        this.saveMeal = this.saveMeal.bind(this);
    }

    saveMeal = (e) => {
        e.preventDefault();
        let meal = {mealName: this.state.mealName, mealDescription: this.state.mealDescription,
             mealPricePerPerson: this.state.mealPricePerPerson,mealVenue:this.state.mealVenue};
        ProprietorService.addMeal(this.state.mealVenue.venueId,meal)
            .then(res => {
                console.log("meal added successfully..."+res.data);
                alert("Meal entry added...");
                this.props.history.push('/proprietor/myvenues/addvenue/addFeatures');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar/>
            <Jumbotron style={{height:"300px",backgroundImage:"url('/Images/meal5.jpg')"}}> </Jumbotron>
            <h2 className="text-center" id="text" style={{marginBottom:"30px"}}><b>Add Meal</b></h2>
            <div className="row">
            <div className="card card-body col-md-6 offset-md-3 offset-md-3">
            <Jumbotron style={{height:"100%",marginTop:"15px",marginRight:"15px",marginLeft:"15px"}}>
              
                <form>
                <div className="form-group">
                    <label id="th">Meal Name:</label>
                    <input type="text" placeholder="Enter meal Name" name="mealName" className="form-control" value={this.state.mealName} onChange={this.onChange}/> 
                </div>

                <div className="form-group">
                    <label id="th">Description</label>
                    <input type="text" placeholder="Write Description" name="mealDescription" className="form-control" value={this.state.mealDescription} onChange={this.onChange}/> 
                     </div>

                <div className="form-group">
                    <label id="th">Price Per Person</label>
                    <input type="text" placeholder="Enter price per person" name="mealPricePerPerson" className="form-control" value={this.state.mealPricePerPerson} onChange={this.onChange}/>
                </div>
                <div className="text-center"><button className="btn btn-success" onClick={this.saveMeal}>Add</button></div> 
             </form>
             </Jumbotron>
             <h5 style={{textAlign:"center",color:"red"}}><i>*You Can Register Multiple Meals</i></h5>
            </div>
            </div> 
            <div style={{marginLeft:'81%',marginTop:"20px",marginBottom:"40px"}}>
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

export default connect(mapStateToProps)(AddMeal);