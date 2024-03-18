import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import CustomerService from "../Services/CustomerService";
import BottomNav from "../Components/BottomNav";
import { CardDeck } from 'react-bootstrap';

class ComfirmBooking extends Component {
    constructor(props){
        super(props);
        this.state={
            customer:this.props.storedUser,
            venue:this.props.storedVenue,
            meal:this.props.storedMeal,
            decoration:this.props.storedDecoration,
            startDate:this.props.storedStartDate,
            endDate:this.props.storedEndDate
        }
        this.comfirmVenueBooking=this.comfirmVenueBooking.bind(this);
        this.calculateTotalBill=this.calculateTotalBill.bind(this);
        //this.changeDateFormat=this.changeDateFormat.bind(this);
        //this.rentAmount=this.rentAmount.bind(this);
    }

    comfirmVenueBooking=(e)=>{
        e.preventDefault();
            let bookingRecord={
                startDate:this.state.startDate,
                endDate:this.state.endDate,
                bookedBy:this.state.customer,
                bookedVenue:this.state.venue,
                choosenMeal:this.state.meal,
                choosenDecoration:this.state.decoration
            }

        CustomerService.bookVenue(bookingRecord)
        .then(Response=>{
            console.log(" Booking done successfully....");
            alert("Booking done successfully...");
            this.props.history.push("/customer/bookEvent/venueList/venueDetails/addMealandDecoration/comfirmBooking/thankyou");
        },err=>{
            console.log("Caught Error : "+err);
        });

    }

    calculateTotalBill=()=>
    {
        let vprice=JSON.stringify(this.state.venue.venuePricePerDay);
        let mprice=JSON.stringify(this.state.meal.mealPricePerPerson);
        let dprice=JSON.stringify(this.state.decoration.decorationPrice);
        let capacity=JSON.stringify(this.state.venue.venueCapacity);
        let total=parseInt(vprice)+(parseInt(mprice)*parseInt(capacity))+parseInt(dprice);
        console.log("vprice :"+vprice+" mprice :"+mprice+" total:"+total);
        // console.log("2+3 ="+(2+3));
        // console.log("Meal price :"+parseInt(this.state.meal.mealPricePerPerson,10)+parseInt(this.state.venue.venuePricePerDay),10);
        // let vprice=parseInt((this.state.venue.venuePricePerDay),10);
        // let mprice=parseInt((this.state.mealPricePerPerson),10);
        // let dprice=parseInt((this.state.decorationPrice),10);
        //console.log(totalmp);
        // console.log(vprice+" "+mprice+" ")
        // console.log(JSON.stringify(this.state.venue.venuePricePerDay)+" "+ JSON.stringify(this.state.mealPricePerPerson)+" "+ JSON.stringify(this.state.decorationPrice));
         return total;
    }
    
    

    /*function changeDateFormat(inputDate){  // expects Y-m-d
        var splitDate = inputDate.split('-');
        if(splitDate.count == 0){
            return null;
        }
    
        var year = splitDate[0];
        var month = splitDate[1];
        var day = splitDate[2]; 
    
        return month + '\\' + day + '\\' + year;
    }

    function rentAmount(){
        var d1=this.changeDateFormat(this.state.startDate);
        console.log("start date : "+JSON.strigify(d1))
        var d2=this.changeDateFormat(this.state.startDate);
        console.log("end date : "+JSON.strigify(d2))
        var diffintime=d2.getTime()-d1.getTime();
        var daysdiff=diffintime/(1000*3600*24);
        console.log(" days diff : "+daysdiff);
        return daysdiff*(this.state.venue.venuePricePerDay);
    }*/

    render() {
        console.log("Object recived are : customer details : "+JSON.stringify(this.state.customer));
        console.log("Object recived are : venue details : "+JSON.stringify(this.state.venue));
        console.log("Object recived are : meal details : "+JSON.stringify(this.state.meal));
        console.log("Object recived are : decoration details : "+JSON.stringify(this.state.decoration));
        console.log("Object recived are : start date  details : "+JSON.stringify(this.state.startDate));
        console.log("Object recived are : end date details : "+JSON.stringify(this.state.endDate));
        return (
            <div>
            <div style={{margin:'30px',textAlign:"center",fontFamily:"Playfair Display SC",fontSize:"70px"}}><h2>Booking Details</h2></div>
               <div className="container-fluid">
               <CardDeck>
                <Card style={{margin:'30px'}}>
                    <Card.Header as="h5" id="font2">Venue Details </Card.Header>
                    <Card.Body>
                    <Card.Text>
                            <strong>Venue Name :</strong> {this.state.venue.venueName} <br/>
                            <strong>Venue Package:</strong> {this.state.venue.venuePackage} <br/>
                            <strong>venue Capacity :</strong> {this.state.venue.venueCapacity} <br/>
                            <strong>venue Desciption :</strong> {this.state.venue.venueDescription} <br/>
                            <strong>venue price :</strong> {this.state.venue.venuePricePerDay}<br/>
                            <strong>Venue Address :</strong> {this.state.venue.venueAddress.streetName} , {this.state.venue.venueAddress.landmark} ,{this.state.venue.venueAddress.city} , <br/>
                                            {this.state.venue.venueAddress.state}, {this.state.venue.venueAddress.zipcode}
                     </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{margin:'30px'}}>
                    <Card.Header as="h5" id="font2">Meal Details </Card.Header>
                    <Card.Body>
                    <Card.Text>
                            <strong>Meal Name :</strong> {this.state.meal.mealName} <br/>
                            <strong>Meal Descritpion :</strong> {this.state.meal.mealDescription} <br/>
                            <strong>Meal Price Per Plate :</strong> {this.state.meal.mealPricePerPerson} <br/>
                            <strong>Meal Total Price  :</strong> {this.state.venue.venueCapacity*this.state.meal.mealPricePerPerson}<br/>
                     </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{margin:'30px'}}>
                    <Card.Header as="h5" id="font2">Decoration Details </Card.Header>
                    <Card.Body>
                    <Card.Text>
                            <strong>Decoration Descritpion :</strong> {this.state.decoration.decorationDescription} <br/>
                            <strong>Decoration Price  :</strong> {this.state.decoration.decorationPrice} <br/>
                     </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
                <Card style={{margin:'30px'}}>
                    <Card.Header as="h5" id="font2">Total Bill Amount:{this.calculateTotalBill()}</Card.Header>
                </Card>
                <Card style={{margin:'30px'}}>
                    <Card.Header as="h5" id="font2">Proprietor Details </Card.Header>
                    <Card.Body>
                    <Card.Text>
                            <strong>Proprietor Name :</strong> {this.state.venue.venueProprietor.firstName+" "+this.state.venue.venueProprietor.lastName} <br/>
                            <strong>Proprietor Contact No :</strong> {this.state.venue.venueProprietor.contactNo} <br/>
                            <strong>Proprietor email :</strong> {this.state.venue.venueProprietor.userEmail} <br/>
                            <strong>Proprietor Address :</strong> {this.state.venue.venueProprietor.userAddress.houseNo+" "+this.state.venue.venueProprietor.userAddress.streetName+" "+this.state.venue.venueProprietor.userAddress.landmark+" "+this.state.venue.venueProprietor.userAddress.city} <br/>
                     </Card.Text>
                    </Card.Body>
                </Card>
                </div>
              
                <div className="text-center" style={{margin:'30px'}}><button className="btn btn-info"  onClick={this.comfirmVenueBooking}>Confirm & Book Venue</button></div>
            <BottomNav/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        storedUser:state.user,
        storedVenue:state.venue,
        storedMeal:state.meal,
        storedDecoration:state.decoration,
        storedStartDate:state.startDate,
        storedEndDate:state.endDate
        }
    }

export default connect(mapStateToProps)(ComfirmBooking);