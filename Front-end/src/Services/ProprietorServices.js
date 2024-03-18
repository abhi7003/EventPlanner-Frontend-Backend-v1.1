import axios from "axios";
const PROPRIETOR_CONTROLLER_BASE_URL='http://localhost:6060/proprietor';
class Proprietor{

    addVenue(venue){
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/myVenues/addVenue",venue);
    }

    addVenueAddress(address){
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/addVenue/addAddress",address);
    }

    addMeal(venueId,meal){
        console.log("received venue id :"+venueId+" and meal : "+meal);
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/myVenues/addVenue/addFeatures/addMeal/"+venueId,meal);
    }

    addDecoration(venueId,decoration){
        console.log("in ad decoration method with : venue id :"+venueId+" deccoration : "+JSON.stringify(decoration));
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/myVenues/addVenue/addFeatures/addDecoration/"+venueId,decoration);
    }

    addEvents(venueId,events){
        console.log("in ad add events method with objest  : "+JSON.stringify(events));
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/myVenues/addVenue/addFeatures/addEvents/"+venueId,events);
    }

    getVenueList(user){
        console.log("sending an user : "+user.userId);
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/myVenues", user);
    }

    deleteVenueById(venueId){
        console.log("in service mthos with venu id : "+venueId)
        return axios.delete(PROPRIETOR_CONTROLLER_BASE_URL+"/deleteVenue/"+venueId);
    }

    getBookedVenueList(user){
        return axios.post(PROPRIETOR_CONTROLLER_BASE_URL+"/bookedvenues",user);
    }

}

export default new Proprietor();