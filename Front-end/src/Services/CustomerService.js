import axios from 'axios';

const SPRING_BOOT_CUSTOMER_BASE_URL='http://localhost:6060/customer'; 

class CustomerService{

    fetchVenueList(venuerequestDTO){
        
        //method to get venue list from backend based on parameters swnt through venueRequestDTO
        console.log("Sending request parameters as : "+JSON.stringify(venuerequestDTO));
        return axios.post(SPRING_BOOT_CUSTOMER_BASE_URL+"/venueList",venuerequestDTO);
    }

    //method for final booking of venue 

    bookVenue(bookingRecord){
        console.log(" in bookVenue mehtod of customer service ");
        return axios.post(SPRING_BOOT_CUSTOMER_BASE_URL+"/bookVenue",bookingRecord);
    }

    //method to get all booking records 
    getVenueList(user){
        console.log(" in get venue list with user : "+user);
        return axios.post(SPRING_BOOT_CUSTOMER_BASE_URL+"/bookinghistory",user);
    }
}

export default new CustomerService();