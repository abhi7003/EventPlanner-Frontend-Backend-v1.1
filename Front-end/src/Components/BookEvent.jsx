import React, { Component } from 'react';
import { ADDVENUELIST,ADDSDATE,ADDEDATE} from '../actions/validationActions';
import NavBar from '../Components/NavBar';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import CustomerService from '../Services/CustomerService';
import BottomNav from "../Components/BottomNav";

class BookEvent extends Component {
    constructor(props){
        super(props);
        this.state={
            customer:this.props.storedUser,
            venuePackage:'',
            sdate:'',
            edate:'',
            eventName:'',
            venueList:[]
        }
        
        this.getVenueList=this.getVenueList.bind(this);
    }

    getVenueList = (e) => {
        e.preventDefault();
        let venueRequestDTO = {venuePackage: this.state.venuePackage, sdate: this.state.sdate, 
            edate: this.state.edate, eventName:this.state.eventName };
            console.log("Secding venue request data venueRequestDTO: "+JSON.stringify(venueRequestDTO));

        CustomerService.fetchVenueList(venueRequestDTO)
            .then(res => {
                this.setState({venueList: res.data});
                if(this.state.venueList.length===0){
                    alert("No venues available for your request...!!!   Suggestions: change package or booking date");
                    console.log("venues not available : "+JSON.stringify(this.state.venueList));
                    this.props.history.push('/customer/bookEvent');
                }
                else{
                    console.log("in else statemnt : ");
                    console.log("Received List: "+JSON.stringify(this.state.venueList));
                //this.props.storeUser(this.state.customer);
                this.props.storeVenueList(this.state.venueList);
                console.log("Start Date : "+this.state.sdate);
                console.log("End date is : "+this.state.edate);
                this.props.storeSDate(this.state.sdate);
                this.props.storeEDate(this.state.edate);
                console.log("global state : startDate :"+this.props.storedStartDate);
                console.log("global state : startDate :"+this.props.storedEndDate);
                this.props.history.push('/customer/bookEvent/venueList');
                }
                
            },err=>{
                console.log("in error"+err);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container-fluid">
                 <h4 id="h4">EVENTPLANER</h4>
                 
                
                 <div class="jumbotron" style={{backgroundImage:"url('/Images/backg.jpg')"}}>
                 <div class="row">
                <div class="col-sm-4">
                <div class="thumbnail">
                 <img src="/Images/eve1.jpg" alt="Nature"  style={{width:"400px"}}/>
                </div>
                 </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                <img src="/Images/eve2.jpg" alt="Nature"  style={{width:"400px"}}/>
                </div>

                </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                <img src="/Images/eve4.jpg" alt="Fjords" style={{width:"450px", marginRight:"20px"}}/>
                </div>  
                </div>
                </div>
                </div>
                
                <h2 class="text-center" id="text" style={{marginBottom:"30px",color:"black"}}><b>Book An Event</b></h2>
                 
                <div class="jumbotron" style={{backgroundImage:"url('/Images/eve5.jpg')",marginLeft:"250px",marginRight:"250px"}}>
                <div className="row" id="formrow2">
                <div className="card card-body col-md-6 offset-md-3 offset-md-3" id="formrow3">
                            <form>
                            <div className="form-group">
                            <label id="th">Select Event</label>
                            <select name="eventName" className="form-control" onChange={this.onChange}>
                                <option value='...' selected disabled>...</option>
                                <option value='BIRTHDAY'>BIRTHDAY_PARTY</option>
                                <option value='RECEPTION'>RECEPTION</option>
                                <option value='THEME_PARTY'>THEME_PARTY</option>
                                <option value='WEDDING'>WEDDING</option> 
                                <option value='BABY_SHOWER'>BABY_SHOWER</option> 
                                <option value='WORKSHOP'>WORKSHOP</option> 
                                <option value='FAREWELL_PARTY'>FAREWELL_PARTY</option> 
                                <option value='ENGANGEMENT'>ENGANGEMENT</option> 
                            </select>
                            </div>
                            <div className="form-group">
                            <label id="th">Select Package </label>
                            <select name="venuePackage" className="form-control" onChange={this.onChange}>
                                <option value='...' selected disabled>...</option>
                                <option value='PLATINUM'>PLATINUM</option>
                                <option value='DIAMOND'>DIAMOND</option>
                                <option value='GOLDEN'>GOLDEN</option>
                                <option value='SILVER'>SILVER</option> 
                            </select>
                            </div>
                            <div className="form-group">
                                    <label id="th">Start Date</label><br/>
                                    <input type="date" name="sdate" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                    <label id="th">End Date</label><br/>
                                    <input type="date"  name="edate" onChange={this.onChange}/>
                            </div>
                            <div className="text-center"><button className="btn btn-success" onClick={this.getVenueList}>Submit</button></div>
                            
                            </form>
                            
                        </div>

                </div>
                </div>
                <div style={{marginLeft:'81%',marginTop:"20px",marginBottom:"40px"}}>
                             <Button style={{marginTop:'20px',width:"150px",}} onClick={()=>this.props.history.push("/customer/homepage")}> <i class='fa fa-angle-left'></i><i class='fa fa-angle-left'></i>  Back</Button></div>

                <BottomNav/>
                </div>

        );
    }
}

const mapStateToProps=(state)=>{
    return {
        storedUser:state.user,
        storedStartDate:state.startDate,
        storedEndDate:state.endDate
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        storeVenueList:(venueList)=>{dispatch(ADDVENUELIST(venueList))},
        storeSDate:(sdate)=>{dispatch(ADDSDATE(sdate))},
        storeEDate:(edate)=>{dispatch(ADDEDATE(edate))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookEvent);