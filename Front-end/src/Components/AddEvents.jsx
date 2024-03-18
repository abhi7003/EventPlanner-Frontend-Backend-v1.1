import React, { Component } from 'react';
import ProprietorService from "../Services/ProprietorServices";
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../Components/NavBar';
import Button from "react-bootstrap/Button";

class AddEvents extends Component {
    constructor(props){
        super(props);
        this.state={
           eventVenue:this.props.storedVenue,
            events:[],
            eventList:["WEDDING","RECEPTION","BIRTHDAY_PARTY","FAREWELL_PARTY","THEME_PARTY","BABY_SHOWER","WORKSHOP"]
        }
        this.addEvents = this.addEvents.bind(this);   
    }

    addEvents = (e) => {
        e.preventDefault();
        ProprietorService.addEvents(this.state.eventVenue.venueId,this.state.events)
            .then(res => {
                console.log("Events added successfully...");
                alert("Events  added...");
                this.props.history.push('/proprietor/myvenues/addvenue/addFeatures');
            });
            console.log("Events Added : "+JSON.stringify(this.state.events));
    }

    onChange = (e) =>{
        e.preventDefault();
        console.log("in on change with value : "+e.target.value);
        let newitem=e.target.value;
        this.setState(
            {
                events:this.state.events.concat(newitem)
            }
        )
    }
        

  
        

    render() {
        return (
            <div className="container-fluid">
            <h4 id="h4">EVENTPLANER</h4>
            <NavBar/>
            <Jumbotron style={{height:"300px",backgroundImage:"url('/Images/event3.jpg')"}}> </Jumbotron>
            <h2 className="text-center" id="text" style={{marginBottom:"30px"}}><b>Add Event</b></h2>
            <div className="row">
            <div className="card card-body col-md-6 offset-md-3 offset-md-3">
            <Jumbotron style={{height:"100%",marginTop:"15px",marginRight:"15px",marginLeft:"15px"}}>
              
         

        
            <form>
          
            
            <label class="container" style={{marginLeft:"20%",fontSize:"20px",fontFamily: "Frank Ruhl Libre"}} >WEDDING
            <input type="checkbox" name="events" value="WEDDING" onChange={this.onChange}style={{marginLeft:"80px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>

            <label class="container"  style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}}>RECEPTION
            <input type="checkbox" name="events" value="RECEPTION" onChange={this.onChange}style={{marginLeft:"72px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>


            <label class="container"  style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}}>BIRTHDAY PARTY
            <input type="checkbox" name="events" value="BIRTHDAY_PARTY" onChange={this.onChange}style={{marginLeft:"42px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>

            <label class="container" style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}}>FAREWELL PARTY
            <input type="checkbox" name="events" value="FAREWELL_PARTY" onChange={this.onChange}style={{marginLeft:"40px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>


            <label class="container" style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}} >THEME PARTY
            <input type="checkbox" name="events" value="THEME_PARTY" onChange={this.onChange}style={{marginLeft:"58px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>

            <label class="container"  style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}}>BABY SHOWER
            <input type="checkbox" name="events" value="BABY_SHOWER" onChange={this.onChange}style={{marginLeft:"55px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>

            <label class="container" style={{marginLeft:"20%",fontSize:"20px",marginTop:"20px",fontFamily: "Frank Ruhl Libre"}} >WORKSHOP
            <input type="checkbox" name="events" value="WORKSHOP" onChange={this.onChange}style={{marginLeft:"70px",zoom:"1.8"}}></input>
            <span class="checkmark" style={{marginLeft:"40px"}}></span>
            </label>
           <div className="text-center" style={{width:"270px",marginTop:"20px",marginLeft:"20%"}}><button className="btn btn-success" onClick={this.addEvents}>Add</button></div> 



             {/* <label id="th">Choose Events</label>
                            <input type="checkbox" name="events" className="form-control" value="WEDDING" onChange={this.onChange}></input>WEDDING<br/>
                            <input type="checkbox" name="events" className="form-control" value="RECEPTION" onChange={this.onChange}></input>RECEPTION<br/>
                            <input type="checkbox" name="events" className="form-control" value="BIRTHDAY_PARTY" onChange={this.onChange}></input>BIRTHDAY_PARTY<br/>
                            <input type="checkbox" name="events" className="form-control" value="FAREWELL_PARTY" onChange={this.onChange}></input>FAREWELL_PARTY<br/>
                            <input type="checkbox" name="events" className="form-control" value="THEME_PARTY" onChange={this.onChange}></input>THEME_PARTY<br/>
                            <input type="checkbox" name="events" className="form-control" value="BABY_SHOWER" onChange={this.onChange}></input>BABY_SHOWER<br/>
                            <input type="checkbox" name="events" className="form-control" value="WORKSHOP" onChange={this.onChange}></input>WORKSHOP<br/>
        
                <div className="text-center"><button className="btn btn-success" onClick={this.addEvents}>Add</button></div>  */}
            </form>
             </Jumbotron>
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
        storedVenue:state.venue,
        emptyArray:state.eventList
    }
}

export default connect(mapStateToProps)(AddEvents);