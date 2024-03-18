import React, { Component } from 'react';
import { connect } from "react-redux";
import { ADDMEAL, ADDDECORATION } from "../actions/validationActions";
import Form from "react-bootstrap/Form";
import { Table } from 'react-bootstrap';
import NavBar from './NavBar';
import Button from "react-bootstrap/Button";
import {REMOVEUSER,REMOVEVENUE,REMOVEMEAL,REMOVEDECORATION,REMOVEVENUELIST,REMOVESDATE,REMOVEEDATE} from "../actions/validationActions";

class ChooseMealAndDecoration extends Component {
    constructor(props){
        super(props);
        this.state={
            customer:this.props.storedUser,
            venue:this.props.storedVenue,
            meal:{},
            decoration:{}
        }
        this.saveMealandDecoration=this.saveMealandDecoration.bind(this);
        this.logout=this.logout.bind(this);
    }

    saveMealandDecoration = (e) => {
        e.preventDefault();
        console.log("retrived cutomer details : "+JSON.stringify(this.state.customer));
        console.log("retrived venue details : "+JSON.stringify(this.state.venue));
       console.log(" meal data submotted : "+JSON.stringify(this.state.meal));
       console.log(" decoration data submotted : "+JSON.stringify(this.state.decoration));
       this.props.storeMeal(this.state.meal);
       this.props.storeDecoration(this.state.decoration);
       this.props.history.push('/customer/bookEvent/venueList/venueDetails/addMealandDecoration/comfirmBooking');
    }

    logout=(e)=>{
        e.preventDefault();
        console.log(" in sign out click button function...removing.....");
        this.props.removeUser();
        this.props.removeVenue();
        this.props.removeVenueList();
        this.props.removeMeal();
        this.props.removeDecoration();
        this.props.removeSdate();
        this.props.removeEdate();
        this.props.history.push('/');
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: JSON.parse(e.target.value) });

    render() {
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar></NavBar>
            <div class="jumbotron" style={{backgroundImage:"url('/Images/backg.jpg')"}}>

         
                <div class="row">
                <div class="col-sm-4">
                <div class="thumbnail">
                 <img src="/Images/mealdeco3.jpg" alt="Nature"  style={{width:"400px"}}/>
                </div>
                 </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                <img src="/Images/mealdeco1.jpg" alt="Nature"  style={{width:"400px"}}/>
                </div>

                </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                <img src="/Images/mealdeco2.jpg" alt="Fjords" style={{width:"400px", marginRight:"20px"}}/>
                </div>  
                </div>
                </div>
                </div>
                <div class="jumbotron">
                    <h1  id="idj">Choose Meal & Decoration!!</h1>
                </div>
                <div className="container-fluid">
                <div class="row">
                <div class="column">
                <div class="jumbotron" style={{backgroundColor:'mintcream',backgroundImage:"url('/Images/meal1.jpg')"}}>
              
                <div className="row"  style={{marginTop:"40px"}}>
            <div className="card card-body col-md-10 offset-md-1 offset-md-1" style={{backgroundColor:'rgba(52,52,52,0.3)'}}>
                <Form>
                <Table style={{color:'white'}}>
                        <thead>
                            <tr >
                                <th></th>
                                <th id="th">Meal Name</th>
                                <th id="th">Description</th>
                                <th id="th">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.venue.meals.map(
                                        meal=>
                                            <tr key={meal.mealId}>
                                                <input type="radio" name="meal" value={JSON.stringify(meal)} onChange={this.onChange}/>
                                                <td>{meal.mealName}</td>
                                                <td>{meal.mealDescription}</td>
                                                <td>{meal.mealPricePerPerson}</td>
                                            </tr>
                                    )
                                }
                        </tbody>
                </Table>
                </Form>
            </div>
            </div>
            </div>
            </div>
            <div class="column">
            <div class="jumbotron" style={{marginLeft:"20px",backgroundImage:"url('/Images/deco5.jpg')",height:"94%"}}>
         
            <div className="row" style={{marginTop:"40px"}}>
            <div className="card card-body col-md-10 offset-md-1 offset-md-1" style={{backgroundColor:'rgba(52,52,52,0.3)'}}>
                <Form>
                <Table style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="th">Decoration Description</th>
                                <th id="th">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.venue.decorations.map(
                                        decoration=>
                                            <tr key={decoration.decorationId}>
                                                <input type="radio" name="decoration" value={JSON.stringify(decoration)} onChange={this.onChange}/>
                                                <td>{decoration.decorationDescription}</td>
                                                <td>{decoration.decorationPrice}</td>
                                            </tr>
                                    )
                                }
                        </tbody>
                </Table>
                </Form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div style={{marginLeft:'52%',marginTop:"20px",marginBottom:"40px"}}>
                         <Button style={{marginTop:'20px',width:"200px",}} onClick={this.saveMealandDecoration}><i class="fa fa-arrow-right"></i> Proceed for Booking</Button>
                         <Button style={{marginTop:'20px',width:"150px",marginLeft:'12px'}} onClick={()=>this.props.history.push('/customer/bookEvent/venueList')}><i class="fa fa-list" aria-hidden="true" ></i> Venue List</Button>
                         <Button style={{marginTop:'20px',width:"150px",marginLeft:'12px'}} onClick={()=>this.props.history.push('/customer/homepage')}><i class="fa fa-fw fa-home"></i> My Home</Button>
                         <Button style={{marginTop:'20px',width:"130px",marginLeft:'12px'}} onClick={this.logout}><i class="fas fa-sign-out-alt"></i> Sign Out</Button>
                    </div> 
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

    const mapDispatchToProps=(dispatch)=>{
    return {
        storeMeal:(meal)=>{dispatch(ADDMEAL(meal))},
        storeDecoration:(decoration)=>{dispatch(ADDDECORATION(decoration))},
        removeUser:()=>{dispatch(REMOVEUSER())},
        removeVenue:()=>{dispatch(REMOVEVENUE())},
        removeMeal:()=>{dispatch(REMOVEMEAL())},
        removeDecoration:()=>{dispatch(REMOVEDECORATION())},
        removeVenueList:()=>{dispatch(REMOVEVENUELIST())},
        removeSdate:()=>{dispatch(REMOVESDATE())},
        removeEdate:()=>{dispatch(REMOVEEDATE())}
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(ChooseMealAndDecoration);